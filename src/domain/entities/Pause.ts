export interface IPauseDomain {
  id: number;
  title: string;
  contentType: TContentTypes;
  totalTime: string;
  paused: string;
  favorited?: boolean;
}

export type TContentTypes = "movie" | "serie" | "music";
