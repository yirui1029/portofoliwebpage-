export type Ingredient = {
  nom: string;
  quantité: string;
};

export type Recette = {
  id: number | string;
  title: string;
  temps_preparation: string;
  temps_cuisson: string;
  ingredients: Ingredient[];
  instructions: { [step: string]: string }[]; // conforme à ton JSON
  img: {
    src: string;
    alt?: string;
  }[];
};