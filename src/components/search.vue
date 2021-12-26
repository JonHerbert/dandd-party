<template></template>

<script>
import firebase from "firebase";
import { onMounted, reactive } from "vue";
export default {
  setup() {
    const products = reactive([]);
    onMounted(async () => {
      try {
        const productsSnap = await firebase
          .firestore()
          .collection("products")
          .get();
        productsSnap.forEach((doc) => {
          products.push(doc.data());
        });
      } catch (e) {
        console.log("Error Loading Products");
      }
    });
    return { products };
  },
};
</script>

<style>
</style>