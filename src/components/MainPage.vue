<template>
  <div>
    <main>
      <div class="main__logo">
        <img src="@/assets/logo.png" alt="логотип StroyPortal">
      </div>
      <div class="main__catalog">
        <div class="main__catalog-container">
          <div class="main__catalog-img">
            <img src="@/assets/burger.png" alt="burger">
          </div>
          <div class="main__catalog-text">
            <p>Каталог</p>
          </div>
        </div>
        <div class="main__catalog-input">
          <autocomplete :search="search"
                        class="autocomplete"
                        auto-select
                        :debounce-time="500"
                        :get-result-value="getResultValue"
                        type="search" name="search" placeholder="Хочу найти"></autocomplete>
          <img class="main__img-search" src="@/assets/search.svg" alt="icon for search">
        </div>
        <div class="main__catalog-list">
          <img class="main__list-img" src="@/assets/task.png" alt="icon for list">
          <p class="main__list-text">Список</p>
        </div>
        <div class="main__catalog-profile">
          <img src="@/assets/profile.png" alt="">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue';

const wikiUrl = 'https://en.wikipedia.org';
const params = 'action=query&list=search&format=json&origin=*';

export default {
  name: 'MainPage',
  components: { Autocomplete },
  data() {
    return {
      search(input) {
        const url = `${wikiUrl}/w/api.php?${params}&srsearch=${encodeURI(input)}`;

        // eslint-disable-next-line consistent-return
        return new Promise((resolve) => {
          if (input.length < 3) {
            return resolve([]);
          }

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              resolve(data.query.search);
            });
        });
      },
      getResultValue(result) {
        return result.title;
      },

      // Open the selected article in
      // a new window
      onSubmit(result) {
        window.open(`${wikiUrl}/wiki/${encodeURI(result.title)}`);
      },
    };
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/_var.scss';
  main{
    margin-left: 190px;
    width:1280px;
    .main__logo{
      margin-left: 90px;
      position: absolute;
      top: 80px;
    }
    .main__catalog{
      margin-left: 200px;
      background-color:#FED83D;
      Width:116px;
      Height:40px;
      border-radius:4px;
      position: absolute;
      left: 330px;
      top: 90px;

      .main__catalog-img{
        padding:10px 16px 80px;
      }

      .main__catalog-text{
        position: absolute;
        left: 50px;
        top: -5px;
        font-family: $family;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
      }

      .main__catalog-input{
      }

      .autocomplete{
        border: 1px solid #ECEFF1;
        position: absolute;
        width: 526px;
        height: 40px;
        top: 0px;
        left: 144px;
        color: #708598;
        font-family: $family;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        padding-left: 14px;
      }

      .main__img-search{
        position: absolute;
        left: 635px;
        top: 10px;
      }

      .main__catalog-list{
        height: 40px;
        width: 111px;
        border-radius: 4px;
        border: 1px solid #ECEFF1;
        position: absolute;
        left: 700px;
        top: 0px;
        .main__list-img{
          padding:10px 15px 80px ;
          background-image: url('../assets/reddote.png');
          background-size:cover 10px 10px;
          background-repeat: no-repeat;
          background-position-x:27px;
          background-position-y:5px;
        }
        .main__list-text{
          font-family: $family;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          color:#050F19;
          position: absolute;
          left: 40px;
          top: -12px;
          padding: 8px;
        }
      }
      .main__catalog-profile{
        position: absolute;
        left: 860px;
        top: 4px;
      }
    }
  }

</style>
