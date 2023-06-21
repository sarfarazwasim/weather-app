<template>
  <div class="loader-screen">
    <div class="loader">
      <div class="loader-ring" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader-screen {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(6px);
  color: white;
  top: 0;
  .loader {
    height: 36px;
    width: 36px;
    margin-top: 50%;
    @keyframes spin {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    animation: spin 1s ease-in-out infinite;
    .loader-ring {
      width: 24px;
      height: 12px;
      background-color: transparent;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      border: 6px solid white;
      border-bottom: 0;
    }
  }
}
</style>
