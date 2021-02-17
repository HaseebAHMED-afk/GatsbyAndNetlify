import React, { useEffect , useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const [data, setData] = useState("")

  useEffect( () => {
        const fetchData = async () => {
          const response = await fetch('.netlify/functions/hello')
           const Data = await response.json()
          setData(Data)
        }
        fetchData();
  } , [])

  return(
    <Layout>
    <SEO title="Home" />
    <p>{data.message}</p>
  </Layout>
  )
  
}

export default IndexPage
