Vue.component('Login', {

    template: `
    <div class="container">
        <!--PARA EL TITULO DEL RECUADRO DEL LOGIN -->
        <div class="row text-center login-page">
            <div class="col-md-12 login-form">
                <form action="claseDestino.php" method="post">
                    <div class="row">
                        <div class="col-md-12 login-form-header">
                        <p class="login-form-font-header">Pasteles<span>Miroslava</span><p>
                        </div>
                    </div>
                    <!--RECUADRO DE TEXTO PARA USUARIO-->
                    <div class="row">
                        <div class="col-md-12 login-from-row">
                        <input name="usuario" type="text" placeholder="Usuario" required />
                        </div>
                    </div>
                    <!--RECUADRO DE TEXTO PARA CONTRASEÑA-->
                    <div class="row">
                        <div class="col-md-12 login-from-row">
                        <input name="password" type="password" placeholder="Contraseña" required />
                        </div>
                    </div>
                    <!--BOTON PARA INGRESAR-->
                    <div class="row">
                        <div class="col-md-12 login-from-row">
                        <button class="btn btn-success">Ingresar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `
    
})


new Vue({
    el: '#app',
    data() {
        return {
            titulo: "Login"
        }
    },

    computed: {
        
    },

    watch: {
        
    },

    methods: {
        
    },
})

