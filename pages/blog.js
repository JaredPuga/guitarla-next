import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from '../styles/grid.module.css'

export async function getStaticProps() { //Este no se actualiza nunca, tienes que generar otro build
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const { data: post } = await respuesta.json()

  return {
    props: {
      post
    }
  }
}

export default function Blog({post}) {

  return (
    <>
        <Layout
            title="Blog"
            description="Blog de música, venta de guitarras, consejos, GuitarLA"
        >
        
          <main className="contenedor">
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
          </main>
        </Layout>
    </>
  )
}