"use client";
import { RefObject, useEffect } from 'react';
import { MotionValue, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

type MV = MotionValue<number>;

export function useZipperMotion(target: RefObject<HTMLElement | null>, stage: RefObject<HTMLElement | null>) {
  const width = useMotionValue(1280);
  const height = useMotionValue(800);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const measure = () => {
      width.set(el.clientWidth);
      height.set(el.clientHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [stage, width, height]);

  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 38, mass: 0.35 });

  const pull = useTransform(progress, [0, 0.6], [0, 1]);
  const split = useTransform(progress, [0.62, 0.95], [0, 1]);

  const pullY = useTransform([pull, height] as MV[], ([p, h]: number[]) => 72 + p * (h - 72));
  const open = useTransform([pull, width] as MV[], ([p, w]: number[]) => p * w * 0.2);

  const leftClip = useTransform(
    [pullY, open, width, height] as MV[],
    ([y, o, w, h]: number[]) =>
    `polygon(0px 0px, ${w / 2 - o}px 0px, ${w / 2}px ${y}px, ${w / 2}px ${h}px, 0px ${h}px)`
  );
  const rightClip = useTransform(
    [pullY, open, width, height] as MV[],
    ([y, o, w, h]: number[]) =>
    `polygon(${w / 2 + o}px 0px, ${w}px 0px, ${w}px ${h}px, ${w / 2}px ${h}px, ${w / 2}px ${y}px)`
  );

  const teethLength = useTransform([pullY, open] as MV[], ([y, o]: number[]) => Math.sqrt(y * y + o * o) + 4);
  const teethTop = useTransform([pullY, teethLength] as MV[], ([y, l]: number[]) => y - l);
  const teethAngle = useTransform([pullY, open] as MV[], ([y, o]: number[]) => Math.atan2(o, y) * 180 / Math.PI);
  const leftTeethRotate = useTransform(teethAngle, (a) => -a);
  const centerX = useTransform(width, (w) => w / 2);
  const leftTeethX = useTransform(width, (w) => w / 2 - 14);
  const closedHeight = useTransform([pullY, height] as MV[], ([y, h]: number[]) => Math.max(0, h - y));

  const leftX = useTransform([split, width] as MV[], ([s, w]: number[]) => -s * w * 0.56);
  const rightX = useTransform([split, width] as MV[], ([s, w]: number[]) => s * w * 0.56);

  const tabOpacity = useTransform(split, [0, 0.12], [1, 0]);
  const revealScale = useTransform(pull, [0, 0.8], [0.92, 1]);
  const revealOpacity = useTransform(pull, [0.04, 0.45], [0.25, 1]);

  return {
    pullY,
    leftClip,
    rightClip,
    teethLength,
    teethTop,
    teethAngle,
    leftTeethRotate,
    centerX,
    leftTeethX,
    closedHeight,
    leftX,
    rightX,
    tabOpacity,
    revealScale,
    revealOpacity
  };
}