export type Tournament = {
  id: number;
  name: string;
  begin_at: string | null;
  league: {
    name: string;
    image_url: string | null;
  };
  series: {
    full_name: string;
  } | null;
};
