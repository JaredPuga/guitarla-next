import { formateaFecha } from "@/utils/helpers"
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'

export default function Post({post}) {

    const {titulo, contenido, imagen, url, publishedAt} = post

  return (
    <article>
        <Image alt={`Imagen blog ${titulo}`} src={imagen.data.attributes.formats.medium.url} width={ 600 } height={ 400 }></Image>

        <div className={styles.contenido}>
            <h3>{ titulo }</h3>
            <p className={styles.fecha}>{ formateaFecha(publishedAt) }</p>
            <p className={styles.resumen}> { contenido } </p>

            <Link className={styles.enlace} href={`/blog/${url}`}>Leer más</Link>
        </div>
    </article>
  )
}
