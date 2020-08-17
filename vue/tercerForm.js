let app = new Vue({
    el: "#app",
    data: {
        lista:[],
        nombreninos: '',
        mombre: 'Hola Mundo',
        titulo: '',
        subtitulo: '',
        parrafo:'',
        t1c1: '',
        t1c2: '',
        t1c3: '',
        t1c4: '',
        subtitulo2: '',
        parrafo2: '',
        parrafo3: '',
        parrafo4: '',
        t2c1: '',
        t2c2: '',
        address: '',
        t2c3: '',
        t2c4: '',
        subtitulo3: '',
        parrafo5: '',
        parrafo6: '',
        parrafo7: '',
        tutor: '',
        firmaP: '',
        firmaT: '',
        date: '',
        fescuela: '',
        fgrupo: '',
        fevento:'',
        ffechaevento: '',
        fparticipante: '',
        fdireccion: '',
        ftelefono: '',
        fcorreo: '',
        ftutor: '',
        ffecha: ''

    },
    mounted: function(){
        this.parameters()
    },
    methods: {
        parameters: function(){
            var guardado = localStorage.getItem('idioma');
            if(guardado == "en"){
                this.titulo = "EVENT - PHOTOGRAPHY RELEASE AUTHORIZATION"
                this.subtitulo = "Release for Diocesan Production for the Diocese of Fresno (DOF) and all Entities for the Diocese of Fresno (DOF) "
                this.parrafo = "Parents / Guardians: This form must be completed in order for your child to participate in this event or function. Please respond accordingly to the authorized use of your child’s photograph or video image in a DOF produced public-relations document."
                this.t1c1 = "NAME OF PARISH  OR SCHOOL"
                this.t1c2 = "NAME OF GROUP" 
                this.t1c3 = "NAME OF EVENT"
                this.t1c4 = "DATE OF EVENT"
                this.subtitulo2 = "PARTICIPANT AGREEMENT"
                this.parrafo2 = "I hereby grant the Diocese of Fresno and its entities (hereinafter called Producer), their nominees, designees, and successors full authorization and the absolute right and permission to sell, assign, convey, reproduce, copyright, use or publish photographic reproductions, portraits, or pictures of me, motion picture or video tape pictures of me, or in which I may be included in whole, in part, or in composite, or in which character or form is distorted, in conjunction with my own or any other picture, product, person, name or reproduction, in color or otherwise, made through any media at its studios or elsewhere, for art, advertising, commerce, business or trade, or any other lawful purpose whatsoever."
                this.parrafo3 = "I hereby waive any right I may have to inspect or approve the finished product or the advertising copy that may be used in connection therewith, or the use to which it may be applied."
                this.parrafo4 = "I hereby release, discharge and agree to hold harmless PRODUCER, its nominees, designees, or successors, and assignees or others for whom they are acting from any liability of any nature or description by virtue of any use whatsoever, whether intentional or otherwise, or from any change that may occur or be produced in the taking of said picture or pictures, or any processing tending towards the completion of the finished product, unless it can be shown that said use or change is solely for its purpose of subjecting me to conspicuous ridicule, scandal, reproach, scorn and indignity."
                this.t2c1 = "NAME OF PARTICIPAN"
                this.t2c2 = "SIGNATURE OF PARTICIPANT"
                this.address = "ADDRESS"
                this.t2c3 = "TELEPHONE"
                this.t2c4 = "EMAIL"
                this.subtitulo3 = "PARENT / GUARDIAN AUTHORIZATION FOR A MINOR "
                this.parrafo5 = "If the participant is under 18 years of age, the parent or legal guardian of the above participant must provide the following information and must check one of the following and sign."
                this.parrafo6 = "As the parent and/or legal guardian of the above named participant, I do hereby consent and grant my permission to all of the foregoing." 
                this.parrafo7 = "As the parent and/or legal guardian of the above named participant, I do not give my consent for my child to be photographed, but I understand that it will be the responsibility of the participant to make every effort possible from participating in any posed pictures. If a picture or pictures are inadvertently taken, then I agree to review the photographs or video within the given time frame in order to identify my child to avoid any reproduction or usage of that image and/or images.  "
                this.tutor = "NAME OF PARENT / GUARDIAN "
                this.firmaP = "SIGNATURE OF PARENT / GUARDIAN " 
                this.firmaT = "SIGNATURE OF WITNESS"
                this.date = "DATE"
            }else{
                this.titulo = "EVENTO– AUTORIZACION PARA PUBLICACION DE FOTOGRAFIAS" 
                this.subtitulo = "Libertad para la Producción Diocesana de la Diócesis de Fresno y todas las Entidades de la Diócesis de Fresno "
                this.parrafo = "Padres/ Tutores: Esta forma debe ser completada para que su hijo participe en este evento o función. Por favor responda de acuerdo con el uso autorizado  de las fotografía de su hijo o imagenes de video producidas en la Diócesis de Fresno para documentos de relaciones publicas."
                this.t1c1 = "NOMBRE DE LA PARROQUIA O ESCUELA"
                this.t1c2 = "NOMBRE DEL GRUPO"
                this.t1c3 = "NOMBRE DEL EVENTO"
                this.t1c4 = "FECHA DEL EVENTO"
                this.subtitulo2 = "ACUERDO DEL PARTICIPANTE"
                this.parrafo2 = "Yo, por el presente concedo a la Diócesis de Fresno y sus entidades (denominada en lo sucesivo como Productor), sus nominados, designados, y sucesores, plena autorización y derecho absoluto y permiso para vender, asignar, transmitir,  reproducir, derechos de autor, uso o publicación de reproducciones fotográficas, retratos, o fotografías de mi, películas o  cinta de video, en la cual yo podría estar incluido en parte, completamente o en combinación, o en la cual el personaje o forma esta distorsionado, en combinación conmigo o alguna otra película,  producto, persona, nombre o reproducción, a color o de otra manera, hecho a través de cualquier medio de comunicación en sus estudios o en algún otro lugar, para arte, comercio, publicidad, negocios o transacción, o cualquier otro propósito legal."
                this.parrafo3 = "Yo, por el presente renuncio a cualquier derecho de tener que inspeccionar  o aprobar el producto terminado o la copia de la publicidad que puede ser usada en conexión con el mismo."
                this.parrafo4 = "Yo, por el presente libero, descargo, y estoy de acuerdo en eximir de responsabilidad al PRODUCTOR, sus nominados, designados, o sucesores, y asignados u otros para quienes ellos están actuando de cualquier responsabilidad de cualquier  índole o descripción en virtud de cualquier uso, ya sea intencional o de otra manera, o de cualquier cambio que pueda ocurrir o sea producido en la toma o dicha fotografía o fotografías, o cualquier procedimiento inclinándose hacia la terminación del producto terminado, a menos que pueda ser mostrado que dicho uso o cambio es únicamente para su propósito de someterme a ridículo evidente, escándalo, reproche, desprecio e indignidad.  "
                this.t2c1 = "NOMBRE DEL PARTICIPANTE"
                this.t2c2 = "FIRMA DEL PARTICIPANTE"
                this.address = "DIRECCIÓN"
                this.t2c3 = "TELÉFONO"
                this.t2c4 = "CORREO ELECTRÓNICO"
                this.subtitulo3 = "PARENT / GUARDIAN AUTHORIZATION FOR A MINOR "
                this.parrafo5 = "Si el participante es menor de 18 años de edad, el padre o el tutor legal del participante mencionado arriba debe proporcionar la siguiente información y debe marcar una de las siguientes cajas y firmar."
                this.parrafo6 = "Como el Padre o tutor legal del participante nombrado arriba Yo por el presente consiento y otorgo my permiso a todo lo anterior."
                this.parrafo7 = "Como el padre y/o tutor legal del participante mencionado arriba, Yo no doy mi consentimiento para que mi hijo sea fotografiado, pero, yo entiendo que será la responsabilidad del participante de hacer todo el esfuerzo posible de no participar posando en ninguna de las imágenes. Si una fotografía o fotografías son inadvertidamente tomadas, entonces estoy de acuerdo en revisar las fotografías o videos dentro del marco de tiempo otorgado para identificar a mi hijo para evitar cualquier reproducción o uso de esas imágenes y/o imágenes."
                this.tutor = "NOMBRE DEL PADRE/TUTOR LEGAL"
                this.firmaP = "FIRMA DEL PADRE/TUTOR LEGAL"
                this.firmaT = "FIRMA DE LOS TESTIGOS"
                this.date = "FECHA"
            }   
            var guardado = localStorage.getItem('autorizacion');
            this.lista.push(JSON.parse(guardado))
           
            
        },
        datos: function(idioma){
            let obj = [
                {
                  escuela:      this.fescuela,         
                  grupo:        this.fgrupo,          
                  evento:       this.fevento,         
                  fechaevento:  this.ffechaevento,    
                  participante: this.fparticipante,   
                  direccion:    this.fdireccion,      
                  telefono:     this.ftelefono,     
                  correo:       this.fcorreo,         
                  tutor:        this.ftutor,          
                  fecha:        this.ffecha          
                }
            ];
            localStorage.setItem('autorizacion', JSON.stringify(obj));
            localStorage.setItem('idioma', idioma);
            window.open(`TercerFormulario.html`, '_blank');
        }
        
    }

});