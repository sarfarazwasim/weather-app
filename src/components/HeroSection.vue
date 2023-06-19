<template>
  <div class="hero-section">
    <div>
      {{ $filters.dateFormat(date, "ddd, MMM D") }},
      {{ $filters.dateFormat(date, "h:mm A") }}
      <div class="m-top-8">{{ $filters.capitalize(getDescription) }}</div>
    </div>
    <div class="main-wrapper display-flex jc-evenly align-center">
      <div class="image">
        <img :src="getIconPath" alt="" />
      </div>
      <div class="degree">
        <div class="min-max display-flex jc-evenly align-center font-14">
          <div><span class="font-18">↑</span>{{ maxTemp }}°</div>
          <div>{{ minTemp }}°<span class="font-18">↓</span></div>
        </div>
        <div class="main-temp m-top-8">
          <span>{{ currentTemp }} </span>
          <div>°C</div>
        </div>
        <div class="feels-like">Feels like {{ feelsLike }}°</div>
      </div>
    </div>
  </div>
</template>

<script src="./js/hero-section.js"></script>

<style lang="scss" scoped>
.hero-section {
  color: white;
  // padding: 16px 32px 16px 24px;
  // border: 1px solid green;
  .main-wrapper {
    width: 100%;
    .image {
      img {
        height: 170px;
        width: 150px;
      }
    }
    .degree {
      .min-map {
        width: 100%;
      }
      .main-temp {
        display: flex;
        span {
          font-size: 70px;
          line-height: 72px;
        }
        div {
          font-size: 36px;
          // margin-top: 12px;
        }
      }
      .feels-like {
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>
