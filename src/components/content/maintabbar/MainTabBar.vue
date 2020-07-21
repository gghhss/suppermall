<template>
<div id="main-tab-bar">
    <TabBar>
    <TabBarItem path="/home" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/category-active.svg" alt />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/Shopcart" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart-active.svg" alt />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg" alt />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>