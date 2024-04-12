import { PortableTextBlock } from "sanity";

export interface BenefitItemProps {
  title: string;
  coverUrl: string;
  description: PortableTextBlock[];
  className?: string;
  hasDate?: boolean;
  fromDate?: string;
  toDate?: string;
}
