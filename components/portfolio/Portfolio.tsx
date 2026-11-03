"use client";
import React, { useCallback, useState } from "react";
import { JacketHero } from "./JacketHero";
import { WorkSection } from "./WorkSection";
import { ContactFooter } from "./ContactFooter";
import { FolderSheet } from "./FolderSheet";
import { FolderId } from "@/lib/portfolio/types";

export default function Portfolio() {
  const [openFolder, setOpenFolder] = useState<FolderId | null>(null);
  const close = useCallback(() => setOpenFolder(null), []);

  return (
    <main className="w-full bg-navy font-display antialiased">
      <JacketHero onOpenFolder={setOpenFolder} />
      <WorkSection />
      <ContactFooter />
      <FolderSheet openId={openFolder} onClose={close} />
    </main>
  );
}
