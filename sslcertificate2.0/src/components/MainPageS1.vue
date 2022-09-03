<template>
  <div class="block">
    <div class="info">
      <h1>Get SSL certificates in minutes</h1>
      <p>
        We offer SSL certificates from the world’s most trusted brands. Quick
        Issuance, Great prices. Get an SSL for your website today.
      </p>

      <a href="#block2"
        ><button class="choose">Choose SSL Certificate</button></a
      >
    </div>
    <div class="image">
      <img src="../assets/images/Group 1332.png" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
.block {
  display: flex;
  flex-direction: row;
  .info {
    margin: 10% 3% 10% 25%;
    display: flex;
    flex-direction: column;
    text-align: left;
    h1 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      color: #242835;
      line-height: 55px;
    }
    p {
      margin: 12% 0;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      color: #242835;
    }
    .choose {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.08))
        drop-shadow(0px 0px 30px rgba(21, 42, 56, 0.1));
      border-radius: 10px;
      width: 233px;
      height: 56px;
      background: #8dcb8b;
      color: rgba(255, 255, 255, 1);
    }
  }
  .image {
    margin: 10% 9% 10% 0;
    img {
      width: 1170px;
    }
  }
}
</style>
