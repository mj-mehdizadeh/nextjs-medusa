import Head from "@modules/common/components/head"
import { Assembly } from "@modules/Assembly"
import { Template } from "../types/template"
import { medusaClient } from "@lib/config"

const Home = ({template}: {template: Template}) => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Assembly template={template as Template}/>
    </>
  )
}

const fetchTemplate = async () => {
  return await medusaClient.client
    .request("GET", "/store/theme")
    .then(({ templates }) => templates)
}


export const getServerSideProps = async () => {
  const queryData = await fetchTemplate()

  if (!queryData) {
    return {
      props: {
        templates: {}
      },
    }
  }

  return {
    props: {
      template: queryData.index,
      _header: queryData._header,
      _footer: queryData._footer,
    },
  }
}


export default Home
