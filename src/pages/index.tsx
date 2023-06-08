import Head from "@modules/common/components/head"
import templates from "../templates.json"
import { Assembly } from "@modules/Assembly"
import { Template } from "../types/template"

const Home = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Assembly template={templates.index as Template}/>
    </>
  )
}

export default Home
