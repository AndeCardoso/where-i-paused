export interface IPauseDomain {
  id: number;
  title: string;
  contentType: TContentTypes;
  totalTime: string;
  paused: string;
  season?: number;
  episode?: number;
  favorited?: boolean;
}

export type TContentTypes = "movie" | "series" | "music";
