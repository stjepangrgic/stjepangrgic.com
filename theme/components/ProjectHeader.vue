<template>
  <header class="header">
    <h1 class="title">
      {{title}}
      <br/>
      <span class="subtitle" :style="{color: accentColor}">
        {{subtitle}}
      </span>
    </h1>
    <p>{{description}}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'description', 'accentColor']
}
</script>

<style scoped>
  .header {
    /* background-color: #faf; */
  }
  .title {
    /* background-color: #afa; */
  }
  .subtitle {
    /* background-color: #ffa; */
    font-weight: 500;
  }
</style>
