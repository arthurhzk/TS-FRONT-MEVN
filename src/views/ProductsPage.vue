<template>
  <section>
    <the-section></the-section>
    <the-card v-for="item in items" :product="item" :key="item._id"></the-card>
  </section>
</template>

<script lang="ts">
import TheSection from "@/components/TheSection.vue";
import TheCard from "@/components/TheCard.vue";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default {
  components: {
    TheSection,
    TheCard,
  },
  data() {
    return {
      items: [] as Product[],
    };
  },
  methods: {
    getApiData() {
      const apiUrl = "http://localhost:8000/api/products/";
      axios.get(apiUrl).then((response: any) => {
        this.items = response.data;
        console.log(this.items);
      });
    },
  },
  mounted() {
    this.getApiData();
  },
};
</script>
