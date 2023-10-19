<template>
  <div class="delivery-form">
    <h2>Delivery Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <textarea id="address" v-model="formData.address" required></textarea>
      </div>

      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="formData.phone" />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
      </div>

      <div class="form-group submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {

      // Handle form submission, e.g., send data to a server, save to a database.
      console.log("Form submitted:", this.formData);
      this.navigateToDelivery()
    },
    navigateToDelivery() {
      this.$router.push('/delivery'); // Use $router to navigate to the '/delivery' route.
    },
  },
};
</script>

<style scoped>
.delivery-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.submit{
  display: flex;
  justify-content: center;
}

h2 {
    margin-bottom: 8px;
    font-size: 24px;
  }

label {
  display: block;
}

input[type="text"],
input[type="tel"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  background-color: #12b488;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

button:hover {
  background-color: #139b76;
}
</style>
