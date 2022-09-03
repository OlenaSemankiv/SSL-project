<template>
  <div class="block3" id="block3">
    <div class="title">
      <p>Why Choose Us</p>
    </div>
    <div class="choose_us">
      <div class="choose1">
        <img src="../assets/images/Component 2.png" alt="" />
      </div>
      <div class="choose2">
        <img src="../assets/images/Component 3.png" alt="" />
      </div>
      <div class="choose3">
        <img src="../assets/images/Component 4.png" alt="" />
      </div>
      <div class="choose4">
        <img src="../assets/images/Component 5.png" alt="" />
      </div>
      <div class="choose5">
        <img src="../assets/images/Component 6.png" alt="" />
      </div>
      <div class="choose6">
        <img src="../assets/images/Component 7.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
.block3 {
  width: 60%;
  margin: 30% auto 10%;
  .title {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    color: #242835;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 10%;
  }
  .choose_us {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    :hover {
      transform: translateY(-20px);
    }

    .choose1 {
      grid-area: 1 / 1 / 2 / 2;
      :hover {
        transition-duration: 0.7s;
      }
    }
    .choose2 {
      grid-area: 1 / 2 / 2 / 3;
      :hover {
        transition-duration: 1.5s;
      }
    }
    .choose3 {
      grid-area: 1 / 3 / 2 / 4;
      :hover {
        transition-duration: 3.5s;
      }
    }
    .choose4 {
      grid-area: 2 / 1 / 3 / 2;
      :hover {
        transition-duration: 0.7s;
      }
    }
    .choose5 {
      grid-area: 2 / 2 / 3 / 3;
      :hover {
        transition-duration: 1.5s;
      }
    }
    .choose6 {
      grid-area: 2 / 3 / 3 / 4;
      :hover {
        transition-duration: 3.5s;
      }
    }
    img {
      width: 850px;
    }
  
  }
}
</style>
