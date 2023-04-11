<template>
  <main class="container">
    <h1 class="main__header">Картины эпохи Возрождения</h1>

    <ul class="card-items">
      <li class="card" v-for="(item, index) in filteredList" :key="index" :class="{ disabled: item.disable }">
        <a href="#" @click="openModal(index)"><img :src="item.painting" :alt="item.title"></a>
        <div class="wrapper">
          <h2 class="card__title" @click="openModal(index)">{{ item.title }}</h2>
          <h3 :class="{ disable_txt: item.disable }">{{ item.disable }}</h3>
          <div class="card-buy">
            <div class="price">
              <h6 :class="{ discount: item.isDiscount }">{{ item.isDiscount }}</h6>
              <h3>{{ item.price }}</h3>
            </div>
            <button class="btn_buy" @click.once="purchased($event)">Купить</button>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template> 

<script>

export default {
  props: ['filteredList'],
  data() {
    return {
      add: 0,
      cart: 0,
      isModalActive: '',
      title: ''
    }
  },

  methods: {
    purchased(event) {
      checking();
      this.cart = setTimeout(loaded, 2000);

      function loaded() {
        event.target.innerHTML = 'В корзине'
        event.target.classList.remove('btn_checking')
        event.target.classList.add('btn_purchased')

      }

      function checking() {
        event.target.innerHTML = 'Обработка';
        event.target.classList.add('btn_checking')
      }
    },

    openModal(index) {
      this.title = this.filteredList[index];

      this.$emit('modalActive', {
        isModalActive: true,
        title: this.title,
      })
    }
  },

}
</script>

<style lang="scss">
.main__header {
  margin-bottom: 40px;
}

.card-items {
  display: grid;
  grid-template-columns: repeat(4, 280px);
  gap: 32px
}

.card {
  width: 280px;

  border: 1px solid $color-border;

  img {
    width: 100%;
    margin-bottom: 20px;
  }

  &__title {
    width: 90%;
    margin-bottom: 22px;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &-buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    &_buy {
      padding: 14px 9px;
      background-color: $color-buy;
      width: 118px;
      transition: all .5s;

      &:hover {
        background-color: $color-hov;
      }
    }

    &_purchased {
      background-color: $color-purchased;

      &:hover {
        background-color: $color-purchased;
      }

      &::before {
        content: '\e805';
        font-family: icons;
        font-size: 18px;
        line-height: 100%;
        margin-right: 3px;
      }
    }

    &_checking {
      background-color: $color-checking;
      transition: all .5s;

      &:hover {
        background-color: $color-checking;
      }

      &::before {
        display: inline-block;
        content: '\f110';
        font-family: icons;
        margin-right: 7px;
        animation: round 2s;
      }
    }
  }
}

@keyframes round {
  0% {
    transform: rotate(45deg);
  }

  14% {
    transform: rotate(90deg);
  }

  30% {
    transform: rotate(135deg);
  }

  45% {
    transform: rotate(180deg);
  }

  60% {
    transform: rotate(225deg);
  }

  74% {
    transform: rotate(270deg);
  }

  87% {
    transform: rotate(315deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.discount {
  text-decoration: line-through;
  color: $color-discount;
}

.disabled {
  opacity: 0.5;

  .card-buy {
    display: none;
  }

  .card__title {
    pointer-events: none;
  }

  a {
    pointer-events: none;
  }
}

.disable_txt {
  margin-top: 34px;
}

@media (max-width: 1185px) {

  .main__header {
    text-align: center;
  }

  .card-items {
    grid-template-columns: repeat(2, 280px);
    justify-content: center;
  }

}

@media (max-width: 650px) {

  .card-items {
    grid-template-columns: repeat(1, 280px);
  }

}
</style>