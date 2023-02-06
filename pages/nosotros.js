import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <>
        <Layout
            title="Nosotros"
            description="Sobre nosotros, guitarLA, tienda de música"
        >
            <main className="contenedor">
              <h2 className="heading">Nosotros</h2>   
              
              <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros"/>

                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam veritatis tempora, 
                    dolor quia eum cupiditate quod facilis porro autem tempore, consequuntur mollitia velit 
                    nostrum voluptas rem, repudiandae soluta! Maiores, facilis.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam veritatis tempora, 
                    dolor quia eum cupiditate quod facilis porro autem tempore, consequuntur mollitia velit 
                    nostrum voluptas rem, repudiandae soluta! Maiores, facilis.
                  </p>
                </div>
              </div>
            </main>
        </Layout>
    </>
  )
}
