<script lang="ts">
  // data
  import CCPD from "./data";
  // components
  import GridItem from "./components/ChineseColor/GridItem.svelte";
  import SelectItem from "./components/ChineseColor/SelectItem.svelte";

  let colorData: CCP.ChineseColor.Item[] = CCPD.Chinese;
  // 取后面22个
  const lastColors = CCPD.Chinese.slice(-7);
  // 剩余的
  colorData = colorData.slice(0, -7);

  let selectedColor: CCP.ChineseColor.Item = {
    CMYK: [0, 0, 0, 0],
    RGB: [0, 0, 0],
    hex: "#d6d6d6",
    name: "中国色",
    pinyin: "zhong guo se"
  };

  let isCopy = false;

  function selectColor(color: CCP.ChineseColor.Item) {
    if (selectedColor === color) {
      // 复制到剪切板
      navigator.clipboard.writeText(color.hex);
      isCopy = true;
      setTimeout(() => {
        isCopy = false;
      }, 1000);
    }
    selectedColor = color;
  }
</script>

<main class="app" style="background: {selectedColor.hex};">
  <div class="container">
    {#each colorData as color}
      <GridItem colorItem="{color}" transferColor="{selectColor}" />
    {/each}
  </div>
  <div class="container">
    {#each lastColors as color}
      <GridItem colorItem="{color}" transferColor="{selectColor}" />
    {/each}
  </div>
  <div class="selected">
    <SelectItem colorItem="{selectedColor}" showCopy="{isCopy}" />
  </div>
</main>

<style>
  .app {
    max-height: 100vh;
    overflow-y: auto;
    transition: background 0.5s ease-in-out;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 50px);
    grid-gap: 10px;
    margin: 10px auto;
    width: calc(100% - 20px);
  }

  .selected {
    position: fixed;
    bottom: 10px;
    right: 20px;
    width: 530px;
    border-radius: 5px;
    backdrop-filter: blur(20px);
    background: rgb(255 255 255/ 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
</style>
