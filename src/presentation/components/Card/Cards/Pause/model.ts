import { IPauseDomain } from "@domain/entities/Pause";

export interface IPauseCardProps {
  onDelete: (id: number) => void;
  onFavorite: (id: number, bol: boolean) => void;
  onEdit: (id: number) => void;
  onOpen: (id: number) => void;
  isOpenned: boolean;
  isContrasted?: boolean;
  data: IPauseDomain;
}
