<!-- Please remove this file from your project -->
<template>
  <div class="container-fuid">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Noto Sans);
    </style>
    
      <div class="container-fuid shadow-sm border-grayborder border-bottom-1 bg-white">
        <div class="container">
          <b-navbar toggleable="sm" type="light" class="bg-white sticky-top" variant="light">
            <b-navbar-brand href="#">ROMAIS</b-navbar-brand>
            
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" class="desktop-nav" is-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="global-nav">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item-dropdown text="Work" right>
                  <b-dropdown-item href="#">Before & After</b-dropdown-item>
                  <b-dropdown-item href="#">Services</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">Resume</b-nav-item>
                <b-nav-item target="_blank" href="https://medium.com/@imromais">Blog</b-nav-item>
              </b-navbar-nav>
              <b-button variant="primary">Book a meeting</b-button>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
      <div class="jumbotron hero-presentation jumbotron-fluid">
        <div class="container">
          <b-row>
            <b-col cols="6">
              <p class="h3">Welcome visitor!</p>
              <p class="h2">I'm</p>
              <h1 class="display-2">ROMAIS</h1>
              <p class="lead">Inclusive Design and <a href="#">#a11y advocate</a></p>
              <b-button variant="secondary" class="btn">Book a meeting</b-button>
            </b-col>
            <b-col cols="6">
              <img class="img-fluid" src="../assets/img/romaisportrait.png" />
            </b-col>
          </b-row>
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
.navbar-brand {
  font-size: 24px;
  font-weight: 800;
}

.navbar-expand-lg, .navbar-expand-sm {
  min-height: 85px;
  display: flex;
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

<script>
export default {
  name: 'navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-brand {
  font-size: 24px;
  font-weight: 800;
}

.navbar-expand-lg, .navbar-expand-sm {
  min-height: 85px;
  display: flex;
}

.hero-presentation {
  background-color: transparent !important;
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
