<template>
  <div class="forma">
    <div class="we"><h1>We're here to help you</h1></div>
    <div class="contact">
      <div class="left" id="left">
        <div class="contact1">
          <p>General Questions</p>
          <a href="support@sslcertificate.co.nz"
            >support@sslcertificate.co.nz</a
          >
        </div>
        <div class="contact2">
          <p>Billing Enquiries</p>
          <a href="billing@sslcertificate.co.nz"
            >billing@sslcertificate.co.nz</a
          >
        </div>
      </div>
      <div class="right">
        <p>Send us a message:</p>
        <form action="#" class="form" method="post" id="form">
          <input
            class="name"
            type="text"
            name="name_surname"
            id="name_surname"
            placeholder="Name"
          />

          <input
            for="email"
            type="email"
            placeholder="Email"
            required
            v-model="email"
            @blur="validateEmail"
          />
          <span
            class="floating-placeholder"
            v-if="msg.email"
            @blur="validateEmail"
            >{{ msg.email }}</span
          >
          <input class="subject" type="text" placeholder="Subject" />
          <input class="message" type="text" placeholder="Message" />
          <button type="submit" class="submit" id="validate">Send</button>
        </form>
      </div>
    </div>
    <div class="foot">
      <Foot />
    </div>
  </div>
</template>
<script>
import Foot from '@/components/Foot';
export default {
   name: "Contact",
  components: {
        Foot,
  },
  data() {
    return {
      showModal: false,
      email: "",
      msg: [],
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (/^\w+((\.-)?\w+)*@\w+((\.-)?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "email was entered incorrectly";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.forma {
  
  .we {
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 70px;
      color: #242835;
      padding-top: 10%;
      margin-right: 40%;
    }
  }
  .contact {
    display: flex;
    flex-direction: row;
    margin: 5% 15%;
    .left {
      display: flex;
      flex-direction: column;
      margin-right: 10%;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 24px;
        color: #242835;
        text-align: left;
      }
      a {
        text-decoration: none;
        font-family: "Inter";
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 24px;
        color: #242835;
        text-align: left;
        margin-right: 75%;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      p {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        color: #242835;
        text-align: left;
      }
      form {
        display: flex;
        flex-direction: column;
        input {
          width: 670px;
          height: 56px;
          margin-bottom: 2%;
          border-radius: 5px;
          border-color: rgba(189, 189, 189, 1);
        }
        span {
          color: red;
          text-align: left;
        }
        .submit {
          width: 233px;
          height: 56px;
          filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.08))
            drop-shadow(0px 0px 30px rgba(21, 42, 56, 0.1));
          border-radius: 10px;
          font-family: "Inter";
          font-size: 19px;
          color: #ffffff;
          cursor: pointer;
          background: #8dcb8b;
          margin-top: 5%;
          margin-left: 50%;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>