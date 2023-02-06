import Layout from "@/components/layout";
import { formateaFecha, Texto } from "@/utils/helpers";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from '../../styles/blog.module.css'


export default function Post({post}) {

    const { titulo, contenido, imagen, publishedAt } = post[0].attributes

  return (
    <Layout
        title={titulo}
    >
        <article className={`${ styles.post } ${styles['mt-3']}`}>
        <Image alt={`Imagen blog ${titulo}`} src={imagen.data.attributes.url} width={ 1000 } height={ 400 }></Image>

        <div className={styles.contenido}>
            <h3>{ titulo }</h3>
            <p className={styles.fecha}>{ formateaFecha(publishedAt) }</p>
            <ReactMarkdown  >{contenido}</ReactMarkdown>
        </div>
    </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
    const respuesta = await fetch(`${ process.env.API_URL }/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json()

    return {
        props: {
            post
        }
    }
}
