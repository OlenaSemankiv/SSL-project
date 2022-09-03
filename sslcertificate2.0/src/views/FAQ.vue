<template>
  <div class="block">
    <div class="title">FAQ</div>
    <div id="tab">
      <div class="list">
        <p class="number">01</p>
        <p class="text">Vivamus porttitor nunc at enim elementum varius.</p>
        <button @click="show = !show">+</button>
        <!-- <transition name="slide-fade">
          <p v-if="show">
            Nulla gravida sem urna, non gravida est maximus vel. Proin id
            scelerisque massa, eget posuere tellus. Nam gravida turpis non
            vulputate tempus. Mauris molestie pharetra turpis sit amet
            efficitur. Vestibulum quis scelerisque odio. Nam sed lectus maximus,
            semper enim eget, tristique neque. Proin fermentum bibendum auctor.
          </p>
        </transition> -->
      </div>
      <div class="list">
        <p class="number">02</p>
        <p class="text">Nullam accumsan non est id tempus.</p>
        <button @click="show = !show">+</button>
      </div>
      <div class="list">
        <p class="number">03</p>
        <p class="text">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          .
        </p>
        <button @click="show = !show">+</button>
      </div>
      <div class="list">
        <p class="number">04</p>
        <p class="text">Tum velit magna, in malesuada posuere cubilia curae.</p>
        <button @click="show = !show">+</button>
      </div>
      <div class="list">
        <p class="number">05</p>
        <p class="text">Cras malesuada sem nec tortor ultricies mattis.</p>
        <button @click="show = !show">+</button>
      </div>
    </div>

    <div class="foot">
      <Foot />
    </div>
  </div>
</template>

<script>
import Foot from "@/components/Foot";
// import Vue from "vue";
// window.Vue = Vue;

export default {
  name: "FAQ",
  components: {
    Foot,
  },
  //   data: () => {
  //     return {
  //       show: true,
  //     };
  //   },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.block {
  background: #f2f5fb;
  .title {
    padding-top: 10%;
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    color: #242835;
  }
  #tab {
    display: flex;
    flex-direction: column;
    margin: 5% 20% 20%;

    .list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .number {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 21px;
      color: #b5bfc6;
      margin-right: 7%;
    }
    .text {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 21px;
      color: #242835;
      margin-right: auto;
    }
    button {
      color: rgba(141, 203, 139, 1);
      font-size: 40px;
      font-weight: 600;
      background-color: transparent;
      border: none;
    }
    button:focus {
      transform: rotate(45deg);
      color: #352e24;
    }

    // .slide-fade-enter-active,
    // .slide-fade-leave-active {
    //   transition: opacity 0.5s ease;
    // }

    // .slide-fade-enter-from,
    // .slide-fade-leave-to {
    //   opacity: 0;
    // }
  }
}
</style>