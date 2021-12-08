const usuarios = [
    {"Id": 1001, "Nombre": "Laura", "Apellido": "Perez", "Correo": "Laupereza@gmail.com","Contrasena": "02LauraP","Rol": "Usuario configuracion"},
    {"Id": 1002, "Nombre": "Manuel", "Apellido": "Triana", "Correo": "MTriana12@gmail.com","Contrasena": "1210MT","Rol": "Administrador"},
    {"Id": 1003, "Nombre": "Daniel", "Apellido": "Fonseca", "Correo": "DanFon098@gmail.com","Contrasena": "0124*","Rol": "Usuario configuracion"},
    {"Id": 1004, "Nombre": "Leidy", "Apellido": "Talero", "Correo": "LTalero@gmail.com","Contrasena": "pL652","Rol": "Usuario gestion"},
    {"Id": 1005, "Nombre": "Nicolas", "Apellido": "Gomez", "Correo": "Nicola987@gmail.com","Contrasena": "981326","Rol": "Administrador"}
];

const gestionCultivos =[
    {"IdCultivo": 301, "Nombre": "Clavel estandar", "Descripcion": "Es una planta perenne de día largo, con base leñosa y tallos de hasta 80cm de longitud."},
    {"IdCultivo": 302, "Nombre": "Clavel estandar", "Descripcion": "Es una planta perenne de día largo, con base leñosa y tallos de hasta 80cm de longitud."},
    {"IdCultivo": 303, "Nombre": "Clavel estandar", "Descripcion": "Es una planta perenne de día largo, con base leñosa y tallos de hasta 80cm de longitud."},
    {"IdCultivo": 304, "Nombre": "Mini clavel", "Descripcion": "Es una planta en las que sus raíces son de gran longitud, pudiendo alcanzar los 30cm de profundidad."},
    {"IdCultivo": 305, "Nombre": "Mini clavel", "Descripcion": "Es una planta en las que sus raíces son de gran longitud, pudiendo alcanzar los 30cm de profundidad."}
];

const parametros = [
    {"IdParametro": 401, "IdCultivo": 301, "ValSemilla": 20000, "ValMtCuAgua": 30000, "ValFertilizante": 40000},
    {"IdParametro": 402, "IdCultivo": 302, "ValSemilla": 30000, "ValMtCuAgua": 40000, "ValFertilizante": 50000},
    {"IdParametro": 403, "IdCultivo": 303, "ValSemilla": 20000, "ValMtCuAgua": 30000, "ValFertilizante": 40000},
    {"IdParametro": 404, "IdCultivo": 304, "ValSemilla": 30000, "ValMtCuAgua": 40000, "ValFertilizante": 50000},
    {"IdParametro": 405, "IdCultivo": 305, "ValSemilla": 20000, "ValMtCuAgua": 30000, "ValFertilizante": 40000},
];

const gestionPredios = [
    {"IdPredio": 2001, "IdPropietario": 1001 , "CantHectareas": 2 , "Ubicacion": "Bogota" , "Latitud": "Norte 4° 35 56", "Longitud": "Oeste 74° 04 51"},
    {"IdPredio": 2002, "IdPropietario": 1002 , "CantHectareas": 3 , "Ubicacion": "Bogota" , "Latitud": "Norte 4° 35 56", "Longitud": "Oeste 74° 04 51"},
    {"IdPredio": 2003, "IdPropietario": 1003 , "CantHectareas": 4 , "Ubicacion": "Bogota" , "Latitud": "Norte 4° 35 56", "Longitud": "Oeste 74° 04 51"},
    {"IdPredio": 2004, "IdPropietario": 1004 , "CantHectareas": 5 , "Ubicacion": "Bogota" , "Latitud": "Norte 4° 35 56", "Longitud": "Oeste 74° 04 51"},
    {"IdPredio": 2005, "IdPropietario": 1005 , "CantHectareas": 6 , "Ubicacion": "Bogota" , "Latitud": "Norte 4° 35 56", "Longitud": "Oeste 74° 04 51"}
];

const configurarCultivo = [
    {"IdConfig": 505, "IdPredio": 2001, "IdCultivo": 301, "AreaDestinada": 2, "CantSemillas": 40, "TiempCultivo": "2 meses", "MetCubAgua": 3, "CatFertilizantes": "Dos puñados por planta", "TiempRecoleccion": "1 semana","KgProducto": 20, "TiemMinEspera": "3 meses" },
    {"IdConfig": 504, "IdPredio": 2002, "IdCultivo": 302, "AreaDestinada": 2, "CantSemillas": 40, "TiempCultivo": "2 meses", "MetCubAgua": 3, "CatFertilizantes": "Dos puñados por planta", "TiempRecoleccion": "1 semana","KgProducto": 20, "TiemMinEspera": "3 meses" },
    {"IdConfig": 503, "IdPredio": 2003, "IdCultivo": 303, "AreaDestinada": 2, "CantSemillas": 40, "TiempCultivo": "2 meses", "MetCubAgua": 3, "CatFertilizantes": "Dos puñados por planta", "TiempRecoleccion": "1 semana","KgProducto": 20, "TiemMinEspera": "3 meses" },
    {"IdConfig": 502, "IdPredio": 2004, "IdCultivo": 304, "AreaDestinada": 1/2, "CantSemillas": 35, "TiempCultivo": "1/2 meses", "MetCubAgua": 2, "CatFertilizantes": "Un puñado por planta", "TiempRecoleccion": "1 semana","KgProducto": 20, "TiemMinEspera": "2 meses" },
    {"IdConfig": 501, "IdPredio": 2005, "IdCultivo": 305, "AreaDestinada": 1/2, "CantSemillas": 35, "TiempCultivo": "1/2 meses", "MetCubAgua": 2, "CatFertilizantes": "Un puñado por planta", "TiempRecoleccion": "1 semana","KgProducto": 20, "TiemMinEspera": "2 meses" }
];
exports.usuarios=usuarios;
exports.configurarCultivo=configurarCultivo;
exports.parametros=parametros;
exports.gestionCultivos=gestionCultivos;
exports.gestionPredios=gestionPredios;