<script lang="ts">
  export let colorItem: CCP.ChineseColor.Item;

  // eslint-disable-next-line
  export let transferColor = (color: CCP.ChineseColor.Item) => {};

  function selectColor() {
    transferColor(colorItem);
  }
</script>

<div
  class="top-line"
  style="
  background: {colorItem.hex};"
  on:click="{() => selectColor()}"
></div>

<style>
  .top-line {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
</style>
