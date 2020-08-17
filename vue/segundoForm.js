let app = new Vue({
    el: "#app",
    data: {
        lista:[],
        nombreninos: '',
        mombre: 'Hola Mundo',
        title1: '',
        parrafo1: '',
        directory: '',
        title2: '',
        parrafo2: '',
        parrafor21: '',
        title3: '',
        parrafo3: '',
        parrafo31: '',
        parrafo32: '',
        parrafo33: '',
        parrafo4: '',
        parrafo5: '',
        signed: '',
        date: ''
    },
    mounted: function(){
        this.parameters()
    },
    methods: {
        parameters: function(){
            var guardado = localStorage.getItem('idioma');
            if(guardado == "en"){
                this.title1 = "DIOCESAN POLICY FOR THE RECEPTION OF EUCHARIST AND PENANCE"
                this.parrafo1 = "A two-year catechesis of preparation is required. It is recommended that parents of children also attend a program of catechesis and doctrinal preparation. The catechesis for the initial reception of the Sacrament of Penance is to be separated from the catechesis for First Eucharist so that the child will clearly distinguish between the two sacraments. The beginning catechesis for penance is to precede the reception for First Eucharist. The reception of First Penance is to be separated by several months from the reception of First Eucharist";
                this.directory = "Taken from the Dioceses of Fresno Directory";
                this.title2 = "GUIDE TO BE A GODPARENT/SPONSOR IN THE CATHOLIC CHRUCH"
                this.parrafo2 = "As a Godparent for any Sacrament, you are undertaking an important ministry in both the life of the person receiving the Sacrament and in the life of the Catholic Church."
                this.parrafor21 = "You are called to be an example of faithfulness to the Gospel of Jesus Christ and in the life of the one receiving the Sacrament."
                this.title3 = "Because of the importance of your role as a Godparent/Sponsor, the Church asks that you must be:"
                this.parrafo3 = "Must be a practicing Catholic who has received the sacraments of Initiation (Baptism, Eucharist, and Confirmation); and be able to receive the Eucharist."
                this.parrafo31 = "18 years of age or older."
                this.parrafo32 = "Not be the father or mother of the one receiving the Sacrament"
                this.parrafo33 = "If married, the Godparent/Sponsor should be married by the Catholic Church."
                this.parrafo4 = "This information is provided as a guide, please remember the Catholic Church doesn’t require Godparent/Sponsor for First Communion, if you (parents) decide to have a Godparent/Sponsor for your child please be sure that he or she can receive the Eucharist, if that is not the case then they will need to have their arms crossed on their chest when they go receive a blessing instead of the Eucharist."
                this.parrafo5 = " I have read and understand the above information." 
                this.signed = "Signed"
                this.date = "Date"
            }else{
                this.title1 = "POLITICA DIOCESANA PARA LA RECEPCION DE LA COMUNION Y PENITENCIA"
                this.parrafo1 = "Se requiere una catequesis de preparación de dos años. Se recomienda que los padres de los niños también asistan al programa de catequesis y preparación doctrinal. La catequesis inicial para la recepción del sacramento de la penitencia debe ser aparte de la catequesis para la Primera Comunión para que el niño pueda distinguir claramente entre los dos sacramentos. La catequesis inicial de la penitencia debe preceder a la recepción de la Primera Comunión. La recepción de la Primera Confesión debe estar separada por varios meses de la recepción de la Primera Comunión";
                this.directory = "Tomado del Directorio de la Diócesis de Fresno.";
                this.title2 = "GUIA PARA SER PADRINO O MADRINA EN LA IGLESIA CATOLICA"
                this.parrafo2 = "Como Padrino o Madrina para cualquier Sacramento, está aceptando un ministerio importante dentro de la vida de la persona que recibirá el Sacramento y en la vida de la Iglesia católica."
                this.parrafor21 = "Los Padrinos o Madrinas están llamados a ser un ejemplo de fe en con el Evangelio de Jesucristo y en la vida de quien va recibir el Sacramento."
                this.title3 = "Debido a la importancia de su función como Padrino o Madrina, la Iglesia le pide que usted cumpla con estos requisitos:" 
                this.parrafo3 = "Ser un católico practicante que ha recibido los sacramentos de iniciación (Bautismo, Eucaristía y Confirmación). Que pueda recibir la Comunión.18 años o más. "
                this.parrafo31 = "18 años o más." 
                this.parrafo32 = "No ser el padre o la madre de quien va a recibir el Sacramento de Primera Comunión."
                this.parrafo33 = "Si es casado, el Padrino o la Madrina deberá estar casado/a por la Iglesia Católica." 
                this.parrafo4 = "Se les proporciona esta información como una guía recuerden para la Primera Comunión la Iglesia no pide Padrino o Madrina, si ustedes (padres) deciden tener Padrino o Madrina para su hijo/a por favor asegúrense que la persona puede recibir la Comunión, en caso que no pueda deberá ir a recibir la bendición con los brazos en cruz sobre su pecho." 
                this.parrafo5 = "He leído y entiendo la información anterior."
                this.signed = "Firma"
                this.date = "fecha"
            }   
           
            //console.log('objetoObtenido: ', JSON.parse(guardado));
            // this.lista.push(guardado);
            // console.log(app.lista)
            //console.log(guardado)
            //console.log(this.lista[0][0].ninos)
            
        },
        abrirI: function(){
            localStorage.setItem('idioma', "en");
            window.open(`SegundoFormulario.html`, '_blank');
        },
        abrirE: function(){
            localStorage.setItem('idioma', "es");
            window.open(`SegundoFormulario.html`, '_blank');
        }
        
    }

});