//En este caso tendremos que definir el modelo Post que cuenta con las siguientes propiedades: titulo, texto, autor, imagen (puede ser una url), fecha, categoria




export class Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: string;

    constructor(pTitulo = '', pTexto = '', pAutor = '', pImagen = '', pFecha = '', pCategoria = '') {
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }

}

