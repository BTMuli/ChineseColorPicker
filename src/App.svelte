<script lang="ts">
  import CCPD from "./data";

  const colorData = CCPD.Chinese;

  let bg = colorData[0].hex;

  function selectColor(color) {
    bg = color.hex;
    // 复制到剪切板
    navigator.clipboard.writeText(color.hex);
  }
</script>

<main class="app" style="background: {bg};">
  <div class="container">
    {#each colorData as color}
      <div class="top-line" style="background: {color.hex}" on:click={()=>selectColor(color)}>

      </div>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    padding: 10px;
    gap: 10px;
}

.top-line {
    width: 50px;
    height: 10px;
}
</style>
