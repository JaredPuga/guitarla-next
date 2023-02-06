import { marked } from "marked"

export const formateaFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-ES',opciones)
}

export const Texto = txt => {
    const parsedText = marked.parse(txt)
    return parsedText
}