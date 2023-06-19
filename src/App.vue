<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

body {
  margin: 0;
  font-family: Impact;
}
$directions: "top", "left", "bottom", "right";
$sizes: 2, 4, 6, 8, 12, 16, 20, 24, 32, 64;

@each $direction in $directions {
  @each $size in $sizes {
    .p-#{$direction}-#{$size} {
      padding-#{$direction}: $size + px;
    }
    .m-#{$direction}-#{$size} {
      margin-#{$direction}: $size + px;
    }
  }
}

@each $size in $sizes {
  .margin-#{$size} {
    margin: $size + px;
  }
  .padding-#{$size} {
    padding: $size + px;
  }
}
.font-24 {
  font-size: 24px;
}
.font-10 {
  font-size: 10px;
}
.font-16 {
  font-size: 16px;
}
.font-14 {
  font-size: 14px;
}
.font-12 {
  font-size: 12px;
}
.font-18 {
  font-size: 18px;
}
.font-bold {
  font-weight: bold;
}
.display-flex {
  display: flex;
}
.jc-between {
  justify-content: space-between;
}
.jc-evenly {
  justify-content: space-evenly;
}
.jc-end {
  justify-content: flex-end;
}
.jc-start {
  justify-content: start;
}
.jc-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
.pointer {
  cursor: pointer;
}
.margin-auto {
  margin: auto;
}
</style>
