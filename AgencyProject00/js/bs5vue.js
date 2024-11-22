const {createApp,ref}  = Vue;

var myService = createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
            ]
        }
    }
}).mount("#services");


myService.Services.push({icon: "fa-lock", heading:"Web Security", text:"asdf adf adf"})

var vueProfolio = createApp({
    data() {
        return{
            Portfolio:[]
        }
    }
}).mount("#portfolio")

$.ajax({
    url:"/profolio",
    method: "get",
    dataType: "json",
    success: results=>{
        vueProfolio.Portfolio = results;
    }

})

createApp({
    data(){
        return{
            About:[
                {img:"img/about/1.jpg",timelineheading:"2009-2011",heading:"Our Humble Beginnings",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
                {img:"img/about/2.jpg",timelineheading:"2011",heading:"An Agency is Born",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
                {img:"img/about/3.jpg",timelineheading:"2012",heading:"Transition to Full Service",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
                {img:"img/about/4.jpg",timelineheading:"2014",heading:"Phase Two Expansion",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"}
            ]
        }
    }
}).mount("#about")