type Player = {
  id: number;
  name: string;
  image_url: string | null;
  nationality: string | null;
};

export type Team = {
  id: number;
  name: string;
  slug: string;
  image_url: string | null;
  players: Player[];
};
