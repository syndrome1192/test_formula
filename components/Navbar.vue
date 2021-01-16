<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" exact to="/">Search <span class="sr-only">(current)</span></nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" to="/users">Users</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" to="/contact">Contact</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" to="/help">Help</nuxt-link>
                </li>
            </ul>
            <div class="auth">
                <a>Sign in</a>
                <a class="signin">Sign Up</a>
            </div>
        </div>
    </nav>
</template>
<style scoped>
    .navbar-brand{
        margin-left: 200px;
        margin-right: 0;
    }
    .auth{
        margin-right: 200px;
    } 
    .signin{
        padding: 10px;
        background: rgba(84, 84, 248, 0.925);
        color: #fff;
        margin-left: 10px;
        text-decoration: none;

    }   
</style>
