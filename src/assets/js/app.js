const App = {
  data() {

    return {
      limitBeers: 60,
      loadDecal: 1500,
      loadBeer: false,
      beers: [],
      modal: {},
      lastId: 1,
      itemShow: "",
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

    this.modal.cross = document.getElementById("cross");

    this.modal.cross.addEventListener("click", () => {
      this.hideModal();
    });

    window.addEventListener("scroll", () => {
      this.loadBeer = this.bottom();
      this.addBackground();
    });

    window.addEventListener("resize", () => {
      this.loadBeer = this.bottom();
      this.addBackground();
    });

    this.$refs.content.setAttribute("data-text", this.textBackground+this.textBackground)


  },
  created() {

    this.addBeers();

  },
  methods: {
    resize() {

      // let divs = this.$refs.flexFont
      // let relFontsize = divs.offsetWidth*0.05;
      // divs.style.fontSize = relFontsize+'px';

    },
    showModal(id) {

      this.itemShow = this.beers.find(item => item.id === id);

      this.resize()

      this.$refs.content.style.setProperty("transform", "translate(-100%, 0)");
      this.$refs.modal.style.setProperty("transform", "translate(-100%, 0)");
      this.modal.cross.style.setProperty("opacity", "1");

      let body = document.body;
      body.style.setProperty("overflow", "hidden");

    },
    hideModal() {

      this.$refs.content.style.setProperty("transform", "translate(0, 0)");
      this.$refs.modal.style.setProperty("transform", "translate(0, 0)");
      this.modal.cross.style.setProperty("opacity", "0");

      document.body.style.setProperty("overflow", "inherit");

    },
    bottom() {

      return window.scrollY + this.loadDecal >= this.$refs.content.offsetHeight;

    },
    addBackground() {

      let bodyBefor = window.getComputedStyle(this.$refs.content, "before");
      let heightBody = bodyBefor.getPropertyValue("height").match(/\d+/)[0]


      if ((this.loadDecal + window.scrollY) > parseInt(heightBody)) {

        let contentBoby = this.$refs.content.getAttribute("data-text")
        this.$refs.content.setAttribute("data-text", contentBoby + this.textBackground)

      }
    },
    addBeers() {

      if (this.beers.length < this.limitBeers) {

        axios.get("http://localhost:8000/endpoint.php?id=" + this.lastId).then(response => {

          let api = response.data;

          api.forEach(item => {
            this.beers.push(item);
          })
          this.lastId = api[api.length - 1].id;

        });
      }

    },
  }
};


Vue.createApp(App).mount("#app");
