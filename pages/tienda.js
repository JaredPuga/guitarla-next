import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from '../styles/grid.module.css'

/*export async function getStaticProps() { //Este no se actualiza nunca, tienes que generar otro build
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data } = await respuesta.json()

  return {
    props: {
      data
    }
  }
}*/

export async function getServerSideProps() { //Este si se actualiza
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

export default function Tienda({guitarras}) {

  return (
    <>
        <Layout
            title="Tienda"
            description="Tienda virtual, venda de guitarras, instrumentos, GuitarLA"
        >
            <main className="contenedor">
              <h2 className="heading">Nuestra Colección</h2>

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
        </Layout>
    </>
  )
}