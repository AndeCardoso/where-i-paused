import { ISelectOption } from "@components/base/Select/model";
import { TContentTypes } from "@domain/entities/Pause";

export interface IAddForm extends IAddSerie {
  title: string;
  contentType: ISelectOption<TContentTypes>;
  totalTime: string;
  paused: string;
  favorited?: boolean;
}

export interface IAddSerie {
  season?: number;
  episode?: number;
}

interface IAddMusic {
  duration: string;
  artist?: string;
  releaseYear?: number;
}
