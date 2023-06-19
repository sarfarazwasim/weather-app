<template>
  <div class="upcoming-weather">
    <div class="header display-flex jc-between m-bottom-0">
      <div class="font-bold">Forecast</div>
      <CalendarOutline />
    </div>
    <div
      v-for="item in weekData"
      :key="item.dt"
      class="daily-wrapper display-flex jc-between m-top-16"
    >
      <div class="display-flex align-center jc-start">
        <div>
          <div>{{ $filters.dateFormat(item.dt * 1000, "MMM D") }}</div>
          <div class="font-12">
            {{ $filters.capitalize(item.weather[0].description) }}
          </div>
        </div>
      </div>
      <div class="display-flex align-center jc-center">
        <img :src="getIconPath(item.weather[0].icon)" alt="" class="icon" />
      </div>
      <div class="display-flex align-center jc-end">
        <div>
          <div>
            {{ Math.round(item.temp.max) }}°<span class="font-14"></span>
          </div>
          <div class="font-12">
            {{ Math.round(item.temp.min) }}°<span class="font-10"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/upcoming-weather.js"></script>

<style lang="scss" scoped>
.upcoming-weather {
  color: white;
  padding: 16px 16px;
  margin: 24px auto;
  background: #082353b5;
  border-radius: 20px;
  text-align: start;
  .daily-wrapper {
    gap: 1%;
    display: grid;
    grid-template-columns: 3fr 2fr 2fr;
  }
  .rain-drop {
    height: 20px;
    width: 24px;
  }
  .humidity {
    height: 20px;
    width: 14px;
  }
  .icon {
    height: 24px;
    width: 24px;
  }
}
</style>
