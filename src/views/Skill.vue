<template>
  <div class="skill">
    <div class="city" @click="bindCity($event)">
      <span class="city">选择城市</span>
      <span class="city-block">{{city}}</span>
    </div>
  </div>
</template>

<script>
  import citySelector from 'lc-city-selector';

  export default {
    name: 'skill',
    data() {
      return {
        citySelector: null,
        city: ''
      }
    },
    created() {
      this.citySelector = new citySelector({
        confirm: (data) => {
          this.city = data;
        }
      });
    },
    methods: {
      bindCity(event) {
        this.citySelector.show();
      }
    }
  }
</script>

<style scoped lang="scss">
  .skill {
    overflow: hidden;
  }
  .city {
    margin: 50px auto;
    padding: 0 10px;
    border-radius: 8px;
    width: 300px;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
  }
</style>
