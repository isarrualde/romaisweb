<template>
  <div>
    <div class="jumbotron hero-presentation jumbotron-fluid mb-n3 mt-0 pb-0">
      <div class="container">
        <b-row>
          <b-col lg="6" sm="12" md="12">
            <h1 class="display-4 font-weight-bold mb-n2">RO<span class="text-grayme">DRIGO</span></h1>
            <h1 class="display-4 font-weight-bold mb-n2">MA<span class="text-grayme">TIAS</span></h1>
            <h1 class="display-4 font-weight-bold">IS<span class="text-grayme">ARRUALDE</span></h1>
            <h3 class="pt-3 pb-3">Hello there! 👋</h3>
            <p class="lead font-weight-normal">I’m a <a href="https://www.interaction-design.org/literature/topics/product-design">product designer</a> and front-end developer with special interest in user diversity and user inclusivity.</p> 
            <p class="lead font-weight-normal">I am passionate about helping companies design better digital products / services through to the creation and maintenance of their own Atomic Design Systems.</p>
          </b-col>
          <b-col lg="6" sm="12" md="12">
            <b-carousel
              id="carousel-fade"
              fade
              indicators
              controls
            >
              <b-carousel-slide class="img-fluid"
                img-src="../assets/img/resume-me-1.png"
              ></b-carousel-slide>
              <b-carousel-slide class="img-fluid"
                img-src="../assets/img/resume-me-2.png"
              ></b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row> 
      </div>
    </div>
    <div class="jumbotron hero-user-diversity jumbotron-fluid pt-5 mt-n3">
      <div class="container">
        <b-row class="mt-n3 mb-5">
          <b-col cols="12">
            <h3 class="text-white">Social Media</h3>
          </b-col>
          <b-col cols="12">
            <b-button target="_blank" href="https://medium.com/@imromais" class="py-3 px-4 my-2 mx-2" pill variant="social"><font-awesome-icon class="lead" :icon="['fab', 'medium']"/></b-button>
            <b-button target="_blank" href="https://www.linkedin.com/in/matiasisarrualde/" class="py-3 px-4 my-2 mx-2" pill variant="social"><font-awesome-icon class="lead" :icon="['fab', 'linkedin']"/></b-button>
            <b-button target="_blank" href="https://github.com/isarrualde" class="py-3 px-4 my-2 mx-2" pill variant="social"><font-awesome-icon class="lead" :icon="['fab', 'github']"/></b-button>
            <b-button target="_blank" href="https://codepen.io/isarrualde" class="py-3 px-4 my-2 mx-2" pill variant="social"><font-awesome-icon class="lead" :icon="['fab', 'codepen']"/></b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">

            <h3 class="text-white">🇦🇷 Argentina - Remote</h3>
            <p class="lead font-weight-normal text-white mb-5">
              Let’s schedule a meeting! We can start by discussing your SaaS Platform and I can recommend the best route forward. Or you can email me at: <a class="text-white" href="mailto:isarrualde@gmail.com">isarrualde@gmail.com</a>
            </p>
            <b-button variant="secondary" to="/calendar" class="text-textbutton font-weight-bold mb-3 btn-mobile">
              <font-awesome-icon  class="mr-2" :icon="['fa', 'calendar']"/>
              Book a meeting
            </b-button>
            <a class="lead font-weight-normal text-white ml-md-4 ml-lg-4 mb-3" href="/_nuxt/img/resume-romais.pdf" download>
              Download Resume in PDF
            </a>
          </b-col>

        </b-row>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'me'
}
</script>