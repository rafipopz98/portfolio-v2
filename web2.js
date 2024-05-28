const data = [
    {
        itemName: "Ecommerce Apllication",
        itemCategory: "NextJs.Typescript.NodeJs.ExpressJs.MongoDb",
        itemLink: "https://ryuko-matoi.vercel.app/",
        itemCopy: "Ecommerce Application built with Next.js, TypeScript, Node.js, Express.js, and MongoDB for a seamless and efficient online shopping experience.",
        itemImg: "ecom.png"
    },
    {
        itemName: "Chess",
        itemCategory: "ReactJs.NodeJs.ExpressJs",
        itemLink: "https://www.github.com/rafipopz98",
        itemCopy: "Multiplayer Chess game developed with React.js, Node.js, and Express.js for interactive online matches.",
        itemImg: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png"
    },
    {
        itemName: "Anime Streaming",
        itemCategory: "ReactJs.SCSS",
        itemLink: "https://otakuwave.netlify.app/",
        itemCopy: "Anime Streaming platform built with React.js and SCSS for a sleek and responsive viewing experience.",
        itemImg: "https://i.ytimg.com/vi/IF6NrIhr1uU/hqdefault.jpg"
    },
    {
        itemName: "Landmark Construction",
        itemCategory: "NextJs.Typescript.NodeJs.ExpressJs.MongoDb",
        itemLink: "https://landmarkconstruction.in/",
        itemCopy: "Showcasing interior and exterior 3D house designs, Landmark Construction management system utilizes Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
        itemImg: "land.png"
    },
    {
        itemName: "Social Media",
        itemCategory: "NextJs.Typescript.NodeJs.ExpressJs.MongoDb",
        itemLink: "https://www.github.com/rafipopz98",
        itemCopy: "Instagram-like Social Media platform built with Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
        itemImg: "https://i.pinimg.com/736x/09/32/80/093280a31259b02865e1478bc4e9c8c4.jpg"
    },
    {
        itemName: "More on Github",
        itemCategory: "Check out my github page",
        itemLink: "https://www.github.com/rafipopz98/",
        itemCopy: "Explore other web3 projects on my github page.",
        itemImg: "github.png"
    }
];




const overlay = document.querySelector(".web2_overlay")
const closeBtn = document.querySelector(".web2_close_btn")
const bodyClose = document.querySelector('.menu-clos')

const t1 = gsap.timeline({
    paused: true, overwrite: "auto"
});

t1.to(overlay, {
    duration: 0.5,
    bottom: "0px",
    rotation: 0,
    transformOrigin: "bottom center",
    ease: "power3.inOut"
})

const items = document.querySelectorAll(".web2_item");

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        updateOverlay(data[index])

        t1.play();
    })
})

closeBtn.addEventListener("click", () => {
    t1.reverse();
})

bodyClose.addEventListener("click", () => {
    t1.reverse();
})

function updateOverlay(dataItem) {
    const itemName = document.querySelector(".web2_item_category").previousElementSibling;
    const itemCategory = document.querySelector(".web2_item_category")

    const itemLink = document.querySelector("#web2_item_link");
    const itemCopy = document.querySelector(".web2_item_copy");
    const itemImg = document.querySelector("#web2_item_img");
    itemName.textContent = dataItem.itemName;
    itemCategory.textContent = dataItem.itemCategory;
    itemLink.href = dataItem.itemLink;
    itemCopy.textContent = dataItem.itemCopy;
    itemImg.src = dataItem.itemImg;

}

document.addEventListener("click", (e) => {
    if (!overlay.contains(e.target) && !isItem(e.target)) {
        t1.reverse();
    }
})

function isItem(target) {
    return target.closet('.web2_item')
}