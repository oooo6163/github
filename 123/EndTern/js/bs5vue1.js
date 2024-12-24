const { createApp } = Vue;

createApp({
  data() {
    return {
      Tile: [
        { id: "1", img: "img/img01.jpg", text: "商品 1 描述", price: "500", category: "分類一" },
        { id: "2", img: "img/img02.jpg", text: "商品 2 描述", price: "600", category: "分類二" },
        { id: "3", img: "img/img03.jpg", text: "商品 3 描述", price: "500", category: "分類三" },
        { id: "4", img: "img/img04.jpg", text: "商品 4 描述", price: "300", category: "分類一" },
        { id: "5", img: "img/img05.jpg", text: "商品 5 描述", price: "800", category: "分類二" },
        { id: "6", img: "img/img04.jpg", text: "商品 6 描述", price: "900", category: "分類四" },
        { id: "7", img: "img/img01.jpg", text: "商品 1 描述", price: "500", category: "分類一" },
        { id: "8", img: "img/img02.jpg", text: "商品 2 描述", price: "600", category: "分類二" },
        { id: "9", img: "img/img03.jpg", text: "商品 3 描述", price: "500", category: "分類三" },
        { id: "10", img: "img/img04.jpg", text: "商品 4 描述", price: "300", category: "分類一" },
        { id: "11", img: "img/img05.jpg", text: "商品 5 描述", price: "800", category: "分類二" },
        { id: "12", img: "img/img04.jpg", text: "商品 6 描述", price: "900", category: "分類四" }
      ],
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

createApp({
  data() {
    return {
      product: null // 儲存當前商品的數據
    };
  },
  created() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));

    // 假設商品數據存放在本地，也可以通過 API 請求獲取
    const products = [
      { id: 1, img: "img/img01.jpg", text: "商品 1 描述", price: "500", category: "分類一" },
      { id: 2, img: "img/img02.jpg", text: "商品 2 描述", price: "600", category: "分類二" },
      { id: 3, img: "img/img03.jpg", text: "商品 3 描述", price: "500", category: "分類三" },
      { id: 4, img: "img/img04.jpg", text: "商品 4 描述", price: "300", category: "分類一" },
      { id: 5, img: "img/img05.jpg", text: "商品 5 描述", price: "800", category: "分類二" },
      { id: 6, img: "img/img04.jpg", text: "商品 6 描述", price: "900", category: "分類四" },
      { id: 7, img: "img/img01.jpg", text: "商品 1 描述", price: "500", category: "分類一" },
      { id: 8, img: "img/img02.jpg", text: "商品 2 描述", price: "600", category: "分類二" },
      { id: 9, img: "img/img03.jpg", text: "商品 3 描述", price: "500", category: "分類三" },
      { id: 10, img: "img/img04.jpg", text: "商品 4 描述", price: "300", category: "分類一" },
      { id: 11, img: "img/img05.jpg", text: "商品 5 描述", price: "800", category: "分類二" },
      { id: 12, img: "img/img04.jpg", text: "商品 6 描述", price: "900", category: "分類四" }
    ];

    this.product = products.find((p) => p.id === productId);
  }
}).mount("#product-details");
createApp({
  data() {
      return {
          query: "", // 搜尋關鍵字
          Tile: [
              { id: "1", img: "img/img01.jpg", text: "商品 1 描述", price: "500", category: "分類一" },
              { id: "2", img: "img/img02.jpg", text: "商品 2 描述", price: "600", category: "分類二" },
              { id: "3", img: "img/img03.jpg", text: "商品 3 描述", price: "500", category: "分類三" },
              { id: "4", img: "img/img04.jpg", text: "商品 4 描述", price: "300", category: "分類一" },
              { id: "5", img: "img/img05.jpg", text: "商品 5 描述", price: "800", category: "分類二" },
              { id: "6", img: "img/img04.jpg", text: "商品 6 描述", price: "900", category: "分類四" }
          ]
      };
  },
  computed: {
      filteredTiles() {
          if (!this.query.trim()) {
              return [];
          }
          return this.Tile.filter((item) =>
              item.text.toLowerCase().includes(this.query.toLowerCase())
          );
      }
  },
  created() {
      // 從 URL 取得搜尋關鍵字
      const params = new URLSearchParams(window.location.search);
      this.query = params.get("query") || ""; // 預設為空字串
  }
}).mount("#search-results");