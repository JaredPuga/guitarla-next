import Curso from "@/components/curso";
import Guitarra from "@/components/guitarra";
import Layout from "@/components/layout"
import Post from "@/components/post";
import styles from '../styles/grid.module.css'

export default function Home({guitarras, post, curso}) {

  return (
    <div>
      <Layout 
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >

      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>

        <div className={styles.grid}>
                {
                  guitarras?.map(guitarra => (
                    <Guitarra 
                      key={guitarra.id}
                      guitarra = { guitarra.attributes }
                    />
                  ))
                }
        </div>
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className="contenedor">
          <h2 className="heading">Blog</h2>

          <div className={styles.grid}>
              {
                post.map(post => (
                  <Post 
                    key={post.id}
                    post={post.attributes}
                  />
                ))
              }
            </div>
      </section>

      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [ resGuitarras, resPost, resCurso ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso),
  ])

  const [ {data: guitarras}, {data: post}, {data: curso} ] = await Promise.all([
    resGuitarras.json(),
    resPost.json(),
    resCurso.json(),
  ])

  return {
    props: {
      guitarras,
      post,
      curso,
    }
  }
}
