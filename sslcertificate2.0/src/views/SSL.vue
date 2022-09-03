<template>
  <div class="sslCert">
    <SSL1 />
    <SSL2 />
    <SSLtab />
    <MainPageS3/>
    <FAQ />
    
  </div>
</template>

<script>
import SSL1 from "@/components/SSL1";
import SSL2 from "@/components/SSL2";
import SSLtab from "@/components/SSLtab";
import MainPageS3 from '@/components/MainPageS3';
import FAQ from "./FAQ";

export default {
  name: "SSl",
  components: {
    SSL1,
    SSL2,
    SSLtab,
    MainPageS3,
    FAQ,
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

