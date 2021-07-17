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
                <b-nav-item>
                  <NuxtLink to="/">Home</NuxtLink>
                </b-nav-item>
                <b-nav-item-dropdown text="Work" right>
                  <b-dropdown-item href="#">Before & After</b-dropdown-item>
                  <b-dropdown-item href="#">Services</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item>
                  <NuxtLink to="/resume">Resume</NuxtLink>
                </b-nav-item>
                <b-nav-item target="_blank" href="https://medium.com/@imromais"><font-awesome-icon  class="mr-2" :icon="['fab', 'fa-medium']"/> Blog</b-nav-item>
              </b-navbar-nav>
              <b-button variant="primary"> 
                <font-awesome-icon  class="mr-2" :icon="['fa', 'calendar']"/>
                Book a meeting
              </b-button>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
      
      <!-- Add the code below inside the <body> tags of your HTML page -->
      <script>
      window.VIDEOASK_EMBED_CONFIG = {
        "kind": "widget",
        "url": "https://www.videoask.com/fyezd2ru8",
        "options": {
          "widgetType": "VideoThumbnailSmall",
          "text": "Talk to me",
          "backgroundColor": "#7D00FE",
          "position": "bottom-right",
          "dismissable": false
        }
      }
      </script>
      <script src="https://www.videoask.com/embed/embed.js"></script>
      <!-- Important!!! In order to allow your videoask to open up on the same page when interacting with the widget, your website must use the secure https:// protocol (i.e have an SSL certificate). Otherwise, when clicking the widget, a new tab will be automatically opened in the browser.
      -->
    </div>
</template>
<style scoped>


</style>

<script>
export default {
  name: 'navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.navbar-brand {
  font-size: 24px;
  font-weight: 800;
}

.navbar-expand-lg, .navbar-expand-sm {
  min-height: 85px;
}

.hero-presentation {
  background-color: transparent !important;
}
.hero-user-diversity {
  background-color: #181d27;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234d4d4d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-exclusion {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23d4d4d4' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
.hero-inclusive {
  background-color: #EFEFF0!important;
}
.heading-romais {
  font-size: 45px !important;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
@media (min-width: 576px) {
  .desktop-nav{
    display: -ms-flexbox!important;
    display: flex!important;
    -ms-flex-pack: end!important;
    justify-content: flex-end!important;
  }
}

</style>
