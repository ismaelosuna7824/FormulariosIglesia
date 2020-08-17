let app = new Vue({
    el: "#app",
    data: {
        lista:[],
        nombreninos: '',
        mombre: 'Hola Mundo',
        title1: '',
        parrafo1: '',
        subtitulo1: '',
        subtitulo2: '',
        parrafo2 :'',
        parrafo3: '',
        parrafo4: '',
        parrafo5: '',
        parrafo6: '',
        subtitulo3: '',
        parrafo7: '',
        subtitulo4: '',
        parrafo8: ''

    },
    mounted: function(){
        this.parameters()
    },
    methods: {
        parameters: function(){
            var guardado = localStorage.getItem('idioma');
            if(guardado == "en"){
                this.title1 = "Family Catechesis Contract"
                this.subtitulo1 = "As a parent I pledge:"
                this.parrafo1 = "To bring my family to Mass every weekend and to make sure that each child has their Mass card stamped. To make sure my children and/or I arrive on time to attend all classes that are needed for the Sacrament that we are seeking, To attend all Parents Gatherings on the assigned dates and on time. Gatherings begin at 6:00 PM. To actively participate in completing any family projects that might be given to my family. To pray with my family every day.";
                this.subtitulo2 ="To read and reflect on the Sunday readings with my family at least once a week."
                this.parrafo2 = "To instruct my children in their faith (prayers, practices, and teachings of our faith). To instruct my child to listen and follow the rules of Catechesis. To be a model of Christian living for my children. I have received and understand the Schedule of Classes, Gatherings, and times: "
                this.parrafo3 ="I understand any changes will be posted on the bulletin board & in the Parish bulletin at least 1 week before. I also understand that children may only have"
                this.parrafo4 = "3 absences from their Sacramental Classes, Mass, and Parents Gatherings, and that Parents Gatherings are mandatory. "
                this.parrafo5 ="I understand that once my child is registered the fee is non-refundable"
                this.parrafo6 = "The Church does not require sponsors for First Communion, however it is up to the family to have one or not, in case there is a one, this person will be seated in a reserved section during First Communion Mass."
                this.subtitulo3 = "As a child I pledge:"
                this.parrafo7 = "To listen to my parents, teachers, and priest when they are speaking to me. To go to Mass with my family each weekend and have my Mass card stamped. To attend all classes for the Sacrament I am seeking and attend weekend Mass. To work with my entire family on any Family Projects that have been assigned.To pray with my family every day.To learn my prayers and other important things I need to know about my faith.To treat others in ways that show I respect them; To follow the rules of Catechesis.To be respectful in and around the church buildings and grounds.I understand that I may only have 3 absences from Sacramental Classes in combination with Mass, and parents Gathering."
                this.subtitulo4 = "As members of the Catechesis Team We pledge:"
                this.parrafo8 = "To provide ample opportunities for your family to attend Mass on the weekends. To provide a schedule of dates for Sacramental Classes and for Parents Gatherings. To provide meaningful and sufficient family projects for your family between gatherings. To give you the information and tools you need to pray together as a family, share scripture, and follow the liturgical year. To clearly state the rules and guidelines for Catechesis for adults as well as for children to understand. To model Christian behavior in our interactions with the community, parents, students, and fellow team members."
            }else{
               
                
            }   
           
            //console.log('objetoObtenido: ', JSON.parse(guardado));
            // this.lista.push(guardado);
            // console.log(app.lista)
            //console.log(guardado)
            //console.log(this.lista[0][0].ninos)
            
        },
        abrirI: function(idioma){
            localStorage.setItem('idioma', idioma);
            window.open(`SextoFormulario.html`, '_blank');
        }
        
    }

});