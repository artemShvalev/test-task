<template>
  <div>
    <header>
      <div class="header__wrapper">
        <div class="header__container">
          <div class="header__img">
            <img src="@/assets/location.png" alt="Значок локации">
            <div class="header__text">
              <p>Волгоградская область</p>
            </div>
            <div class="header__list">
              <ul>
                <li class="list__tenders">Тендеры</li>
                <li class="list__base-workers">База Подрядчиков</li>
                <li class="list__other-services">
                  Другие сервисы <img class="list__img" src="@/assets/arrdown.png" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'MainPaige',
};
</script>

<style scoped lang="scss">
@import '../assets/scss/_var.scss';

  .header__wrapper {
    width: 1280px;
    margin-left: 190px;
    .header__container {
      display: flex;

      img {
        margin-left: 90px;
        position: absolute;
      }

      .header__text {
        margin-left: 107px;
        padding: 6px;
        color: $color;
        font-size: $size;
        font-style: normal;
        font-family: $family;
        font-weight: $weight;
        position: relative;
        top: -17px;
        right: 0px;
      }
    }

    .header__list {
      display: flex;

      ul {
        position: relative;
        right: 320px;
      }

      li {
        display: inline;
        list-style-type: none;
        color: $color;
        font-size: $size;
        font-style: normal;
        font-family: $family;
        font-weight: $weight;
      }
    }

    .list__tenders {
      position: relative;
      left: 1255px;
      top: -67px;
      padding-right: 24px;
    }
    .list__base-workers{
      position: relative;
      right:-1270px;
      top:-67px;
    }
    .list__other-services{
      position: relative;
      left: 1290px;
      top: -67px;
    }
    .list__img{
      position: relative;
      left:10px;
      top: 7px;
    }
  }

</style>
