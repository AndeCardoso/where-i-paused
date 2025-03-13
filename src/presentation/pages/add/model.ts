import { ISelectOption } from "@components/base/Select/model";
import { TContentTypes } from "@domain/entities/Pause";

export interface IAddForm {
  title: string;
  contentType: ISelectOption<TContentTypes>;
  totalTime: string;
  paused: string;
  favorited?: boolean;
}

interface IAddMovie {
  duration: string;
  casting?: string;
  releaseYear?: number;
}

interface IAddSerie {
  duration: string;
  casting?: string;
  releaseYear?: number;
  totalEpisodes?: number;
  totalSeasons?: number;
}

interface IAddMusic {
  duration: string;
  artist?: string;
  releaseYear?: number;
}
