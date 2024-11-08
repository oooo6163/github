const {createApp,ref}  = Vue;

createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-lock", heading:"Web Security", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
            ]
        }
    }
}).mount("#services");

createApp({
    data() {
        return{
            Portfolio:[
                {link:"#portfolioModal1",img:"img/portfolio/roundicons.png",heading:"Round Icons",text:"Graphic Design"},
                {link:"#portfolioModal2",img:"img/portfolio/startup-framework.png",heading:"Startup Framework",text:"Website Design"},
                {link:"#portfolioModal3",img:"img/portfolio/treehouse.png",heading:"Treehouse",text:"Website Design"},
                {link:"#portfolioModal4",img:"img/portfolio/golden.png",heading:"Golden",text:"Website Design"},
                {link:"#portfolioModal5",img:"img/portfolio/escape.png",heading:"Escape",text:"Website Design"},
                {link:"#portfolioModal6",img:"img/portfolio/dreams.png",heading:"Dreams",text:"Website Design"}
            ]
        }
    }
}).mount("#portfolio")