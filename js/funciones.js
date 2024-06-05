lisest = []

lisest.push(new Estudiante("21.381.749-3","Benjamin","Caceres",964834836,"bcaceres@gmail.com", "SAN FERNANDO", "MASCULINO", "Rancagua","Ingenieria Informatica","8","CREDITO","VESPERTINA"));
lisest.push(new Estudiante("11.111.111-1","Antonela","Gomez", 879895746,"Agomez@gmail.com","RANCAGUA","FEMENINO","Santiago","Gastronomia","4","DEBITO","DIURNA"));


const listarEstudiantes = () => {
    let filas = "";
    for(let i=0; i<lisest.length; i++){
        let est = lisest[i];
        filas += "<tr>";
        filas += "<td>"+est.rut+"</td>";
        filas += "<td>"+est.nombre+"</td>";
        filas += "<td>"+est.apellido+"</td>";
        filas += "<td>"+est.telefono+"</td>";
        filas += "<td>"+est.email+"</td>";
        filas += "<td>"+est.comuna+"</td>";
        filas += "<td>"+est.sexo+"</td>";
        filas += "<td>"+est.sede+"</td>";
        filas += "<td>"+est.carrera+"</td>";
        filas += "<td>"+est.semestre+"</td>";
        filas += "<td>"+est.pago+"</td>";
        filas += "<td>"+est.jornada+"</td>";
        filas += "</tr>";
    }
    document.getElementById("tablaDeDatos").innerHTML = filas;
}

const registrarEstudiante = () =>{

    let r = document.getElementById("txtrut").value;
    let n = document.getElementById("txtnom").value;
    let a = document.getElementById("txtape").value;
    let t = document.getElementById("txttel").value;
    let e = document.getElementById("txtema").value;
    let c = document.getElementById("cbocom").value;

    let s = "";
    if(document.getElementById("opsexm").checked === true){
        s = "MASCULINO";
    }if(document.getElementById("opsexf").checked === true){
        s = "FEMENINO";
    }if(document.getElementById("opsexx").checked === true){
        s = "X";
    }
    
    let su = document.getElementById("txtsede").value;
    let cr = document.getElementById("txtcar").value;
    let sms = document.getElementById("smes").value;

    let p = "";
    if(document.getElementById("opcre").checked === true){
        p = "CREDITO";
    }if(document.getElementById("opdeb").checked === true){
        p = "DEBITO";
    }

    let j = document.getElementById("jorn").value;

    let errores = "";
    if(r.trim().length === 0){
        errores += "El Campo No Debe Quedar En Blanco.\n";
    }else{
        for(let i=0; i<lisest.length; i++){
            let est = lisest[i];
            if(Number(r) === est.rut){
                errores += "El Rut ("+r+") Ya Existe.\n";
            }
        }
    }

    if (n.trim().length === 0){
        errores += "El Nombre No Debe Quedar En Blanco.\n";
    }

    if (a.trim().length === 0){
        errores += "El Apellido No Debe Quedar En Blanco.\n";
    }

    if (t.trim().length === 0){
        errores += "El Telefono No Debe Quedar En Blanco.\n";
    }

    if (e.trim().length === 0){
        errores += "El Email No Debe Quedar En Blanco.\n";
    }

    if (c.trim().length === 0){
        errores += "La Comuna No Debe Quedar En Blanco.\n";
    }

    if (s.trim().length === 0){
        errores += "El Sexo No Debe Quedar En Blanco.\n";
    }

    if (su.trim().length === 0){
        errores += "La Sede Universitaria No Debe Quedar En Blanco.\n";
    }

    if (cr.trim().length === 0){
        errores += "La Carrera No Debe Quedar En Blanco.\n";
    }

    if (sms.trim().length === 0){
        errores += "El Semestre No Debe Quedar En Blanco.\n";
    }

    if (p.trim().length === 0){
        errores += "El Pago No Debe Quedar En Blanco.\n";
    }

    if (j.trim().length === 0){
        errores += "La Jornada No Debe Quedar En Blanco.\n";
    }
    
    
    if (errores === ""){
        let est = new Estudiante(r,n,a,Number(t),e,c,s,su,cr,sms,p,j);
        lisest.push(est); 
        listarEstudiantes();

        let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
        msg += '<strong>Felicitaciones!</strong> Estudiante ('+r+') Registrado Correctamente!';
        msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        msg += '</div>';
        document.getElementById("mensajes").innerHTML = msg;

        document.getElementById("txtrut").value="";
        document.getElementById("txtnom").value="";
        document.getElementById("txtape").value="";
        document.getElementById("txttel").value="";
        document.getElementById("txtema").value="";
        document.getElementById("cbocom").value="";
        document.getElementById("opsexm").checked = true;
        document.getElementById("txtsede").value = "";
        document.getElementById("txtcar").value = "";
        document.getElementById("smes").value = "";
        document.getElementById("opcre").checked = true;
        document.getElementById("jorn").value = "";

    }else{
        alert(errores);
    }
}

const consultarEstudiante =() =>{
    let r = document.getElementById("txtrut").value;

    if(r.trim().length === 0){
        alert("Debe Ingresar El Rut Del Estudiante A Buscar!!");
    }else{
        let sw = 0;
        for(let i=0; i<lisest.length; i++){
            let est = lisest[i];
            if(r === est.rut){
                sw = 1;
                document.getElementById("txtnom").value = est.nombre;
                document.getElementById("txtape").value = est.apellido;
                document.getElementById("txttel").value = est.telefono;
                document.getElementById("txtema").value = est.email;
                document.getElementById("cbocom").value = est.comuna;
                
                if(est.sexo === "M"){
                    document.getElementById("opsexm").checked = true;
                }if(est.sexo === "F"){
                    document.getElementById("opsexf").checked = true;
                }else if(est.sexo === "X"){
                    document.getElementById("opsexx").checked = true;
                }

                document.getElementById("txtsede").value = est.sede;
                document.getElementById("txtcar").value = est.carrera;
                document.getElementById("smes").value = est.semestre;

                if(est.pago === "CREDITO"){
                    document.getElementById("opcre").checked === true;
                }else if(est.pago === "DEBITO"){
                    document.getElementById("opdeb").checked === true;
                }

                document.getElementById("jorn").value = est.jornada;

            }
        }

        if(sw === 0){
            let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') No Encontrado!</strong> Puede Registrar!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }else if(sw === 1){
            let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') Encontrado!</strong> Puede Modificar o Eliminar!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }
    }
}

const eliminarEstudiante = () =>{
    let r = document.getElementById("txtrut").value;

    if(r.trim().length === 0){
        alert("Debe Ingresar El Rut Del Estudiante Que Desea Eliminar!!");
    }else{
        let sw = 0;
        for(let i=0; i<lisest.length; i++){
            let est = lisest[i];
            if(r === est.rut){
                let x = confirm("¿Confirma La Eliminacion Del Registro?");
                if (x = true){
                    sw = 1;
                    lisest.splice(i,1);
                    listarEstudiantes();
                    break;
                }else{
                    sw = 2;
                    break;
                }
            }
        }

        if (sw = 0){
            if(sw === 0){
                let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
                msg += '<strong>Rut ('+r+') No Encontrado!</strong> Imposible Eliminar!';
                msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                msg += '</div>';
                document.getElementById("mensajes").innerHTML = msg;
            }else if(sw === 1){
                let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
                msg += '<strong>Rut ('+r+') Eliminado Correctamente!</strong>!';
                msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                msg += '</div>';
                document.getElementById("mensajes").innerHTML = msg;
    
                document.getElementById("txtrut").value="";
                document.getElementById("txtnom").value="";
                document.getElementById("txtape").value="";
                document.getElementById("txttel").value="";
                document.getElementById("txtema").value="";
                document.getElementById("cbocom").value="";
                document.getElementById("opsexm").checked = true;
                document.getElementById("txtsede").value = "";
                document.getElementById("txtcar").value = "";
                document.getElementById("smes").value = "";
                document.getElementById("opcre").checked = true;
                document.getElementById("jorn").value = "";
                
            }
        }
    }
}


const modificarEstudiante = () =>{

    let r = document.getElementById("txtrut").value;
    let n = document.getElementById("txtnom").value;
    let a = document.getElementById("txtape").value;
    let t = document.getElementById("txttel").value;
    let e = document.getElementById("txtema").value;
    let c = document.getElementById("cbocom").value;

    let s = "";
    if(document.getElementById("opsexm").checked === true){
        s = "MASCULINO";
    }if(document.getElementById("opsexf").checked === true){
        s = "FEMENINO";
    }if(document.getElementById("opsexx").checked === true){
        s = "X";
    }
    
    let su = document.getElementById("txtsede").value;
    let cr = document.getElementById("txtcar").value;
    let sms = document.getElementById("smes").value;

    let p = "";
    if(document.getElementById("opcre").checked === true){
        p = "CREDITO";
    }if(document.getElementById("opdeb").checked === true){
        p = "DEBITO";
    }

    let j = document.getElementById("jorn").value;

    let errores = "";

    if(r.trim().length === 0){
        errores += "El Campo No Debe Quedar En Blanco.\n";
    }

    if (n.trim().length === 0){
        errores += "El Nombre No Debe Quedar En Blanco.\n";
    }

    if (a.trim().length === 0){
        errores += "El Apellido No Debe Quedar En Blanco.\n";
    }

    if (t.trim().length === 0){
        errores += "El Telefono No Debe Quedar En Blanco.\n";
    }

    if (e.trim().length === 0){
        errores += "El Email No Debe Quedar En Blanco.\n";
    }

    if (c.trim().length === 0){
        errores += "La Comuna No Debe Quedar En Blanco.\n";
    }

    if (s.trim().length === 0){
        errores += "El Sexo No Debe Quedar En Blanco.\n";
    }

    if (su.trim().length === 0){
        errores += "La Sede No Debe Quedar En Blanco.\n";
    }

    if (sms.trim().length === 0){
        errores += "El Semestre No Debe Quedar En Blanco.\n";
    }

    if (p.trim().length === 0){
        errores += "El Pago No Debe Quedar En Blanco.\n";
    }

    if (j.trim().length === 0){
        errores += "La Jornada No Debe Quedar En Blanco.\n";
    }

    
    
    if (errores === ""){

        sw = 0;
        
        for(let i = 0; i<lisest.length; i++){
            let est = lisest [i];
            if(r === est.rut){
                let x = confirm("¿Confirma La Modificacion De Datos?");
                if (x === true){
                    sw = 1;
                    lisest[i].nombre = n;
                    lisest[i].apellido = a;
                    lisest[i].telefono = Number(t);
                    lisest[i].email = e;
                    lisest[i].comuna = c;
                    lisest[i].sexo = s;
                    lisest[i].sede = su;
                    lisest[i].carrera = cr;
                    lisest[i].semestre = sms;
                    lisest[i].pago = p;
                    lisest[i].jornada = j;
                    listarEstudiantes();
                    break;
                }else{
                    sw=2;
                    break;
                }
            }
        }
        if(sw === 0){
            let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') No Encontrado!</strong> Imposible Modificar Datos!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }else if(sw === 1){
            let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg += '<strong>Datos De Estudiante ('+r+') Modificados Correctamente!</strong>!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;

            document.getElementById("txtrut").value="";
            document.getElementById("txtnom").value="";
            document.getElementById("txtape").value="";
            document.getElementById("txttel").value="";
            document.getElementById("txtema").value="";
            document.getElementById("cbocom").value="";
            document.getElementById("opsexm").checked = true;
            document.getElementById("txtsede").value = "";
            document.getElementById("txtcar").value = "";
            document.getElementById("smes").value = "";
            document.getElementById("opcre").checked = true;
            document.getElementById("jorn").value = "";
        }



    }else{
        alert(errores);
    }
}