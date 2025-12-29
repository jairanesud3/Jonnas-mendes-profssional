import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface PackageItem {
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechTag {
  name: string;
  icon: LucideIcon;
}