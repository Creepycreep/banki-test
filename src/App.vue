<template>
  <div id="app">
    <ModalItem :isModalActive="isModalActive" :card="i" @modalClose="modalClose" />

    <header class="header">
      <div class="container">
        <NavbarItems :navItems="navItems" />
        <form class="search-form" action="#">
          <input v-model="title" class="search-field" type="text" placeholder="Поиск по названию картины">
          <button class="btn_search" type="submit">Найти</button>
          <button class="btn_search btn_mobile" type="submit">&#8981;</button>
        </form>
      </div>
    </header>

    <main class="main">
      <CardItem :filteredList="filteredList" @modalActive="modalOpen" />
    </main>

    <footer class="footer">
      <div class="container">
        <FooterItems :navItems="navItems" />
        <ContactsItem :contactItems="contactItems" />
      </div>
    </footer>
  </div>
</template>

<script>
import CardItem from './components/CardItem.vue';
import NavbarItems from './components/NavbarItems.vue';
import ContactsItem from './components/ConactsItem.vue';
import ModalItem from './components/ModalItem.vue';
import FooterItems from './components/FooterItems.vue';

export default {
  name: 'App',
  components: {
    CardItem,
    NavbarItems,
    ContactsItem,
    ModalItem,
    FooterItems
  },

  data() {
    return {
      title: '',
      cards: [{
        painting: require('./assets/img/painting-63186_1280.jpg'),
        title: '«Рождение Венеры» Сандро Боттичелли',
        price: '1 000 000 $',
        isDiscount: '2 000 000 $',
        description: '«Рождение Венеры» (итал. Nascita di Venere) — картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.'
      },
      {
        painting: require('./assets/img/ae973f6678e037cd297053384aa7dca0.jpg'),
        title: '«Тайная вечеря»  Леонардо да Винчи',
        price: '3 000 000 $',
        description: '«Та́йная ве́черя» (итал. Il Cenacolo или L’Ultima Cena) — монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками.'
      },
      {
        painting: require('./assets/img/image-19.jpg'),
        title: '«Сотворение Адама» Микеланджело',
        price: '5 000 000 $',
        isDiscount: '6 000 000 $',
        description: '«Сотворение Адама» (итал. La creazione di Adamo) — фреска Микеланджело, написанная около 1511 года. Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы, посвящённых девяти сюжетам книги Бытия.'
      },
      {
        painting: require('./assets/img/20152310142330.jpg'),
        title: '«Урок анатомии»  Рембрандт',
        disable: 'Продана на аукционе',
        description: '«Урок анатомии доктора Тульпа» — картина Рембрандта, написанная в 1632 году. Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека.'
      },
      ],
      navItems: [
        { item: 'Каталог' },
        { item: 'Доставка' },
        { item: 'Оплата' },
        { item: 'Контакты' },
        { item: 'О компании' }
      ],
      contactItems: [
        { item: '+7 (812) 555-55-55' },
        { item: 'г. Санкт-Петербург, ул. Ефимова, 3' },
      ],
      isModalActive: '',
      i: ''
    }
  },

  methods: {
    modalOpen(data) {
      this.isModalActive = data.isModalActive;
      this.i = data.title;

      let body = document.querySelector('body')
      body.classList.add('overflow')
    },

    modalClose(data) {
      this.isModalActive = data.isModalActive;
      let body = document.querySelector('body')
      body.classList.remove('overflow')
    },
  },

  computed: {
    filteredList: function () {
      var search = this.title;
      return this.cards.filter(function (elem) {
        if (search === '') {
          return true;
        } else {
          return elem.title.toLowerCase().indexOf(search) > -1;
        }
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

@font-face {
  font-family: 'Merriweather';
  src: url(./assets/fonts/Merriweather-Regular.ttf);
  font-weight: 400;
}

@font-face {
  font-family: 'Merriweather-b';
  src: url(./assets/fonts/Merriweather-Bold.ttf);
  font-weight: 700;
}

@font-face {
  font-family: 'Merriweather-l';
  src: url(./assets/fonts/Merriweather-Light.ttf);
  font-weight: 300;
}

@font-face {
  font-family: 'icons';
  src: url(./assets/fonts/fontello.ttf);
  font-weight: 400;
}

* {
  margin: 0;
  padding: 0;

  line-height: 150%;
  font-family: 'Merriweather', serif;

}

button {
  border: none;
  outline: none;
  text-align: center;
  color: $white;
  font-family: 'Merriweather-b', serif;
  font-size: 14px;
}

h1 {
  font-size: 24px;
  font-family: 'Merriweather-b', serif;
}

h2 {
  font-size: 18px;
}

h3 {
  font-size: 16px;
  font-family: 'Merriweather-b', serif;
  color: $color-main;
}

h6 {
  font-size: 14px;
  font-family: 'Merriweather-l', serif;
}

.container {
  max-width: 1216px;
  padding: 0 15px;
  margin: 0 auto;


  font-size: 14px;
  color: $color-main;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  border-bottom: 1px solid $color-border;
  padding: 24px 0;

  .container {
    position: relative;
  }
}

.main {
  margin-bottom: auto;
  padding: 45px 0;
  width: 100%;

  .container {
    display: block
  }
}

.search-field {
  box-sizing: border-box;
  padding: 13px 16px;
  width: 450px;

  outline: none;
  border: 1px solid $color-border;

  color: $color-main;
  font-family: 'Merriweather';

  &::placeholder {
    color: $color-border;
  }
}

.search-form {
  display: flex;
}

.btn_search {
  padding: 13px 36px;
  background-color: $color-search;

  &:hover {
    background-color: $color-hov;
  }
}

.btn_mobile {
  display: none;

  &:hover {
    background-color: $color-hov;
  }
}

.footer {
  padding: 38px 0;

  background-color: #ECEAEA;
  color: $color-footer;
}

.overflow {
  overflow: hidden;
}

@media (max-width: 1185px) {

  .footer {
    padding: 38px 0;

    background-color: #ECEAEA;
    color: $color-footer;

    .container {
      flex-direction: column;
    }
  }
}

@media (max-width: 650px) {

  .search-field {
    width: 200px;
  }

  .btn_search {
    display: none;
    padding: 0;
  }

  .btn_mobile {
    display: block;
    transform: scale(-1, 1);
    line-height: 100%;

    font-size: 30px;

    width: 48px;

  }
}
</style>
