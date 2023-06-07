import Head from "@modules/common/components/head"
import FeaturedProducts from "@theme/sections/featured-products"
import Hero from "@theme/sections/hero"

const Home = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
