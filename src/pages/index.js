import { graphql,Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({data}) {
  console.log(`data`, data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Design</h2>
          <h3>Develop and Deploy</h3>
          <p>Full Stack Developer</p>
          <Link  to="/projects" className = {styles.btn}>My Projects</Link>
        </div>
        <img src="/banner.jpg" alt="banner" />
      </section>
    </Layout>

  )
}


export const query = graphql`query myQuery{
  site {
    siteMetadata {
      copyright
      description
      title
    }
  }
}
`