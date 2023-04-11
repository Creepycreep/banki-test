<template>
  <div class="modal" :class="{ modal_active: isModalActive }">
    <div class="modal-window">
      <button class="btn-close" @click="close">&#215;</button>
      <img :src="card.painting" :alt="card.title">

      <div class="wrapper">

        <div class="modal-window__price">
          <h6 :class="{ discount: card.isDiscount }">{{ card.isDiscount }}</h6>
          <h3>{{ card.price }}</h3>

        </div>

        <h6 class="modal-window__caption">{{ card.description }}</h6>
      </div>
    </div>
    <div class="overlay">
    </div>
  </div>
</template>

<script>
export default {
  props: ['isModalActive', 'card'],

  methods: {
    close() {
      this.$emit('modalClose', { isModalActive: false })
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  box-sizing: border-box;
  padding: 20px 24px 24px 24px;

  min-height: calc(100% - 160px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal {
  display: none;

  &_active {
    display: block;
  }

  &-window {

    z-index: 100;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    box-sizing: border-box;
    max-width: 400px;
    min-width: 290px;
    background-color: $white;
    border: 1px solid $color-purchased;

    img {
      width: 100%;
    }

    &__price {
      margin-top: 20px;
      margin-bottom: 10px;


      h3 {
        font-size: 22px;
      }

      .discount {
        font-size: 16px;
        line-height: 100%;
      }
    }

    &__caption {
      text-align: justify;
    }
  }
}

.overlay {
  height: 1000%;
  width: 100%;

  z-index: 10;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.3);
}

.btn-close {
  position: absolute;
  right: 15px;
  top: 10px;

  background: none;
  border: none;

  color: $white;
  font-size: 30px;
  line-height: 100%;

  &:hover {
    color: $color-discount;
  }

}
</style>