<template>
  <div class="block">
    <div class="days">
      <p>
        <img src="@/assets/images/XMLID_1364_.png" alt="" />30 Days money-back.
        Guarantee!
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
.block {
  display: flex;
  flex-direction: row;

  .days {
    background-image: url("../assets/background/Rectangle 5.png");
    margin: 0 auto;
    width: 50%;
    border-radius: 10px;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 42px;
      letter-spacing: -0.01em;
      color: #ffffff;
      img {
        padding: 0 5%;
      }
    }
  }
}
</style>
