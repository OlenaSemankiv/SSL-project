<template>
  <div class="foot">
    <div class="ssl">
      <ul>
        <li class="ss">SSL Certificates</li>
        <li><a href="">Domain Validated SSL</a></li>
        <li><a href="">Wildcard SSL</a></li>
        <li><a href="">Multi-Domain SSL</a></li>
      </ul>
    </div>
    <div class="menu">
      <ul>
        <li class="men">Menu</li>
        <li><a href="">FAQ</a></li>
        <li><a href="">Contact us</a></li>
        <li class="cli"><a href="">Client Login</a></li>
      </ul>
    </div>
    <div class="contact">
      <ul>
        <li class="con">Contact Us</li>
        <li>
          <a href="sales@sslcertificate.co.nz">sales@sslcertificate.co.nz</a>
        </li>
      </ul>
    </div>
    <div class="policy">
      <ul>
        <li><a href="">Terms of Service</a></li>
        <li><router-link to="/PrivatePol">Privacy Policy</router-link></li>
      </ul>
      <p>Copyright © 2021 sslcertificate</p>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.foot {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #242835;
  display: flex;
  flex-direction: row;
  border-radius: 7px;
  height: 300px;
  .ssl {
    display: flex;
    margin-top: 3%;
    margin-left: 8%;
    ul {
      text-align: left;
      .ss {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #ffffff;
      }
      li {
        list-style-type: none;
        padding: 7% 0;
        a {
          font-family: "Inter";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #ffffff;
          opacity: 0.5;
          text-decoration: none;
        }
      }
    }
  }
  .menu {
    display: flex;
    margin-top: 3%;
    margin-left: 8%;
    ul {
      text-align: left;
      .men {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #ffffff;
      }
      li {
        list-style-type: none;
        padding: 13% 0;
        a {
          font-family: "Inter";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #ffffff;
          opacity: 0.5;
          text-decoration: none;
        }
      }
        .cli a {
          font-family: "Inter";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #8dcb8b;
        }
    }
  }
  .contact {
    display: flex;
    margin-top: 3%;
    margin-left: 8%;
    ul {
      text-align: left;
      .con {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #ffffff;
      }
      li {
        list-style-type: none;
        padding: 7% 0;
        a {
          font-family: "Inter";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #ffffff;
          opacity: 0.5;
          text-decoration: none;
        }
      }
    }
  }
  .policy {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
    margin-left: 15%;
    ul {
      text-align: left;

      li {
        list-style-type: none;
        padding: 7% 0;
        a {
          font-family: "Inter";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #ffffff;
          opacity: 0.5;
        }
      }
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #ffffff;
      margin-top: 10%;
      margin-right: -33%;
    }
  }
}
</style>
