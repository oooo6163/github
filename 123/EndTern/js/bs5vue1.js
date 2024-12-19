const { createApp } = Vue;

createApp({
  data() {
    return {
      Tile: [
        { img: "img/img1.jpg", text: "商品 1 描述",price:"500" ,category: "分類一" },
        { img: "img/img2.jpg", text: "商品 2 描述", price:"600",category: "分類二" },
        { img: "img/img3.jpeg", text: "商品 3 描述", price:"500",category: "分類三" },
        { img: "img/img1.jpg", text: "商品 4 描述", price:"300",category: "分類一" },
        { img: "img/img2.jpg", text: "商品 5 描述",price:"800" ,category: "分類二" },
        { img: "img/img3.jpeg", text: "商品 6 描述",price:"900" ,category: "分類四" }
      ],
      popularCategories: ["分類一", "分類二", "分類三", "分類四"], // 熱門分類
      selectedCategory: "" // 當前選中的分類
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
      const result = !this.selectedCategory
        ? this.Tile
        : this.Tile.filter((item) => item.category === this.selectedCategory);
      console.log("篩選結果:", result); // 查看篩選結果是否正確
      return result;
    }
  }
}).mount("#shop");
