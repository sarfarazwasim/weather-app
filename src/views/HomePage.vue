<template>
  <div class="homepage">
    <!-- latitude: {{ getLatitude }}
    longitude: {{ getLongitude }} -->
    <div class="contents">
      <Header @refresh-data="refreshWeatherData" />
      <div class="p-right-32 p-bottom-32 p-left-32">
        <HeroSection />
        <AdditionalInfo />
        <UpcomingWeather />
      </div>
    </div>
  </div>
</template>

<script src="./js/homepage.js" />

<style lang="scss" scoped>
.homepage {
  // background: darkslateblue;
  background: linear-gradient(
    167.44deg,
    #08244f 0%,
    #134cb5 47.38%,
    #0b42ab 100%
  );
  min-height: 100vh;
  width: 100vw;
  .contents {
    max-width: 650px;
    margin: auto;
  }
}
</style>
