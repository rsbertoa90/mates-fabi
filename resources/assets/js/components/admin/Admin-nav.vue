<template>
    <nav v-if="user && user.role_id < 3" class="navbar navbar-expand-lg navbar-dark bg-primary font-weight-bold">
           <a class="navbar-brand " href="/">
                <img style="width:50px" src="/storage/images/app/logo.png" alt="Bazar Mayorista Maju">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="/admin/cotizador">Cotizador</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="/super/products">Administrar Productos</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="/admin/ordenes">Pedidos</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="/super">Metadatas</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="/logout">Salir</a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    }
}
</script>


<style lang="scss">
    .text-white{
        color:#fff;
       
    }
    .navbar{
        margin: 0 -7%;
        padding: 0 30px;
    }

    @media(max-width: 600px)
    {
        .navbar{
            margin: 0 -4%;
        }
    }
</style>