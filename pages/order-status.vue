<template>
  <div class="status-container">
    <h2>Your order status</h2>
    <div class="status-content">
      <p class="status-message">{{ currentStatus.message }}</p>
      <img
        :src="currentStatus.imagePath"
        alt="Status Image"
        class="status-image"
        v-if="currentStatus.imagePath"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statuses: [
        {
          message: 'Your order is being prepared',
          imagePath:
            'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM3ZnI0MTR1YzNlenl0NDU5cnRkNHNha2ZnNGxzbXNrNzl4ODZweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z8blEZs9alp16/giphy.gif',
        },
        {
          message: 'Your order is being delivered',
          imagePath:
            'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG5ncjk5azVvbjhseXp4ZHRwZTV6MjJ4bnQ5bm1ncXZvejZ0Ym1meiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VzkCRACE2PRdoJRx9c/giphy.gif',
        },
        {
          message: 'Your order is here!',
          imagePath:
            'https://media2.giphy.com/media/12uXi1GXBibALC/giphy.gif?cid=ecf05e474c4xbhl6xqikvbow44jov5mdq0xpaas7k8qp5bx1&ep=v1_gifs_related&rid=giphy.gif&ct=g',
        },
      ],
      currentStatusIndex: 0,
    };
  },
  mounted() {
    const statusChangeInterval = setInterval(() => {
      if (this.currentStatusIndex < this.statuses.length - 1) {
        this.currentStatusIndex++;
      } else {
        clearInterval(statusChangeInterval);
      }
    }, 5000);
  },
  computed: {
    currentStatus() {
      return this.statuses[this.currentStatusIndex];
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

.status-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.status-content {
  text-align: center;
}

.status-message {
  font-size: 24px;
  margin: 20px 0;
}

.status-image {
  max-width: 100%;
  max-height: 300px;
}
</style>
