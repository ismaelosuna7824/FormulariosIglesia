let app = new Vue({
    el: "#app",
    data: {
        lista:[],
        alumnos: [],
        nombreninos: '',
        mombre: 'Hola Mundo',
        iglesia: '',
        familia: '',
        ano: '',
        censo: '',
        entrevistado: '',
        apellidoF: '',
        fechaRegistro: '',
        telefono: '',
        celular: '',
        direccion: '',
        ciudad: '',
        estado: '',
        cp: '',
        email: '',
        nombreP: '',
        fechaP: '',
        nombreM: '',
        fechaM: '',
        casados: '',
        fechaMatri: '',
        lugarM: '',
        alergias: '',
        nota: '',
        casoM: '',
        telM: '',
        parrafo: '',
        t1c1: '',
        t1c2: '',
        t1c3: '',
        t1c4: '',
        t1c5: '',
        t1c6: '',
        t1c7: '',
        t1c8: '',
        t1c9: '',

        fid: '',
        fano: '',
        fentrevistado: '',
        ffamilia: '',
        ffechaR: '',
        fnumTel: '',
        fnumCel: '',
        fdireccion: '',
        fciudad: '',
        festado: '',
        fcp: '',
        femail: '',
        fnombreP: '',
        ffechaP: '',
        fnombreM: '',
        ffechaM: '',
        fcasado: '',
        ffechaMa: '',
        fLugarMa: '',
        falergia: '',
        fnota: '',
        femergencia: '',
        fnumemergencia: '',

        festudiante: '',
        fasistencia: '',
        ffechaNaci: '',
        fciudadNaci: '',
        ffechaBauti: '',
        flugarBaouti: '',
        ffechacom: '',
        flugarcom: '',
        fgrado: '',


        
    },
    mounted: function(){
        this.parameters()
    },
    methods: {
        parameters: function(){
            var guardado = localStorage.getItem('idioma');
            if(guardado == "en"){
                this.iglesia =  "St. John the Evangelist Parish"         
                this.familia = "Family ID # "           
                this.ano  ="Year"          
                this.censo  = "Family Catechesis Census"        
                this.entrevistado = "Interviewed By "       
                this.apellidoF     ="Last Name for File"       
                this.fechaRegistro  ="Date of Registration"       
                this.telefono   ="Home Telephone Number"       
                this.celular     ="Cellular Number"      
                this.direccion  = "Address"        
                this.ciudad     = "City"    
                this.estado     = "State"    
                this.cp         = "Zip Code"
                this.email      = "E-mail"    
                this.nombreP    = "Father's Name"        
                this.fechaP     = "Date of Birth"    
                this.nombreM    = "Mother's Name"        
                this.fechaM     = "Date of Birth"    
                this.casados    = "Married by Church?"        
                this.fechaMatri = "Place Of Marriage"
                this.parrafo = "Please provide the following information for all children attending Catechism Class"
                this.alergias   = "Allergies"        
                this.nota       = "Note"    
                this.casoM      = "EMERGENCY CONTACT"     
                this.telM       = "PHONE #"
                this.t1c1 = 'Name of Student'
                this.t1c2 = 'Yr. Attending'
                this.t1c3 = 'Date of Birth'
                this.t1c4 = 'Place ofBirth'
                this.t1c5 = 'Date of Baptism'
                this.t1c6 = 'Place of Baptism'
                this.t1c7 = 'Date of 1st  Comm'
                this.t1c8 = 'Place of 1st Comm'
                this.t1c9 = 'School Grade '

            }else{
                this.iglesia =  "Iglesia de San Juan el Evangelista"         
                this.familia = "ID # de la Familia"           
                this.ano  ="Año"          
                this.censo  = "Censo de Catequesis Familiar"        
                this.entrevistado = "Entrvistado por"       
                this.apellidoF     ="Apellido de la Familia"       
                this.fechaRegistro  ="Fecha de Registro"       
                this.telefono   ="Numero de Teléfono"       
                this.celular     ="Teléfono Celular"      
                this.direccion  = "Dirección"        
                this.ciudad     = "Ciudad"    
                this.estado     = "Estado"    
                this.cp         = "Código Postal"
                this.email      = "E-mail"    
                this.nombreP    = "Nombre del Padre"        
                this.fechaP     = "Fecha de Nacimiento"    
                this.nombreM    = "Nombre de la Madre"        
                this.fechaM     = "Fecha de Nacimiento"    
                this.casados    = "Casados por la Iglesia?"        
                this.fechaMatri = "Fecha y Lugar de Matrimonio"
                this.parrafo = "Por favor de proveer la siguiente información de cada niño que asistirá a clase de Catecismo"
                this.alergias   = "Alergias?"        
                this.nota       = "Nota?"    
                this.casoM      = "En caso de Emergencia"     
                this.telM       = "Teléfono #"
                this.t1c1 = 'Nombre del Estudiante'
                this.t1c2 = 'Año de asistencia'
                this.t1c3 = 'Fecha de Nacimiento'
                this.t1c4 = 'Ciudad de Nacimiento'
                this.t1c5 = 'Fecha de Bautismo'
                this.t1c6 = 'Lugar de Bautismo'
                this.t1c7 = 'Fecha 1ra Com'
                this.t1c8 = 'Lugar  1ra Com'
                this.t1c9 = 'Grado Escolar'
            }   
            var guardado = localStorage.getItem('registation');
            this.lista.push(JSON.parse(guardado))
            //console.log(guardado)
           
            
        },
        datos: function(idioma){
            let obj = [
                {
                id              : this.fid,
                ano             : this.fano,
                entrvistado     : this.fentrevistado,
                familia         : this.ffamilia,
                registro        : this.ffechaR,
                numeroTel       : this.fnumTel,
                numeroCel       : this.fnumCel,
                direccion       : this.fdireccion,
                ciudad          : this.fciudad,
                estado          : this.festado,
                cp              : this.fcp,
                email           : this.femail,
                nombrePadre     : this.fnombreP,
                fechaPadre      : this.ffechaP,
                nombreMadre     : this.fnombreM,
                fechaMadre      : this.ffechaM,
                casado          : this.fcasado,
                fechaMa         : this.ffechaMa,
                lugarMa         : this.fLugarMa,
                alergia         : this.falergia,
                nota            : this.fnota,
                emergencia      : this.femergencia,
                numeroEme       : this.fnumemergencia,  
                alumnos         : this.alumnos      
                }
            ];
            localStorage.setItem('registation', JSON.stringify(obj[0]));
            localStorage.setItem('idioma', idioma);
            window.open(`QuintoFormulario.html`, '_blank');
            console.log(obj[0])
        },
        add: function(){
            this.alumnos.push({
            estudiante:     this.festudiante,
            asistencia:     this.fasistencia,
            nacimiento:     this.ffechaNaci,
            cidadNa:        this.fciudadNaci,
            fechaBut:       this.ffechaBauti,
            lugarBut:       this.flugarBaouti,
            fechacom:       this.ffechacom,
            lugarcom:       this.flugarcom,
            grado:          this.fgrado,
            })
            console.log(this.alumnos);
            this.festudiante = ""
            this.fasistencia = ""
            this.ffechaNaci = ""

            this.fciudadNaci =""
            this.ffechaBauti = ""
            this.flugarBaouti = ""
            this.ffechacom =""
            
            this.flugarcom =""
            
            this.fgrado =""
    
        }
        
    }

});