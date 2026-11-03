"use client";
import React from 'react';

export function HeroCard() {
  return (
    <div className="absolute left-[4%] top-[16%] h-[62%] w-[44vw] rounded-md border-2 border-ink bg-paper px-[2.2vw] pb-[2.4vw] pt-[5vw] shadow-[6px_8px_0_rgba(0,0,0,0.28)] md:w-[38vw]">
      <span aria-hidden className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-ink/50 md:left-3 md:top-3" />
      <span aria-hidden className="absolute bottom-2 left-2 h-2.5 w-2.5 rounded-full border-2 border-ink/50 md:bottom-3 md:left-3" />
      <p className="text-[clamp(0.7rem,1.7vw,1.5rem)] font-medium text-ink/55">since 2020</p>
      <h1 className="mt-1 text-[clamp(0.95rem,3.6vw,3.4rem)] font-black uppercase leading-[0.95] tracking-tight text-ink">
        Automating
        <br />
        <span className="text-jacket">complex</span>
        <br />
        systems
      </h1>
    </div>);

}