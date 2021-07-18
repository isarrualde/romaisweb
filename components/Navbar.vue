<!-- Please remove this file from your project -->
<template>
  <div class="container-fuid">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Noto Sans);
    </style>
    
      <div class="container-fuid shadow-sm border-grayborder border-bottom-1 bg-white">
        <div class="container">
          <b-navbar toggleable="sm" type="light" class="bg-white sticky-top" variant="light">
            <b-navbar-brand href="#">
              <NuxtLink to="/">ROMAIS</NuxtLink>
            </b-navbar-brand>
            
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" class="desktop-nav" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="global-nav pr-lg-5">
                <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                <b-nav-item-dropdown text="Work" right>
                  <b-dropdown-item href="#">Before & After</b-dropdown-item>
                  <b-dropdown-item href="#">Services</b-dropdown-item>
                </b-nav-item-dropdown>
               
                <NuxtLink class="nav-link" to="/resume">Resume</NuxtLink>
                
                <b-nav-item target="_blank" href="https://medium.com/@imromais">
                  Blog
                </b-nav-item>
              </b-navbar-nav>
              <b-button variant="primary"> 
                <font-awesome-icon  class="mr-2" :icon="['fa', 'calendar']"/>
                Book a meeting
              </b-button>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
