const express = require("express");
const app = express();
const { usuarios } = require("./DatosInfo");
const { gestionCultivos } = require("./DatosInfo");
const { configurarCultivo } = require("./DatosInfo");
const { parametros } = require("./DatosInfo");
const { gestionPredios } = require("./DatosInfo");


const cors = require("cors");
app.use(express.json());

app.use(cors());

app.get("/", function(req, res) {
    res.send("hoy es viernes");
});

//BREAD Usuario
    //Guardar
        app.post("/guardar/usuario", function (req, res) {
            const IDG = req.body.ID;
            const NOMBREG = req.body.Nombre;
            const APELLIDOG = req.body.Apellido;
            const CORREOG = req.body.Correo;
            const ROLG = req.body.Rol;
            const CONTRASENAG = req.body.Contrasena;
            var diccionario = {Id: IDG, Nombre: NOMBREG, Apellido: APELLIDOG, Correo: CORREOG, Contrasena: CONTRASENAG, Rol: ROLG};
            usuarios.push(diccionario);
            res.send({status: "OK", msg: "¡Usuario Guardado!", usuarios:usuarios});
        });
    //Guardar
    //Eliminar
    app.post("/eliminar/usuario", function (req, res){
        const ID = req.body.ID;//^RECUPERO DATOS DEL CLIENTE
        //var diccionario = {Nombre: datoNom};CON el DATO CREO UN JSON
        let i = 0;
        for (const k of usuarios) {
            if(k.Id === ID){
                usuarios.splice(i, 1);
                break;
            }
            i++;
        }
        res.send({status: "OK", msg: "¡Usuario eliminado!", usuarios:usuarios});//LE RESPONDO AL CLIENTE
    });
    //Eliminar
    //Actializar
    app.post("/actualizar/usuario", function (req, res){
        const IDa = req.body.ID;
        const NOMBREa = req.body.Nombre;
        const APELLIDOa = req.body.Apellido;
        const CORREOa = req.body.Correo;
        const ROLa = req.body.Rol;
        const CONTRASENAa = req.body.Contrasena;
        var diccionario = {id: IDa, Nombre: NOMBREa, Apellido: APELLIDOa, Correo: CORREOa, Contrasena: CONTRASENAa, Rol: ROLa};
        let i = 0;
        for (const k of usuarios) {
            if(k.Id === ID){
                usuarios[i]=diccionario;
                break;
            }
            i++;
        }
        res.send({status: "OK", msg: "¡Usuario actualizado!", usuarios:usuarios});//LE RESPONDO AL CLIENTE
    });
    //Actializar
    //Consultar
    app.get("/usuarios/:Id", function (req, res) {
        //se necesita un iterable para "mapear" un objeto de un JSON
        const variable = usuarios.find(j=>j.Id === req.params.ID);
        res.send(variable);
    } );

//BREAD Usuario

//BREAD Cultivos
    //Guardar
    app.post("/guardar/cultivo", function (req, res) {
        const IDCULTIVOgC = req.body.IdCultivo;
        const NOMBREgC = req.body.Nombre;
        const DESCRIPCIONgC = req.body.Descripcion;
        var diccionario = {IdCultivo: IDCULTIVOgC, Nombre: NOMBREgC, Descripcion: DESCRIPCIONgC};
        gestionCultivos.push(diccionario);
        res.send({status: "OK", msg: "Cultivo Guardado!", gestionCultivos:gestionCultivos});
    });
    //Guardar
    //Eliminar
    app.post("/eliminar/cultivo", function (req, res){
        const ID = req.body.ID;//^RECUPERO DATOS DEL CLIENTE
        //var diccionario = {Nombre: datoNom};CON el DATO CREO UN JSON
        let i = 0;
        for (const k of gestionCultivos) {
            if(k.IdCultivo === ID){
                gestionCultivos.splice(i, 1);
                break;
            }
            i++;
        }
        res.send({status: "OK", msg: "¡Usuario eliminado!", gestionCultivos:gestionCultivos});//LE RESPONDO AL CLIENTE
    });
    //Eliminar
    //Actializar
    app.post("/actualizar/cultivo", function (req, res){
        const IDCULTIVOaC = req.body.IdCultivo;
        const NOMBREaC = req.body.Nombre;
        const DESCRIPCIONaC = req.body.Descripcion;
        var diccionario = {IdCultivo: IDCULTIVOaC, Nombre: NOMBREaC, Descripcion: DESCRIPCIONaC};
        let i = 0;
        for (const k of gestionCultivos) {
            if(k.Id === IDCULTIVOaC){
                gestionCultivos[i]=diccionario;
                break;
            }
            i++;
        }
        res.send({status: "OK", msg: "¡Jugador actualizado!", gestionCultivos:gestionCultivos});//LE RESPONDO AL CLIENTE
    });
    //Actializar
    //Consultar
    app.get("/cultivo/:Id", function (req, res) {
        //se necesita un iterable para "mapear" un objeto de un JSON
        const variable = gestionCultivos.find(j=>j.Id === req.params.IdCultivo);
        res.send(variable);
    } );
//BREAD Cultivos

//BREAD Parámetros
    //Guardar
    app.post("/guardar/parametros", function (req, res) {
            const IdParametroG = req.body.IdParametro;
            const IdCultivoG = req.body.IdCultivo;
            const ValSemillaG = req.body.ValSemilla;
            const ValMtCuAguaG = req.body.ValMtCuAgua;
            const ValFertilizanteG = req.body.ValFertilizante;
        var diccionario = {IdParametro: IdParametroG,
            IdCultivo: IdCultivoG,
            ValSemilla: ValSemillaG,
            ValMtCuAgua: ValMtCuAguaG,
            ValFertilizante: ValFertilizanteG};
        parametros.push(diccionario);
        res.send({status: "OK", msg: "¡Parámetro Guardado!", parametros:parametros});
    });
    //Guardar
    //Eliminar
    app.post("/eliminar/parametros", function (req, res){
        const ID = req.body.IdParametro;//^RECUPERO DATOS DEL CLIENTE
        //var diccionario = {Nombre: datoNom};CON el DATO CREO UN JSON
        let i = 0;
        for (const k of parametros) {
            if(k.IdParametro === ID){
                parametros.splice(i, 1);
                break;
            }
            i++;
        }
        res.send({status: "OK", msg: "¡Parámetros eliminado!", parametros:parametros});//LE RESPONDO AL CLIENTE
    });
    //Eliminar
    //Actializar
    app.post("/actualizar/parametros", function (req, res){
        const IdParametroA = req.body.IdParametro;
            const IdCultivoA = req.body.IdCultivo;
            const ValSemillaA = req.body.ValSemilla;
            const ValMtCuAguaA = req.body.ValMtCuAgua;
            const ValFertilizanteA = req.body.ValFertilizante;
        var diccionario = {IdParametro: IdParametroA,
            IdCultivo: IdCultivoA,
            ValSemilla: ValSemillaA,
            ValMtCuAgua: ValMtCuAguaA,
            ValFertilizante: ValFertilizanteA};
        let i = 0;
        for (const k of parametros) {
            if(k.id === ID){
                parametros[i]=diccionario;
                break;
            }
            i++;
        }
        res.send({status: "OK", msg: "¡Parámetros actualizado!", parametros:parametros});//LE RESPONDO AL CLIENTE
    });
    //Actializar
    //consultar
    app.get("/parametros/:IdParametro", function (req, res) {
        //se necesita un iterable para "mapear" un objeto de un JSON
        const variable = parametros.find(j=>j.Id === req.params.IdParametro);
        res.send(variable);
    } );
//BREAD Parámetros

//BREAD GestionPredios
    //Guardar
    app.post("/guardar/gestionPredios", function (req, res) {
        const IdPrediog = req.body.IdPredio;
        const IdPropietariog = req.body.IdPropietario;
        const CantHectareasg = req.body.Cantidadhect;
        const Ubicaciong = req.body.Ubicacion;
        const Latitudg = req.body.Latitud;
        const Longitudg = req.body.Longitud;

    var diccionario = {IdPredio: IdPrediog,
        IdPropietario: IdPropietariog,
        CantHectareas: CantHectareasg,
        Ubicacion: Ubicaciong,
        Latitud: Latitudg,
        Longitud: Longitudg
    };
    gestionPredios.push(diccionario);
    res.send({status: "OK", msg: "¡Predio Guardado!", gestionPredios:gestionPredios});
});
//Guardar
//Eliminar
app.post("/eliminar/gestionPredios", function (req, res){
    const ID = req.body.idPredio;//^RECUPERO DATOS DEL CLIENTE
    //var diccionario = {Nombre: datoNom};CON el DATO CREO UN JSON
    let i = 0;
    for (const k of gestionPredios) {
        if(k.IdPredio === ID){
            gestionPredios.splice(i, 1);
            break;
        }
        i++;
    }
    res.send({status: "OK", msg: "¡Parámetros eliminado!", gestionPredios:gestionPredios});//LE RESPONDO AL CLIENTE
});
//Eliminar
//Actializar
app.post("/actualizar/gestionPredios", function (req, res){
    const IdPredioa = req.body.IdPredio;
        const IdPropietarioa = req.body.IdPropietario;
        const CantHectareasa = req.body.Cantidadhect;
        const Ubicaciona = req.body.ubicacion;
        const Latituda = req.body.Latitud;
        const Longituda = req.body.Longitud;

    var diccionario = {IdPredio: IdPredioa,
        IdPropietario: IdPropietarioa,
        CantHectareas: CantHectareasa,
        Ubicacion: Ubicaciona,
        Latitud: Latituda,
        Longitud: Longituda
    };
    let i = 0;
    for (const k of gestionPredios) {
        if(k.IdPredio === IdPredioa){
            gestionPredios[i]=diccionario;
            break;
        }
        i++;
    }
    res.send({status: "OK", msg: "¡Configuración actualizado!", gestionPredios:gestionPredios});//LE RESPONDO AL CLIENTE
});
//Actializar
//CONSULTAR
app.get("/gestionPredios/:IdPredio", function (req, res) {
    //se necesita un iterable para "mapear" un objeto de un JSON
    const variable = gestionPredios.find(j=>j.IdPredio === req.params.IdPredio);
    res.send(variable);
} );
//BREAD GestionPredios

//BREAD Configurar cultivo
//Guardar
app.post("/guardar/configurarPredios", function (req, res) {
const IdConfigg = req.body.IdConfig;
const IdPrediog = req.body.IdPredio;
const IdCultivog = req.body.IdCultivo;
const AreaDestinadag = req.body.AreaDestinada;
const CantSemillasg = req.body.CantSemillas;
const TiempCultivog = req.body.TiempCultivo;
const MetCubAguag = req.body.MetCubAgua;
const CatFertilizantesg = req.body.CatFertilizantes;
const TiempRecolecciog = req.body.TiempRecoleccion;
const KgProductog = req.body.KgProducto;
const TiemMinEsperag = req.body.TiemMinEspera;
    var diccionario = {
        IdConfig: IdConfigg,
        IdPredio: IdPrediog,
        IdCultivo: IdCultivog,
        AreaDestinada: AreaDestinadag,
        CantSemillas: CantSemillasg,
        TiempCultivo: TiempCultivog,
        MetCubAgua: MetCubAguag,
        CatFertilizantes: CatFertilizantesg,
        TiempRecoleccion: TiempRecolecciog,
        KgProducto: KgProductog,
        TiemMinEspera: TiemMinEsperag
        
};
configurarCultivo.push(diccionario);
res.send({status: "OK", msg: "Configuración Guardada!", configurarCultivo:configurarCultivo});
});
//Guardar
//Eliminar
app.post("/eliminar/configurarPredios", function (req, res){
const ID = req.body.idConfig;//^RECUPERO DATOS DEL CLIENTE
//var diccionario = {Nombre: datoNom};CON el DATO CREO UN JSON
let i = 0;
for (const k of configurarCultivo) {
    if(k.IdConfig === ID){
        configurarCultivo.splice(i, 1);
        break;
    }
    i++;
}
res.send({status: "OK", msg: "¡Configuración eliminada!", configurarCultivo:configurarCultivo});//LE RESPONDO AL CLIENTE
});
//Eliminar
//Actializar
app.post("/actualizar/configurarPredios", function (req, res){
    const IdConfigA = req.body.IdConfig;
    const IdPredioA = req.body.IdPredio;
    const IdCultivoA = req.body.IdCultivo;
    const AreaDestinadaA = req.body.AreaDestinada;
    const CantSemillasA = req.body.CantSemillas;
    const TiempCultivoA = req.body.TiempCultivo;
    const MetCubAguaA = req.body.MetCubAgua;
    const CatFertilizantesA = req.body.CatFertilizantes;
    const TiempRecoleccioA = req.body.TiempRecoleccio;
    const KgProductoA = req.body.KgProducto;
    const TiemMinEsperaA = req.body.TiemMinEspera;
        var diccionario = {
            IdConfig: IdConfigA,
            IdPredio: IdPredioA,
            IdCultivo: IdCultivoA,
            AreaDestinada: AreaDestinadaA,
            CantSemillas: CantSemillasA,
            TiempCultivo: TiempCultivoA,
            MetCubAgua: MetCubAguaA,
            CatFertilizantes: CatFertilizantesA,
            TiempRecoleccion: TiempRecoleccioA,
            KgProducto: KgProductoA,
            TiemMinEspera: TiemMinEsperaA
            
    };
let i = 0;
for (const k of configurarCultivo) {
    if(k.IdConfig === ID){
        configurarCultivo[i]=diccionario;
        break;
    }
    i++;
}
res.send({status: "OK", msg: "¡Configuración actualizada!", configurarCultivo:configurarCultivo});//LE RESPONDO AL CLIENTE
});
//consultar
app.get("/configurarCultivo/:IdConfig", function (req, res) {
    //se necesita un iterable para "mapear" un objeto de un JSON
    const variable = configurarCultivo.find(j=>j.IdConfig === req.params.IdConfig);
    res.send(variable);
} );
//BREAD Predios

//especificar el puerto desde donde se trabajará
app.listen(8081, function () {
});
