export type PokemonsOptions = {
  name: string;
  url: string;
};

export type TypePagination = {
  count: number;
  next: string | null;
  previous: string | null;
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};
