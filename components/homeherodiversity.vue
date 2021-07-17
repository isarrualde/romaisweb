<template>
  <div>
          <div class="jumbotron hero-presentation jumbotron-fluid">
        <div class="container">
          <b-row>
            <b-col cols="6">
              <p class="h3 pb-lg-0 mb-lg-0 text-uppercase">Welcome visitor! I am</p>
              <h1 class="display-3 pt-lg-0 font-weight-bold">ROMAIS</h1>
              <p class="display-4 heading-romais mt-lg-3 mb-5">Inclusive Design and <a href="#">#a11y</a> advocate</p>
              <p class="lead font-weight-normal mb-lg-5">I  help software companies build Modular Atomic Design Systems for their platforms with focus on User Diversity. </p>
              <b-button variant="secondary"  class="text-textbutton font-weight-bold">
                <font-awesome-icon  class="mr-2" :icon="['fa', 'calendar']"/>
                Book a meeting
              </b-button>
              <b-link class="ml-lg-4">Or See My Work (Design Mockups)</b-link>
            </b-col>
            <b-col cols="6">
              <img class="img-fluid" src="../assets/img/romaisportrait.png" />
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="jumbotron hero-user-diversity jumbotron-fluid mb-0">
        <div class="container">
          <b-row>
            <b-col cols="6">
              <img class="img-fluid" src="../assets/img/user-diversity.png" />
            </b-col>
            <b-col cols="6">
              <h2 class="display-4 heading-romais font-weight-bold text-white text-uppercase text-right mb-5">User Diversity is a fact, inclusion is a choice</h2>
              <p class="lead font-weight-normal text-white text-right ">Inclusive design expands the audience for a digital product by iterating and creating new ways that enable people with different mismatches to interact with your product or service. </p>
            </b-col>
          </b-row>
        </div>
      </div>


      <div class="jumbotron hero-exclusion mb-0 jumbotron-fluid bg-white">
        <div class="container">
          <b-row>
            <b-col cols="6">
              <h2 class="display-4 heading-romais font-weight-bold text-uppercase mb-5">Exclusion</h2>
              <p class="lead font-weight-normal">
                Exclusion is not a PR-friendly word, but it is a universal human experience. We all know how it feels when we’re left out. 
                We each experience it over the course of our lives.</p>
              <p class="lead font-weight-normal">
                Design is much more likely to be the source of exclusion than inclusion. When we design for other people, our own biases and preferences often lead the way. 
              </p>
              <p class="lead font-weight-normal">
                So, if design is a source of exclusion, can it also be the remedy? Yes, but it takes work. First, we can start by building better methods and tools for recognizing exclusion. 
              </p>
            </b-col>
            <b-col cols="6">
              <img class="img-fluid mt-lg-5 pt-lg-5" src="../assets/img/user-exlusion.png" />
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="jumbotron hero-inclusive mb-0 jumbotron-fluid bg-white">
        <div class="container mt-4 mb-4">
          <b-row>
            <b-col cols="12">
              <h2 class="display-4 heading-romais font-weight-bold text-uppercase text-center">Inclusive design</h2>
              <p class="lead font-weight-normal text-center pl-5 pr-5 mb-5 mt-5">
                Inclusion means many different things to different people, and maybe that’s the point. It should adapt to fit a diverse range of situations. But to make meaningful progress towards inclusion, we need to learn to recognize its inverse. Exclusion just might be the ultimate shared experience and sharp focus that leads the way.
              </p>
              <p class="text-center">
                <b-link class="text-center">See examples of inclusive design in action!</b-link>
              </p>
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="jumbotron hero-user-diversity mb-0 jumbotron-fluid">
        <div class="container">
          <b-row>
            <b-col cols="6">
              <h2 class="display-4 heading-romais font-weight-bold text-uppercase text-white mb-5">“What’s The Next Step?”</h2>
              <p class="lead font-weight-normal text-white mb-5">
                Let’s schedule a meeting! We can start by discussing your SaaS Platform and I can recommend the best route forward.
              </p>
              <b-button variant="secondary"  class="text-textbutton font-weight-bold mb-3">
                <font-awesome-icon  class="mr-2" :icon="['fa', 'calendar']"/>
                Book a meeting
              </b-button>
            </b-col>
            <b-col cols="6">
              <img class="img-fluid" src="../assets/img/romais-book.png" />
            </b-col>
          </b-row>
        </div>
      </div>
      <footer class="w-100 bg-white flex-shrink-0 footer-light footer-shadow">
        <div class="container py-4">
          ROMAIS 2021
        </div>
      </footer>

  </div>
</template>

<script>
export default {
  name: 'homeherodiversity'
}
</script>