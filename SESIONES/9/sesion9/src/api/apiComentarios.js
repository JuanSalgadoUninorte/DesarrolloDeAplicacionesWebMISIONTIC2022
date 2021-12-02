import CONFIG from '../configuration/config.json';
//petición asíncrona que no bloquea la pagina
//consumir es asíncrono
export const consumir = async () =>{
    const path = new URL(CONFIG.COMENTARIOAPI.URL);
    //se necesita esperar para obtener datos antes de irse al return
    //espera que los datos lleguen del path de la línea 4
    const result = await fetch(path);
    //fetch pide y procesa datos
    console.log(result);
    return await result.json();
    //me preparo para consumir la api
};