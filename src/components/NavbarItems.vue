<template>
  <div class="navbar navbar_mobile">
    <ul class="nav" :class="{ nav_active: ismobileShow }">
      <li v-for="item in navItems" :key="item.item">
        <a href="#">
          {{ item.item }}
        </a>
      </li>
    </ul>

    <div class="ham" @click="mobileShow">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navItems'],

  data() {
    return {
      ismobileShow: false
    }
  },

  methods: {
    mobileShow() {
      this.ismobileShow = !this.ismobileShow;
    }
  }
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
}

.navbar {
  flex-grow: 1;

  .ham {
    display: none;
    width: 20px;

    span {
      display: block;
      width: 100%;

      border-bottom: 2px solid $color-search;

      &:nth-of-type(n+2) {
        margin-top: 5px;
      }
    }

  }
}

.nav {
  max-width: 540px;

  display: flex;
  justify-content: space-between;

  li:first-child {
    margin-left: 100px;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 1185px) {
  .navbar_mobile {

    .ham {
      display: block;

      span {

        &:nth-of-type(n+2) {
          margin-top: 5px;
        }
      }

    }

    .nav {
      position: absolute;
      top: 72px;
      left: -100%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 150px;

      box-sizing: border-box;
      padding: 15px;

      color: $white;
      background-color: rgba($color: $color-search, $alpha: 0.9);

      transition: all .6s;

      li {
        font-size: 18px;

        &:first-child {
          margin-left: 0;
        }

        &:nth-of-type(n+2) {
          margin-top: 15px;
        }
      }

      &_active {
        left: 0;
      }
    }
  }


}
</style>
