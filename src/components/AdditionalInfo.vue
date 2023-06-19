<template>
  <div class="additional-info display-flex jc-between">
    <div class="display-flex align-center">
      <img src="@/assets/icons/rain-drop.svg" alt="" class="rain-drop" />
      <div>{{ rainChance }}%</div>
    </div>
    <div class="display-flex align-center">
      <img src="@/assets/icons/humidity.svg" alt="" class="humidity" />
      <div>{{ humidity }}%</div>
    </div>
    <div class="display-flex align-center">
      <img src="@/assets/icons/wind.svg" alt="" class="wind-icon m-right-6" />
      <div>{{ windSpeed }} <span class="font-14">Km/h</span></div>
    </div>
  </div>
</template>

<script src="./js/additional-info.js"></script>

<style lang="scss" scoped>
.additional-info {
  color: white;
  padding: 16px 16px;
  margin: 0px auto 24px auto;
  background: #082353b5;
  border-radius: 20px;
  .rain-drop {
    height: 20px;
    width: 24px;
  }
  .humidity {
    height: 20px;
    width: 14px;
  }
  .wind-icon {
    height: 18px;
    width: 24px;
  }
}
</style>
