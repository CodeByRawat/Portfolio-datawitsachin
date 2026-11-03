export type FolderId = 'resume' | 'portfolio' | 'contact';

export interface Folder {
  id: FolderId;
  label: string;
  sticker: string;
  bgClass: string;
  textClass: string;
  lift: number;
}

export interface PatchData {
  id: string;
  text: string;
  image: string;
  ringClass: string;
  left: string;
  top: string;
  size: string;
  rotate: number;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string;
  summary: string;
  tags: string[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  note: string;
}

export interface Social {
  label: string;
  short: string;
  href: string;
}