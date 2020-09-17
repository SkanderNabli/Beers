const App = {
  data() {

    return {
      limitBeers: 60,
      loadBeer: false,
      beers: [],
      modal: {},
      lastId: "",
      itemShow: "",
      contentHeight:0,
      textBackground: "beers "
    };

  },
  watch: {
    loadBeer(loadBeer) {

      if (loadBeer) {
        this.addBeers();
      }

    },

  },
  mounted() {

    this.modal = {
      content: document.getElementById("content"),
      modal: document.getElementById("modal"),
      cross: document.getElementById("cross")
    };

    this.modal.cross.addEventListener("click", () => {
      this.hideModal();
    });

    window.addEventListener("scroll", () => {
      this.loadBeer = this.bottom();
      this.addBackground();
    });

    // this.$nextTick(() => {
      this.addBackground()
    // })

  },
  created() {

    this.addBeers();

  },
  methods: {
    resize(){

      // let divs = document.getElementById("flexFont")
      // let relFontsize = divs.offsetWidth*0.05;
      // divs.style.fontSize = relFontsize+'px';

    },
    showModal(id) {

      this.itemShow = this.beers.find(item => item.id === id);

      this.resize()

      this.modal.content.style.setProperty("transform", "translate(-100%, 0)");
      this.modal.modal.style.setProperty("transform", "translate(-100%, 0)");
      this.modal.cross.style.setProperty("opacity", "1");

      let body = document.body;
      body.style.setProperty("overflow", "hidden");

    },

    hideModal() {
      let body = document.body;

      this.modal.content.style.setProperty("transform", "translate(0, 0)");
      this.modal.modal.style.setProperty("transform", "translate(0, 0)");
      this.modal.cross.style.setProperty("opacity", "0");

      body.style.setProperty("overflow", "inherit");
    },

    bottom() {

      let scrollY = window.scrollY;
      let visible = document.documentElement.clientHeight;
      let pageHeight = document.documentElement.scrollHeight;
      let bottomOfPage = visible + scrollY >= pageHeight ;
      // console.log(scrollY)
      // console.log(visible)
      // console.log(pageHeight)

      return bottomOfPage || pageHeight >= visible;

    },

    addBackground() {
      let body,content;

      body = document.body
      content = document.getElementById("content");

      let bodyBefor = window.getComputedStyle(content, "before");
      let heightBody = bodyBefor.getPropertyValue("height").match(/\d+/)[0]
      let contentBoby = bodyBefor.getPropertyValue("content").match(/[a-z ]+/)[0]

      let limitBg = (1500 + window.scrollY) > parseInt(heightBody)

      if (limitBg ){

        content.setAttribute("data-text", contentBoby + this.textBackground)

      }

    },
    addBeers() {

      if (this.beers.length <= this.limitBeers) {
        axios.get("http://localhost:8000/endpoint.php?id=" + this.lastId).then(response => {

          let api = response.data;

          api.forEach(item => {
            this.beers.push(item);
          })

          this.lastId = api[api.length - 1].id;

          if (this.bottom()) {
            setTimeout(function () { this.addBeers()}.bind(this), 1000)
            this.loadBeer = false;
          }
        });
      }

    },
  }

};


Vue.createApp(App).mount("#app");
