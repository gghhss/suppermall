<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners"/>
    <HomeRecommendView :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView'

import {getHomeMultidata} from "network/home";
export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then((res) =>{
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}

</script>
<style scoped>
.home-nav{
  background-color: var(--color-text);
  color: #ffffff;
}
</style>