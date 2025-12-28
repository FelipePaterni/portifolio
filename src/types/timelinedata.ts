export interface TimelineData {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description?: string;
}
