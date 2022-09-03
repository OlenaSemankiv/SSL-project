<template>
  <div>
    <div id="modal">
      <span class="close">x</span>
      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">User</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('firstName')">
                  <label for="first-name">First Name</label>
                  <md-input
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    v-model="form.firstName"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.firstName.required"
                    >The first name is required</span
                  >
                  <span
                    class="md-error"
                    v-else-if="!$v.form.firstName.minlength"
                    >Invalid first name</span
                  >
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('lastName')">
                  <label for="last-name">Last Name</label>
                  <md-input
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    v-model="form.lastName"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.lastName.required"
                    >The last name is required</span
                  >
                  <span class="md-error" v-else-if="!$v.form.lastName.minlength"
                    >Invalid last name</span
                  >
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('password')">
                  <label for="password">Password</label>
                  <md-input
                    id="password"
                    name="password"
                    autocomplete="password"
                    v-model="form.password"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.password.required"
                    >The password is required</span
                  >
                  <span class="md-error" v-else-if="!$v.form.password.maxlength"
                    >Invalid password</span
                  >
                </md-field>
              </div>
            </div>

            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                v-model="form.email"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.email.required"
                >The email is required</span
              >
              <span class="md-error" v-else-if="!$v.form.email.email"
                >Invalid email</span
              >
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending"
              >Create user</md-button
            >
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved"
          >The user {{ lastUser }} was saved with success!</md-snackbar
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "forma",
};
</script>
 <script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      firstName: null,
      lastName: null,

      password: null,
      email: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null,
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      password: {
        required,
        maxLength: maxLength(9),
      },

      email: {
        required,
        email,
      },
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.password = null;

      this.form.email = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0px;
}
.close {
  color: rgba(141, 203, 139, 1);
  font-size: 40px;
  font-weight: 600;
}
.md-card .md-title {
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  font-family: "Inter";
  font-weight: 600;
}
.md-button-content {
  position: relative;
  z-index: 2;
  color: mediumseagreen;
  font-family: "Inter";
  font-weight: 700;
}
</style>