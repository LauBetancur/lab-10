export const cargarInformacion = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  };

  /* PASO 2 : Este código en el archivo utils.js define una función llamada cargarInformacion, que utiliza la sintaxis
 de funciones asíncronas (async/await) 
para cargar información desde un archivo JSON 
llamado data.json. Aquí está lo que hace el código paso a paso:*/

/*1)Export const cargarInformacion = async () => 
 : Esta línea exporta la función cargarInformacion para que pueda ser utilizada 
    fuera de este módulo. La declaración async indica que esta función será asíncrona, 
    lo que significa que puede esperar a que otras operaciones asíncronas (como una solicitud HTTP) 
    se completen sin bloquear el hilo principal de ejecución.
2)const response = await fetch("data.json");: Aquí 
    se utiliza fetch para hacer una solicitud HTTP para obtener 
    el contenido del archivo data.json. La palabra clave await indica que la ejecución de la 
    función se pausará hasta que la solicitud se complete y se obtenga una respuesta del servidor.*/