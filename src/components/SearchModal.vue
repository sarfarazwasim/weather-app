<template>
  <div class="search-modal" :class="isModalVisible ? '' : 'hidden'">
    <div class="container">
      <div class="input_wrapper">
        <SearchIcon />
        <input
          type="text"
          :value="searchText"
          @input="(evt) => (searchText = evt.target.value)"
          placeholder="Search for city or place name"
        />
        <CircularCloseIcon v-if="searchText.trim()" @click="clearSearch" />
      </div>
      <div class="results">
        <div v-if="debounceTimer" class="display-flex jc-center m-top-24">
          <div class="loader">
            <div class="loader-ring" />
          </div>
        </div>
        <template v-else>
          <div v-for="item in searchResults" :key="item" class="card">
            <div class="item" @click="selectCity(item)">
              <div>{{ item.name }},</div>
              <div>{{ item.sys.country }}</div>
            </div>
            <div class="fade-line" />
          </div>
          <div
            v-if="!searchResults.length && searchText.trim().length > 2"
            class="empty-list"
          >
            <div>
              No results found
              <div>Try another name</div>
            </div>
          </div>
          <div
            v-else-if="
              searchText.trim().length < 3 && searchText.trim().length > 0
            "
            class="empty-list"
          >
            Enter minimum 3 letters
          </div>
          <div
            v-else-if="!searchResults.length && !searchText.trim().length"
            class="empty-list"
          >
            Enter city or place name to view results
          </div>
        </template>
      </div>
      <div class="close-modal">
        <CloseIcon @click="closeModal" />
      </div>
    </div>
  </div>
</template>

<script src="./js/search-modal.js"></script>

<style lang="scss" scoped>
.search-modal {
  transition: all 0.5s linear;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  color: white;
  top: 0;
  .container {
    transition: all 0.5s linear;
    position: absolute;
    top: 20%;
    color: white;
    padding: 16px 16px;
    background: #082353f2;
    border-radius: 16px;
    width: 300px;
    min-height: 260px;
    .input_wrapper {
      width: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      border: none;
      background: #5c56878a;
      outline: none;
      border-radius: 4px;
      box-sizing: border-box;
      box-shadow: 0 0.125em 0.3125em rgb(131 134 173);
      input {
        background: transparent;
        border: none;
        width: 80%;
        color: white;
        height: 24px;
        font-size: 16px;
        padding: 4px 10px 4px 2px;
      }
      .close-circle-outline-icon {
        margin-right: 4px;
        display: flex;
        color: #dcdcdc;
        cursor: pointer;
      }
      .magnify-icon {
        margin-left: 4px;
        display: flex;
        color: #757575;
        cursor: pointer;
      }
      input:focus {
        outline: none;
      }
    }
    .results {
      margin-top: 8px;
      .loader {
        height: 36px;
        width: 36px;
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
      .item {
        display: flex;
        gap: 4px;
        padding: 10px 4px;
      }
      .fade-line {
        height: 1px;
        background-color: transparent;
        width: 100%;
        margin: 0 auto;
        border-radius: 8px;
        background-image: -webkit-linear-gradient(
          left,
          transparent 2%,
          white 50%,
          transparent 98%
        );
        background-image: -webkit-gradient(
          linear,
          left bottom,
          right bottom,
          color-stop(0.5, white),
          color-stop(0.98, transparent)
        );
      }
      .empty-list {
        height: 150px;
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .close-modal {
      position: absolute;
      top: -32px;
      right: 10px;
    }
  }
}
.search-modal.hidden {
  backdrop-filter: blur(0px);
  animation: hide-it 0.5s 0.5s linear forwards;
  @keyframes hide-it {
    from {
      z-index: 1;
    }
    to {
      z-index: 0;
    }
  }
  .container {
    top: -35%;
  }
}
</style>
