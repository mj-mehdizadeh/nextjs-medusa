import FeaturedProducts from "../theme/sections/featured-products"

export type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imgUrl: string;
};

export type FeaturedProductsProps = {
  title: string;
  description: string;
  filter: any
  buttonText: string;
  buttonLink: string;
};
