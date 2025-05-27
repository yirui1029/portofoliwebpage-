export type Instruction = {
  etape: string;
  texte: string;
};

export type Recette = {
  id: number;
  title: string;
  temps_preparation: string;
  temps_cuisson: string;
  ingredients: {
    nom: string;
    quantité: string;
  }[];
  instructions: Instruction[];
  img: {
    src: string;
    alt?: string;
  }[];
};