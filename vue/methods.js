let app = new Vue({
    el: "#app",
    data: {
        lista:[],
        nombreninos: '',
        mombre: 'Hola Mundo',
        horarios:'',
        mandatoria: '',
        cuota: '',
        padre: '',
        madre: ''
    },
    mounted: function(){
        this.parameters()
    },
    methods: {
        ninos: function(){
           app.lista.push({nombre: this.nombreninos});
           console.log(app.lista)
        },
        reportes: function(){
            console.log(app.lista)
        },
        parameters: function(){
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const page_type = urlParams.get('product')
        const page_types = urlParams.get('color')

        console.log(page_type, page_types);
        },
        abrir:  function(){
           // window.location=`PrimerFormulario.html?id=${app.horarios}, '_blank'`;
            //window.open(`PrimerFormulario.html?id=${app.horarios}&${app.mandatoria}&${app.cuota}&${app.padre}&${app.madre}&${app.lista[0]}`, '_blank');
            let obj = [
                {
                    horarios: app.horarios,
                    mandatoria: app.mandatoria,
                    cuota: app.cuota,
                    padre: app.padre,
                    madre: app.madre,
                    ninos: app.lista
                }
            ];
            console.log(obj)                                                          
            localStorage.setItem('datos', JSON.stringify(obj));
            window.open(`PrimerFormulario.html`, '_blank');
        }

        
    }

});