
export async function getStaticProps() { //Este no se actualiza nunca, tienes que generar otro build
    const respuesta = await fetch(`${process.env.API_URL}/audios`)
    const { data: audio } = await respuesta.json()
  
    return {
      props: {
        audio
      }
    }
  }

export default function Audios({audio}) {

  return (
    <div>
        <h2>Hola</h2>
        <audio controls>
            <source src={audio[0].attributes.url} type='audio/mp3'/>
        </audio>
    </div>
  )
}
