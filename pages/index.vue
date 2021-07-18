<template>
  <div>
    <navbar />
    <home />

    
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

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Home from '../components/home.vue'


export default Vue.extend({
  components: { Navbar,  Home },})
</script>