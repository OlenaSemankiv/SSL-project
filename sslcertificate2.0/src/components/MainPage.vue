<template>

  <div class="main_page">
   <MainPageS1/>
   <MainPageS2/>
   <MainPageS3/>
   <MainPageS4/>
   <Foot/>
  </div>
 
</template>

<script>
import MainPageS1 from './MainPageS1';
import MainPageS2 from './MainPageS2';
import MainPageS3 from './MainPageS3';
import MainPageS4 from './MainPageS4';
import Foot from './Foot';
export default {
  name: "MainPage",
  components: {
    MainPageS1,
    MainPageS2,
    MainPageS3,
    MainPageS4,
    Foot,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
