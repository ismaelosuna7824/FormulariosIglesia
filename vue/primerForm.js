let app = new Vue({
    el: "#app",
    data: {
        lista:[],
        nombreninos: '',
        mombre: 'Hola Mundo'
    },
    mounted: function(){
        this.parameters()
    },
    methods: {
        parameters: function(){
            var guardado = localStorage.getItem('datos');
            //console.log('objetoObtenido: ', JSON.parse(guardado));
            // this.lista.push(guardado);
            // console.log(app.lista)
            this.lista.push(JSON.parse(guardado))
            //console.log(this.lista[0][0].ninos)
            
        } 
        
    }

});