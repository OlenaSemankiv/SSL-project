<template>
  <div class="block2" id="block2">
    <img src="../assets/background/Group 119.png" alt="" />
    <div class="background">
      <p>Choose your SSL Certificate type:</p>
    </div>
    <div class="cards">
      <div class="card1">
        <p class="title">Domain Validated SSL</p>
        <img
          class="lock"
          src="../assets/images/Frame 22.png"
          alt=""
          width="330px"
          height="269px"
        />
        <img class="text" src="../assets/images/Group 35.png" alt="" />
        <p class="price">from {{ price }}</p>
        <a href="http://localhost:8080/SSL"> <button>Learn More</button></a>
      </div>
      <div class="card2">
        <p class="title">Wildcard SSL</p>
        <img
          class="lock"
          src="../assets/images/Frame 22 (1).png"
          alt=""
          width="330px"
          height="269px"
        />
        <img class="text" src="../assets/images/Group 36.png" alt="" />
        <p class="price2">from {{ price2 }}</p>
        <button><a href=""></a> Learn More</button>
      </div>
      <div class="card3">
        <p class="title">Multi-Domain SSL</p>
        <img
          class="lock2"
          src="../assets/images/img2 2.png"
          alt=""
          width="330px"
          height="200px"
        />
        <img class="text2" src="../assets/images/Group 37.png" alt="" />
        <p class="price3">from {{ price3 }}</p>
        <button><a href=""></a> Learn More</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainPageS2",
  data: () => {
    return {
      price: "$29.95/year",
      price2: "$95/year",
      price3: "$65/year",
    };
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
.block2 {
  display: flex;
  flex-direction: column;
  .background {
    p {
      font-weight: 700;
      font-size: 34px;
      font-style: normal;
      color: rgba(255, 255, 255, 1);
      font-family: "Inter", sans-serif;
      margin-top: -25%;
    }
  }
  .cards {
    display: flex;
    flex-direction: row;
    position: absolute;
    transform: translate(60%, 35%);
    :hover {
      transition: 1s;
      transform: scale(1.1);
    }
    .card1 {
      display: flex;
      flex-direction: column;
      box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
        0px 18px 88px -4px rgba(24, 39, 75, 0.14);
      background-color: rgb(253, 249, 243);
      border-radius: 10px;
      width: 100%;
    }
    .card2 {
      display: flex;
      flex-direction: column;
      box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
        0px 18px 88px -4px rgba(24, 39, 75, 0.14);
      background-color: rgb(253, 249, 243);
      margin: 0 2%;
      border-radius: 10px;
      width: 100%;
    }
    .card3 {
      display: flex;
      flex-direction: column;
      box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
        0px 18px 88px -4px rgba(24, 39, 75, 0.14);
      background-color: rgb(253, 249, 243);
      border-radius: 10px;
      width: 100%;
    }
    .title {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      text-align: center;
      color: rgba(36, 40, 53, 1);
      margin: 15% 0;
    }
    .price {
      font-family: "Inter", sans-serif;
      color: black;
      font-weight: bold;
      margin-top: 25%;
      margin-bottom: 10%;
    }
    .price2 {
      font-family: "Inter", sans-serif;
      color: black;
      font-weight: bold;
      margin-top: 16%;
      margin-bottom: 10%;
    }
    .price3 {
      font-family: "Inter", sans-serif;
      color: black;
      font-weight: bold;
      margin-top: 18%;
      margin-bottom: 10%;
    }
    .lock {
      margin-top: -10%;
    }
    .lock2 {
      width: 150px;
      margin: 10% auto;
    }

    .text {
      margin-top: -13%;
      margin-left: 10%;
    }
    .text2 {
      margin-left: 10%;
      margin-top: 5%;
    }

    button {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: #ffffff;
      background: linear-gradient(90deg, #8dcb8b 0%, #63a361 100%);
      border-radius: 10px;
      width: 150px;
      height: 48px;
      align-self: center;
      margin-bottom: 15%;
    }
  }
}
// @media screen and (max-width: 1750px) {
//   .block2 .cards {
//     // top: 20%;
//   }
// }
</style>
