<template>
  <div class="header">
    <div class="left-items">
      <div class="location display-flex" @click="toggleSearchModal(true)">
        <MapMarkerOutline class="display-flex" />
        <span class="m-top-2 m-left-4 m-right-12"
          >{{ getCurrentCity.name }}, {{ getCurrentCity.country }}</span
        >
        <ChevronDown height="12" class="display-flex down-icon" />
      </div>
    </div>
    <div class="right-items">
      <Refresh @click="updateWeather" class="display-flex" />
    </div>
    <Teleport to="#app">
      <SearchModal
        :is-modal-visible="showSearchModal"
        @closeSearchModal="toggleSearchModal(false)"
      />
    </Teleport>
  </div>
</template>

<script src="./js/header.js"></script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .left-items {
    display: flex;
    align-items: center;
    // background: white;
    padding: 6px 8px 4px 8px;
    border-radius: 8px;
    height: 32px;
    .down-icon {
      transform: scale(0.7);
    }
    .search-box {
      border: none;
      font-size: 16px;
    }
    .search-box:focus-visible {
      outline: none;
    }
  }
  .right-items {
    display: flex;
    font-size: 14px;
  }
}
</style>
