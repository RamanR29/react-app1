export type Match = {
  id: number;
  name: string;
  status: string;
  begin_at: string | null;
  opponents: {
    opponent: {
      id: number;
      name: string;
      image_url: string | null;
    };
  }[];
};
