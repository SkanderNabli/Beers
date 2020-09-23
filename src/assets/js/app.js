const App = {
  data() {

    return {
      textBackground: "beers ",
      limitBeers: 60,
      loadDecal: 1500,
      heightShowReturnTop: 2500,
      beers: [],
      modalCross: "",
      currentId: 1,
      itemShow: "",
      loadBeer: false
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

    this.modalCross = document.getElementById("cross");
    this.modalCross.addEventListener("click", () => {
      this.hideModal();
    });

    window.addEventListener("scroll", () => {

      if (window.scrollY >= this.heightShowReturnTop) {
        this.$refs.arrow.style.opacity = "1";
      } else {
        this.$refs.arrow.style.opacity = "0";
      }

      this.loadBeer = this.bottom();
      this.addBackground();
    });

    window.addEventListener("resize", () => {
      this.loadBeer = this.bottom();
      this.addBackground();
    });

    this.$refs.content.setAttribute("data-text", this.textBackground + this.textBackground)

  },
  created() {

    this.addBeers();

  },
  methods: {
    showModal(id) {

      this.itemShow = this.beers.find(item => item.id === id);

      this.$refs.arrow.style.opacity = "0";

      this.modalCross.style.opacity = "1";
      this.$refs.content.style.transform = this.$refs.modal.style.transform = "translate(-100%, 0)" ;

      document.body.style.overflow= "hidden";

    },
    hideModal() {

      if (window.scrollY >= this.heightShowReturnTop) {
        this.$refs.arrow.style.opacity = "1";
      }
      this.modalCross.style.opacity = "0";
      this.$refs.content.style.transform = this.$refs.modal.style.transform = "translate(0, 0)" ;

      document.body.style.overflow="inherit";

    },
    scrollToTop() {

      let cosParameter = document.scrollingElement.scrollTop / 2;
      let scrollCount = 0, oldTimestamp = null;

      function step(newTimestamp) {
        if (oldTimestamp !== null) {

          scrollCount += Math.PI * (newTimestamp - oldTimestamp) / 1000;
          if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
          document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);

        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);

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

        axios.get("http://localhost:8000/endpoint.php?id=" + this.currentId).then(response => {

          let api = response.data;

          api.forEach(item => {
            this.beers.push(item);
          })
          this.currentId = api[api.length - 1].id;

        });
      }

    },
  }
};

Vue.createApp(App).mount("#app");
