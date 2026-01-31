
export interface PackageInfo {
  name: string;
  keywords: number;
  pages: string;
  content: string;
  report: string;
  price: string;
  featured?: boolean;
}

export interface KeywordTier {
  type: string;
  count: number;
  examples: string;
  pages: string;
}

export interface RoadmapStep {
  period: string;
  title: string;
  items: string[];
}
