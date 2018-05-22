<template lang="html">
  <section class="deliverables">
    <div class="contain mobile-display">

      <div class="iphone-contain">
        <figure class="iphone">
          <div class="side-buttons"><div></div></div>
          <div class="phone">
            <div class="top"><div><span class="camera"></span><span class="speaker"></span></div></div>

            <div class="screen">
              <div class="screens slider-one">

                <figure>
                  <ul class="slider-one-imgs">
                    <li class="slider-one-img">
                      <img src="http://tylerstober.com/assets/img/cardiact/active/one.jpg" alt="CardiAct Alert Screen">
                    </li>
                    <li class="slider-one-img">
                      <img src="http://tylerstober.com/assets/img/cardiact/active/two.jpg" alt="CardiAct Map Screen">
                    </li>
                    <li class="slider-one-img">
                      <img src="http://tylerstober.com/assets/img/cardiact/active/three.jpg" alt="CardiAct Map Screen">
                    </li>
                    <li class="slider-one-img">
                      <img src="http://tylerstober.com/assets/img/cardiact/active/four.jpg" alt="CardiAct Map Confirmation">
                    </li>
                    <li class="slider-one-img">
                      <img src="http://tylerstober.com/assets/img/cardiact/active/five.jpg" alt="CardiAct Chat Screen">
                    </li>
                    <li class="slider-one-img">
                      <img src="http://tylerstober.com/assets/img/cardiact/active/six.jpg" alt="CardiAct Status Screen">
                    </li>
                    <li class="slider-one-img">
                      <img src="http://tylerstober.com/assets/img/cardiact/active/seven.jpg" alt="CardiAct Profile Screen">
                    </li>
                  </ul>
                </figure>
                
                <ul class="slider-one-imgs">
                  <li class="slider-one-background-img">
                    <img src="http://tylerstober.com/assets/img/cardiact/active/one.jpg" alt="CardiAct Alert Screen">
                  </li>
                  <li class="slider-one-background-img">
                    <img src="http://tylerstober.com/assets/img/cardiact/active/two.jpg" alt="CardiAct Map Screen">
                  </li>
                  <li class="slider-one-background-img">
                    <img src="http://tylerstober.com/assets/img/cardiact/active/three.jpg" alt="CardiAct Map Screen">
                  </li>
                  <li class="slider-one-background-img">
                    <img src="http://tylerstober.com/assets/img/cardiact/active/four.jpg" alt="CardiAct Map Confirmation">
                  </li>
                  <li class="slider-one-background-img">
                    <img src="http://tylerstober.com/assets/img/cardiact/active/five.jpg" alt="CardiAct Chat Screen">
                  </li>
                  <li class="slider-one-background-img">
                    <img src="http://tylerstober.com/assets/img/cardiact/active/six.jpg" alt="CardiAct Status Screen">
                  </li>
                  <li class="slider-one-background-img">
                    <img src="http://tylerstober.com/assets/img/cardiact/active/seven.jpg" alt="CardiAct Profile Screen">
                  </li>
                </ul>

              </div> 
            </div>
            <div class="bottom"><div></div></div>
          </div>
        </figure>

        <div class="pagination pag-1">
          <ul>
            <li class="">1</li>
            <li class="">2</li>
            <li class="">3</li>
            <li class="pag-1-selected">4</li>
            <li class="">5</li>
            <li class="">6</li>
            <li class="">7</li>
          </ul>
        </div> 
      </div>

      <figcaption> 
        <ul class="first-display-descp">
          <li class="">
            <h3>Emergency Mode</h3>
            <p>
              CardiAct displays emergency mode when a victim requests help, or a dangerous heart rate is detected with a heart monitor. The CPR Responder(s) will be sent an alert and provide the victims location along with other vital information needed to help save the victim’s life.
            </p>
          </li>

          <li class="">
            <h3>Map Screen</h3>
            <p>
              Once the CPR Responder clicks "I Can Help", the app launches - showing the victims locations and the best direction to reach them. It also shows the nearest AED, which is a device needed to shock the heart back to normal electrical function.
            </p>
          </li>

          <li class="">
            <h3>Unified Response</h3>
            <p>
              Every responder and emergency contacts can see the locations of other responders. When a responder reaches the victim, they can confirm they are with them, allowing other responders to play a supportive role, such as getting the AED.
            </p>
          </li>

          <li class="first-selected">
            <h3>Unified Response</h3>
            <p>
              Once a responder reaches the victim, they can confirm if they have an AED or not, allowing the other responders to retrieve one if need be.
            </p>
          </li>

          <li class="">
            <h3>Chat Screen</h3>
            <p>
              Responders and emergency contacts have the ability to communicate in a chat room setting, providing transparency between all parties.
            </p>
          </li>

          <li class="">
            <h3>Status Screen</h3>
            <p>
              Here, users can view the victims current heart rate and the duration of distress. This is important information because a victim can start to experience brain damage in 4-6 minutes.
            </p>
          </li>

          <li class="">
            <h3>Victim Info</h3>
            <p>
              When clicking on the "Victim Button" on the Status Screen, the user can view more about the victim. This is important information we found during User Testing. Any medical information is important information to responders.
            </p>
          </li>
        </ul>
      </figcaption>   

    </div>
  </section>
</template>

<script>

	import { TweenMax } from "gsap";
  import gallery from '@/assets/js/gallery';
  import compare from '@/assets/js/compare';

  export default {
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
				gallery();
        compare();
			}, 20)
    },
    methods: {
    },
    components: {
    }
  }
</script>

<style scoped lang="scss">
	@import "../assets/scss/gallery.scss";
  .deliverables {
    position: relative;
    overflow: hidden;
    user-select: none;
  }
  .slider-one-imgs {
    font-size: 0;
  }
</style>
