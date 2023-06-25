<script lang="ts">
  export let colorItem: CCP.ChineseColor.Item;

  export let showCopy = false;

  export let showAbout = false;

  function copyColor() {
    showCopy = true;
    navigator.clipboard.writeText(colorItem.hex);
    setTimeout(() => {
      showCopy = false;
    }, 1000);
  }
</script>

<div class="si-box" on:click="{copyColor}">
  <div class="color-title">
    <span>{colorItem.name}</span>
    <span style="border-left: 6px solid {colorItem.hex};"
      >{colorItem.pinyin}</span
    >
    {#if showCopy}
      <span>Copied!</span>
    {/if}
  </div>
  <div class="color-desc">
    <div class="color-info">
      Hex：{colorItem.hex}
    </div>
    <!-- 避免点击传递到父元素 -->
    <div
      class="color-sign"
      on:click|stopPropagation="{() => (showAbout = true)}"
    >
      <img src="/src/assets/icon/icon.png" alt="icon" />
      <span>Chinese Color Picker</span>
    </div>
  </div>
</div>

<style lang="css">
  .si-box {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .color-title {
    padding: 10px;
  }

  .color-title :nth-child(1) {
    text-align: center;
    font-size: 40px;
    font-family: var(--font-title);
  }

  .color-title :nth-child(2) {
    text-align: left;
    padding-left: 10px;
    font-size: 20px;
    font-family: var(--font-text);
  }

  .color-title :nth-child(3) {
    color: green;
    font-family: var(--font-title);
  }

  .color-desc {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 10px;
    width: calc(100% - 20px);
    font-family: var(--font-title);
  }

  .color-info {
    width: 200px;
  }

  .color-sign {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
  }

  .color-sign img {
    width: 40px;
    height: 40px;
    transform: translateY(-5px);
  }

  .color-sign span {
    font-size: 20px;
  }
</style>
