<template>
  <span class="arrow">
    <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.083 11.34L6.747 9.97l3.33-3.279H.498V4.767h9.58l-3.33-3.288L8.083.11l5.58 5.616z" fill-rule="nonzero"/>
    </svg>
  </span>
</template>

<style lang="stylus">
.arrow svg {
  margin-left 0px
  width 14px
  height 12px
  fill var(--link-color)
  opacity 0
  transition transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
}
</style>