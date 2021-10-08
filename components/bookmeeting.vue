<template>
  <div>
    <div class="container mt-5">
      <b-row>
        <b-col lg="5" sm="12">
          <h3 class="display-4 heading-romais font-weight-bold text-uppercase mb-5 text-sm-center text-lg-left">Book a discovery call!!</h3>
          <p class="lead font-weight-normal text-sm-center text-md-center text-lg-left pb-3">Please follow the instructions to add an event to my calendar.</p>
          <p class="lead pb-3 font-weight-normal"><span class="bg-primary text-white rounded-circle px-3 py-2 mt-5 mb-3 mr-3 h3">1</span><span class="h3">Book a Meeting</span></p>
          <p class="lead font-weight-normal pb-3">We will discuss your company biggest challenges to see there's a good fit between us.</p>
          <p class="lead pb-3 font-weight-normal"><span class="bg-primary text-white rounded-circle px-3 py-2 mt-5 mb-3 mr-3 h3">2</span><span class="h3">Pick a Service</span></p>
          <p class="lead pb-3 font-weight-normal"><span class="bg-primary text-white rounded-circle px-3 py-2 mt-5 mb-3 mr-3 h3">3</span><span class="h3">Start working!</span></p>
        </b-col>
        <b-col lg="7" sm="12">
          <!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url="https://calendly.com/romais?hide_gdpr_banner=1" style="min-width:320px;height:780px;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          <!-- Calendly inline widget end -->
        </b-col>
      </b-row>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'bookmeeting'
}
</script>