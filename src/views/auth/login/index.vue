<template>
  <div>
    <div>
        <img class="img-fluid" :src="banner" alt="Lion" />
    </div>
    <div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide ><img class="img-fluid" :src="banner" alt="Lion" /></swiper-slide>
        <swiper-slide><img class="img-fluid" :src="banner" alt="Lion" /></swiper-slide>
        <swiper-slide><img class="img-fluid" :src="banner" alt="Lion" /></swiper-slide>
        <swiper-slide><img class="img-fluid" :src="banner" alt="Lion" /></swiper-slide>
        <swiper-slide><img class="img-fluid" :src="banner" alt="Lion" /></swiper-slide>
        <swiper-slide><img class="img-fluid" :src="banner" alt="Lion" /></swiper-slide>
        <swiper-slide><img class="img-fluid" :src="banner" alt="Lion" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  components: {
  },
  data: function () {
    return {
      banner: 'https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fa0.att.hudong.com%252F52%252F62%252F31300542679117141195629117826.jpg%26refer%3Dhttp%253A%252F%252Fa0.att.hudong.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1617004385%26t%3D8aed335419fb2bd6229dfdd7dea1d6f0&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFuXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D1603365312%2C3218205429%26fm%3D26%26gp%3D0.jpg',
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
}
</script>
<style lang="scss" scoped>

</style>
