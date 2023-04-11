<template>
  <ul class="contacts">
    <li v-for="item in contactItems" :key="item.item">
      <a href="#">
        {{ item.item }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['contactItems']
}
</script>

<style lang="scss">
.contacts {
  display: flex;

  li {
    &:nth-of-type(n+2) {
      margin-left: 75px;
    }

    &:nth-of-type(1):before {
      content: '\e801';
      font-family: icons;
      margin-right: 9px;
    }

    &:nth-of-type(2):before {
      content: '\e802';
      font-family: icons;
      margin-right: 9px;
    }
  }
}

@media (max-width: 1185px) {
  .contacts {
    width: 100%;
    flex-direction: column;
    text-align: center;

    li {
      margin-top: 15px;

      &:nth-of-type(n+2) {
        margin-left: 0;
      }

      &:nth-of-type(n+2) {
        margin-left: 0;
      }

      &:nth-of-type(1):before {
        content: '\e801';
        font-family: icons;
        margin-right: 9px;
      }

      &:nth-of-type(2):before {
        content: '\e802';
        font-family: icons;
        margin-right: 9px;
      }
    }
  }
}
</style>