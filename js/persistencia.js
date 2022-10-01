const localStorage = window.localStorage;

export function guardar(clave,valor){
    localStorage.setItem(clave,valor)
}
export function obtener(clave){
    return localStorage.getItem(clave)
}

/* 
export default function obtener(clave){
    return localStorage.getItem(clave)
}

export default function limpiar(){
    localStorage.clear()
}

export default function eliminarElemento(clave){
    localStorage.removeItem(clave)
} */