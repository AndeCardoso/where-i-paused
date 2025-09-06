export enum EContentTypes {
  MOVIE = "movie",
  SERIES = "series",
  MUSIC = "music",
}

export type TContentTypes = (typeof EContentTypes)[keyof typeof EContentTypes];

interface ISeriesDomain {
  season: number;
  episode: number;
}

interface IBasePauseDomain {
  id: number;
  title: string;
  contentType: TContentTypes;
  totalTime: string;
  paused: string;
  favorited?: boolean;
}

export type IPauseDomain<T extends TContentTypes = TContentTypes> =
  T extends EContentTypes.SERIES
    ? IBasePauseDomain & ISeriesDomain
    : IBasePauseDomain & Partial<ISeriesDomain>;
