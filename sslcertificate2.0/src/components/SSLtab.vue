<template>
  <div class="block">
    <div class="title">Get your SSL certificate in 15 minutes</div>
    <div id="tab">
      <div class="main">
        <p>Name |</p>

        <p>Certificate Authority |</p>

        <p>Issuance |</p>

        <p>Validation Type |</p>

        <p>Domain |</p>

        <p>Price</p>
      </div>

      <div class="list">
        <p class="name">
          <img src="../assets/images/offer 1.png" alt="" />&#9660;EssentialSSL
        </p>
        <img class="certif1" src="../assets/images/image 5.png" alt="" />
        <p class="time">
          <img src="../assets/images/Frame.png" alt="" />15 min
        </p>
        <p class="type">Type</p>
        <p class="dom">Single Domain</p>
        <div>
          <p class="price">$27.85/year</p>
          <button>Order Now</button>
        </div>
      </div>

      <div class="list">
        <p class="name">
          <img src="../assets/images/offer 2.png" alt="" />&#9660;SL123
        </p>
        <img class="certif2" src="../assets/images/logos (1).png" alt="" />
        <p class="time">
          <img src="../assets/images/Frame.png" alt="" />15 min
        </p>
        <p class="type">Type</p>
        <p class="dom">Multiple Domains</p>
        <div>
          <p class="price">$29.95/year</p>
          <button>Order Now</button>
        </div>
      </div>

      <div class="list">
        <p class="name1">&#9660;RapidSSL Wildcard</p>
        <img class="certif3" src="../assets/images/logos (1).png" alt="" />
        <p class="time">
          <img src="../assets/images/Frame.png" alt="" />15 min
        </p>
        <p class="type">Type</p>
        <p class="dom3">Domain with Subdomains</p>
        <div>
          <p class="price">$69.95/year</p>
          <button>Order Now</button>
        </div>
      </div>

      <div class="list">
        <p class="name">
          <img src="../assets/images/offer 4.png" alt="" />&#9660;EV SSL
        </p>
        <img class="certif4" src="../assets/images/1.png" alt="" />
        <p class="time">
          <img src="../assets/images/Frame.png" alt="" />15 min
        </p>
        <p class="type">Type</p>
        <p class="dom">Multiple Domains</p>
        <div>
          <p class="price">$48.50/year</p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
    <div class="how">
      <img src="@/assets/images/Group 269 (1).png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
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
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 10%;

    .main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: #3c505f;
      border-radius: 10px;

      p {
        margin-right: auto;
        margin-left: 10%;
        font-family: "Inter";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #ffffff;
      }
    }
    .list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      background-color: #f2f5fb;
      height: 140px;
      margin-bottom: 2%;
      border-radius: 10px;
      p {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: #3c505f;
      }
      .name1 {
        margin-left: 8%;
      }
      .dom3 {
        width: 15%;
      }
      .price {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 21px;
        line-height: 31px;
        color: #5da35b;
      }
      .certif1 {
        width: 10%;
        height: 20px;
      }
      .certif2 {
        width: 10%;
        height: 20px;
        margin-left: 6%;
      }
      .certif3 {
        width: 10%;
        height: 20px;
        margin-left: -3%;
      }
      .certif4 {
        width: 10%;
        height: 20px;
        margin-left: 5%;
      }
      button {
        background: #8dcb8b;
        color: #ffffff;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        border-radius: 10px;
        width: 120px;
        height: 48px;
        margin-right: 10%;
      }
    }
  }
}
</style>