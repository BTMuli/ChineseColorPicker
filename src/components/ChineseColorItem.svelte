<script lang="ts">
  export let colorItem: CCP.ChineseColor.Item;

  export let transferColor = (color: CCP.ChineseColor.Item) => {};

  function selectColor() {
    transferColor(colorItem);
  }
</script>

<div
  class="top-line"
  style="background: {colorItem.hex}"
  on:click="{() => selectColor()}"
></div>

<style>
  .top-line {
    width: 50px;
    height: 10px;
  }
</style>
