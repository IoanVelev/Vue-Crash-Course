const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2345, color: "blue" },
        { id: 2346, color: "green" },
      ],
    };
  },
});
