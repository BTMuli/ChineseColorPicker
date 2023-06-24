<script lang="ts">
  // data
  import CCPD from "./data";
  // components
  import ChineseColorItem from "./components/ChineseColorItem.svelte";

  const colorData: CCP.ChineseColor.Item[] = CCPD.Chinese;

  let bg: string = colorData[0].hex;

  function selectColor(color: CCP.ChineseColor.Item) {
    bg = color.hex;
    // 复制到剪切板
    navigator.clipboard.writeText(color.hex);
  }
</script>

<main class="app" style="background: {bg};">
  <div class="container">
    {#each colorData as color}
      <ChineseColorItem colorItem="{color}" transferColor="{selectColor}" />
    {/each}
  </div>
  <div class="title">
    <h1>{bg}</h1>
    <img src="../src/assets/icon/icon.png" alt="icon" />
    <h1>Chinese Color Palette</h1>
  </div>
</main>

<style>
  .app {
    display: flex;
    max-height: 100vh;
    overflow-y: auto;
  }

  .title {
    display: flex;
    width: 10%;
    background: rgba(0, 0, 0, 0.5);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title img {
    width: 100%;
  }

  .title h1 {
    writing-mode: vertical-rl;
    font-size: 20px;
    color: #fff;
    text-shadow: 0 0 10px #000;
    padding: 0;
    margin: 10px 0 0 10px;
  }

  .container {
    width: 90%;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    padding: 10px;
    gap: 10px;
  }
</style>
