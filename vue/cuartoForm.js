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
        t2c3: '',
        t2c4: '',
        t2c5: '',
        t2c6: '',
        t2c7: '',
        address: '',
        subtitulo3: '',
        parrafo5: '',
        t3c1: '',
        t3c2: '',
        t3c3: '',
        t3c4: '',
        t3c5: '',
        t3c6: '',
        t3c7: '',
        t4c1: '',
        t4c2: '',
        t4c3: '',
        t4c4: '',
        t4c5: '',
        t4c6: '',
        t4c7: '',
        fescuela: '',
        fgrupo: '',
        fevento: '',
        ffechaevento: '',
        fdestino: '',
        fciudad: '',
        ftransporte: '',
        fcuota: '',
        fregresar: '',
        fsalida: '',
        fregreso: '',
        fparticipante: '',
        fpadre: '',
        ffecha: '',
        ftelefonocasa: '',
        fcelular: '',
        fotro: '',
        fgrupomedico: '',
        ftelefonodoctor: '',
        fcompania: '',
        fpoliza: '',
        ffecharecibo: '',
        frecibio: ''
    },
    mounted: function(){
        this.parameters()
    },
    methods: {
        parameters: function(){
            var guardado = localStorage.getItem('idioma');
            if(guardado == "en"){
                this.titulo = "EVENT  -  YOUTH AUTHORIZATION "
                this.subtitulo = "Diocese of Fresno and all Entities of the Diocese of Fresno: Permission for a Minor to Participate in a DOF Activity, Release of Liability, and Consent for Emergency Medical Treatment  "
                this.parrafo = "Parent / Guardian: In order for your child to attend and/or participate in this specific event, activity , or sport listed on this form you must give your signed permission by completing this form. In addition to this form, you  must also have on file at your Parish the PR22 Youth Annual Event Authorization. "
                this.t1c1 = "NAME OF PARISH  OR SCHOOL"
                this.t1c2 = "NAME OF GROUP" 
                this.t1c3 = "NAME OF EVENT"
                this.t1c4 = "DATE OF EVENT"
                this.t2c1 = "DESTINATION  OF FIELD TRIP "
                this.t2c2 = "CITY / STATE LOCATION "
                this.t2c3 = "MODE OF TRANSPORTATION "
                this.t2c4 = "FEE (IF APPLICABLE) "
                this.t2c5 = "FORM MUST BE RETURNED BY "
                this.t2c6 = "DEPARTURE DATE AND TIME "
                this.t2c7 = "ESTIMATED RETURN DATE AN TIME"
                this.subtitulo2 = "OFF CAMPUS FIELD TRIP INFORMATION  "
                this.parrafo2 = "My child is physically fit and capable of participating in this activity and/or event. I have informed my child to follow the rules, guidelines, and instructions of the DOF Entity and its personnel, as well as the adult leadership of this activity. I understand that participation in this activity involves some risk (including any travel to and from this activity) and that unforeseen occurrences can arise. I am informed and agree that transportation, if involved, may be provided by volunteers, parents, private individuals, or commercial operators who are believed to be reliable and insured, but are not under the supervision or control of the Diocese."
                this.parrafo3 = "In exchange for permitting my child to participate in this voluntary activity, I waive and give up all claims (and the right to file a lawsuit) which I or my child (and our successors, heirs, and assigns) may have against DOF. I release and discharge DOF from all liability or responsibility for death, illness, personal injury, or property damage arising out of this activity and any transportation involved with this activity."
                this.parrafo4 = "This permission, waiver, release, and consent applies to the named DOF entity, including, but not limited to the parish; the Diocese of Fresno Education Corporation; the Roman Catholic Bishop of Fresno (a corporate sole); the Diocese of Fresno; other Fresno Diocesan Parishes and schools; affiliated organizations and officers; clergy; agents; and employees. "
                this.parrafo5 = "As the parent and/or legal guardian of the named child, I give my permission and consent and agree to all of the foregoing. In the event of an emergency and if the DOF entity is unable to contact me, I authorize the DOF personal or other adult leadership of this event or activity, at my expense, to secure and consent to x-ray examination, medical, dental, or surgical diagnosis, treatment, and hospital care advised and supervised by a duly licensed physician, surgeon, or dentist. I expect to be contacted as soon as possible. A copy or digital image of this form shall be valid as the original and may be given to the adult leader of the activity. "
                this.subtitulo3 = "PARTICIPANT AND PARENT/GUARDIAN AUTHORIZATION  "

                this.t3c1 = " NAME OF PARTICIPANT "
                this.t3c2 = " NAME OF PARENT / GUARDIAN "
                this.t3c3 = "SIGNATURE OF PARENT / GUARDIAN "
                this.t3c4 = "DATE "
                this.t3c5 = "HOME PHONE NUMBER "
                this.t3c6 = "CELLULAR NUMBER "
                this.t3c7 = "OTHER "
                this.t4c1 = " MEDICAL INFORMATION "
                this.t4c2 = " DOCTOR’S  NAME OR MEDICAL GROUP "
                this.t4c3 = "DOCTOR’S TELEPHONE "
                this.t4c4 = "INSURANCE COMPANY "
                this.t4c5 = "INS. POLICY NUMBER  "
                this.t4c6 = "No Family Physician Listed  "
                this.t4c7 = "DATE  RECEIVED AND BY  "
               
            }else{
                this.titulo = "EVENTO  -  AUTORIZACION JUVENIL " 
                this.subtitulo = "Diócesis de Fresno y Entidades de la Diócesis de Fresno: Permiso para que un Menor participe en una actividad de la Diócesis de Fresno, Liberación de Responsabilidad, y Consentimiento para Tratamiento Medico de Emergencia"
                this.parrafo = "Padre/Tutor: Para que su hijo (a) asista y/o participe en este evento especifico, actividad o deporte enlistado en esta forma, usted debe otorgar su permiso firmado al completar esta forma. Además de esta forma, usted deberá también tener en el archivo de su Parroquia la forma PR22 Autorización Anual para Eventos Juveniles. "
                this.t1c1 = "NOMBRE DE LA PARROQUIA O ESCUELA"
                this.t1c2 = "NOMBRE DEL GRUPO"
                this.t1c3 = "NOMBRE DEL EVENTO"
                this.t1c4 = "FECHA DEL EVENTO"
                this.subtitulo2 = "INFORMACION DEL VIAJES O EXCURSION FUERA DEL PLANTEL  "
                this.parrafo2 = "Mi hijo (a) esta en buena condición física y apto para participar en esta actividad o evento. Ya he informado a mi hijo (a) que debe sujetarse a las reglas e instrucciones de la Diócesis de Fresno y su personal, así como también al liderazgo de los adultos en esta actividad. Entiendo que la participación en esta actividad involucra cierto riesgo (incluyendo cualquier viaje de ida y vuelta en esta actividad) y que eventos imprevistos pueden surgir. Estoy informado y de acuerdo que la transportación, de ser necesaria, puede ser proporcionada por voluntarios, padres, individuos particulares o por operadores comerciales quienes se consideran fiables y están asegurados pero no están bajo la supervisión o control de la Diócesis. "
                this.parrafo3 = "A cambio de permitir a mi hijo (a) participar en esta actividad voluntaria, cedo y renuncio a todo reclamo (y al derecho de presentar una demanda legal) la cual yo o mi hijo (a) (y nuestros sucesores, propios y asignados) puedan tener contra la Diócesis de Fresno. Libero y descargo a la Diócesis de Fresno de toda responsabilidad de muerte, enfermedad, lastimaduras, daños personales o daño a la propiedad surgido de esta actividad y a cualquier trasportación  involucrada con esta actividad. "
                this.parrafo4 = "Este permiso, renuncia, liberación y consentimiento aplica a la entidad llamada Diócesis de Fresno, incluyendo, pero no limitada a la parroquia, la Corporación Educativa de la Diócesis de Fresno, al Obispo Católico Romano de Fresno, (una corporación individual), La Diócesis de Fresno, otras Parroquias y Escuelas Diocesanas de Fresno, Organizaciones afiliadas y sus directivos, clero, agente y empleados. "
                this.parrafo5 = "Como el padre o tutor legal del niño mencionado, doy mi permiso y consentimiento y estoy de acuerdo con todo lo anterior. En caso de emergencia y si la entidad de la Diócesis de Fresno no es capaz de contactarme, Yo autorizo al personal de la Diócesis de Fresno o a otros  líderes adultos de este evento o actividad, con cargo a mi propio costo, para asegurar y dar consentimiento a exámenes de rayos-x, médico, dental o diagnostico quirúrgico, tratamiento y cuidado hospitalario recomendado y supervisado por un médico, cirujano o dentista debidamente licenciado. Espero ser contactado lo antes posible. Una copia o imagen digital de esta forma será válida como la original y puede ser proporcionada al líder adulto de la actividad. "
                this.subtitulo3 = "AUTORIZACION DEL PADRE/TUTOR Y DEL PARTICIPANTE  "
                this.t2c1 = "DESTINO DEL VIAJE  O EXCURSION  "
                this.t2c2 = "CIUDAD / ESTADO LOCALIDAD  "
                this.t2c3 = "MEDIO DE TRANSPORTACION  "
                this.t2c4 = "CUOTA (SI APLICA) "
                this.t2c5 = "LA FORMA DEBE SER REGRESADA EL  "
                this.t2c6 = "SALIDA FECHA Y HORA  "
                this.t2c7 = "FECHA Y HORA ESTIMADA  DEL REGRESO  "

                this.t3c1 = " NOMBRE DEL  PARTICIPANTE  "
                this.t3c2 = " NOMBRE DEL  PADRE / TUTOR  "
                this.t3c3 = "FIRMA DEL  PADRE/TUTOR "
                this.t3c4 = "FECHA  "
                this.t3c5 = "NUMERO TELEFONICO EN CASA  "
                this.t3c6 = "NUMERO CELULAR  "
                this.t3c7 = "OTRO  "
                this.t4c1 = " INFORMACION MEDICA   "
                this.t4c2 = " NOMBRE DEL DOCTOR  O GRUPO MEDICO   "
                this.t4c3 = "TELEFONO DEL  DOCTOR   "
                this.t4c4 = "COMPANIA DE SEGURO "
                this.t4c5 = "NUMERO DE LA POLIZA DE SEGURO    "
                this.t4c6 = "No Medico Familiar enlistado  "
                this.t4c7 = "FECHA DE RECIBIDO Y NOMBRE DE QUIEN RECIBIO   "
            }   
            var guardado = localStorage.getItem('eventoauth');
            this.lista.push(JSON.parse(guardado))
            console.log(this.lista);
           
            
        },
        datos: function(idioma){
            let obj = [
                {
                escuela         :    this.fescuela,
                grupo           :    this.fgrupo,
                evento          :    this.fevento,
                fechaevento     :     this.ffechaevento,
                destino         :    this.fdestino,
                ciudad          :    this.fciudad,
                trasnporte      :    this.ftransporte,
                cuota           :    this.fcuota,
                regresar        :    this.fregresar,
                salida          :    this.fsalida,
                regreso         :    this.fregreso,
                participante    :    this.fparticipante,
                padre           :    this.fpadre,
                fecha           :    this.ffecha,
                telefonocasa    :    this.ftelefonocasa,
                celular         :    this.fcelular,
                otro            :    this.fotro,
                grupomedico     :    this.fgrupomedico,
                telefonodtoctor :    this.ftelefonodoctor,
                compania        :    this.fcompania,
                poliza          :    this.fpoliza,
                fecharecibo     :    this.ffecharecibo,
                reicbo          :    this.frecibio,       
                }
            ];
            localStorage.setItem('eventoauth', JSON.stringify(obj));
            localStorage.setItem('idioma', idioma);
            window.open(`CuartoFormulario.html`, '_blank');
            //console.log(obj)
        }
        
    }

});