const { createApp } = Vue;

var vueTile = createApp({
  data() {
    return {
      Tile: [],
      popularCategories: ["分類一", "分類二", "分類三", "分類四"], // 熱門分類
      selectedCategory: "", 
      searchQuery: "" 
    };
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category; 
      console.log(`選中的分類: ${category}`); 
    }
  },
  computed: {
    filteredTiles() {
      
      let filtered = !this.selectedCategory
        ? this.Tile
        : this.Tile.filter((item) => item.category === this.selectedCategory);

     
      if (this.searchQuery.trim()) {
        filtered = filtered.filter((item) =>
          item.text.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return filtered;
    }
  }

}).mount("#shop");

$.ajax({
  url: "/shop",
  method: "get",
  dataType: "json",
  success: results => {
    vueTile.Tile = results;

  
    vueTile.$nextTick(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".product-card",
          start: "top 80%",
          //end:"top 1%",
         // markers: true,  
          scrub: 1,
          toggleActions: "play none none none"
        },
        y: 200,
        opacity: 0,
        stagger: 0.2
      });
    });
  }
});



createApp({
  data() {
    return {
      Hot: [
        { id: "1", img: "img2/1735821935159.png" },
        { id: "2", img: "img2/1735820020892.jpg" },
        { id: "3", img: "img2/1735822238777.png" },
        { id: "4", img: "img2/1735830040798.jpg" }
      ]
    }
  }
}).mount("#hot")


