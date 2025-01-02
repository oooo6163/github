const { createApp } = Vue;

var vueTile = createApp({
  data() {
    return {
      Tile: [],
      popularCategories: ["分類一", "分類二", "分類三", "分類四"], // 熱門分類
      selectedCategory: "", // 當前選中的分類
      searchQuery: "" // 儲存使用者輸入的搜尋關鍵字
    };
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category; // 設定篩選的分類
      console.log(`選中的分類: ${category}`); // 查看選中的分類是否正確
    }
  },
  computed: {
    filteredTiles() {
      // 依據分類篩選商品
      let filtered = !this.selectedCategory
        ? this.Tile
        : this.Tile.filter((item) => item.category === this.selectedCategory);

      // 依據搜尋關鍵字進一步篩選
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

    // 重要：等 Vue 將 results 渲染到 DOM，再呼叫 GSAP
    vueTile.$nextTick(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".product-card",
          start: "top 80%",
          end:"top 1%",
          markers: true,    // 測試階段可留著，用來觀察觸發位置
          scrub: 1,
          toggleActions: "play none none none"
        },
        y: 50,
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
        { id: "1", img: "img/img01.jpg", name: "商品1 ", text: "介紹", price: "500", category: "分類一" },
        { id: "2", img: "img/img02.jpg", name: "商品2", text: "介紹", price: "600", category: "分類二" },
        { id: "3", img: "img/img03.jpg", name: "商品3", text: "介紹", price: "500", category: "分類三" },
        { id: "4", img: "img/img04.jpg", name: "商品4", text: "介紹", price: "300", category: "分類一" }
      ]
    }
  }
}).mount("#hot")


