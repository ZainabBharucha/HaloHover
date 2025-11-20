import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface PriceTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Stat {
  label: string;
  value: string;
}
