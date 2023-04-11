<template>
  <div class="navbar">
    <ul class="nav footer_mobile">
      <li v-for="item in navItems" :key="item.item">
        <a href="#">
          {{ item.item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['navItems']
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
}

.navbar {
  flex-grow: 1;
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
  .footer_mobile {
    flex-direction: column;
    text-align: center;

    li {
      &:first-child {
        margin-left: 0;
      }

      &:nth-of-type(n+2) {
        margin-top: 15px;
      }
    }
  }


}
</style>
