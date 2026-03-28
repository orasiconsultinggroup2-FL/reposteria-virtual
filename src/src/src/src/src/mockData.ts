import { Recipe } from "./types";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Cupcakes de Vainilla",
    description: "Aprende a preparar cupcakes esponjosos y deliciosos.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    steps: [
      "Precalentar el horno a 180°C.",
      "Mezclar harina, azúcar y mantequilla.",
      "Agregar huevos y esencia de vainilla.",
      "Hornear por 20 minutos."
    ]
  },
  {
    id: 2,
    title: "Galletas con Chispas",
    description: "Clásicas galletas doradas con chispas de chocolate.",
    image: "https://images.unsplash.com/photo-1590080874088-62a2a2c9b3e1",
    steps: [
      "Batir mantequilla y azúcar.",
      "Agregar huevos y vainilla.",
      "Incorporar harina y chispas.",
      "Hornear por 12 minutos."
    ]
  }
];
