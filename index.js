console.log("woking bro ... ");
const showcase = [
      {
            head : "Ghatothkach-Master of Magic",
            date_desc : "1 hr 30min . 2008 . Animation . U . Hindi",
            desc: "Ghatothkach, the charming son of Bhima and Hidimba, is blessed with extraordinary powers. Together with his friends and elephant companion, Gajju, he embarks on exciting adventures and fights evil.",
            img_photo: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5729/1285729-h-8375653a398b"
      },
      {
            head : "Doctor Strange in the Multiverse of Madness",
            date_desc : "2hr 6min . 2022 . Action/Adventure",
            desc: "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
            img_photo : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9947/1279947-h-d5d3ff34dad1"
      },
      {
            head : "Bal Ganesh 3",
            date_desc : "1 hr 8min . 2015 . Kids . U . Hindi",
            desc: "Aliens come to Earth to learn more about their favourite god, Bal Ganesh. They meet three mice, Topi, Dhoti and Suit Boot, and exchange stories of the elephant-headed god.",
            img_photo: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/6197/1000216197/1000216197-h"
      },
      {
            head : "Housefull 4",
            date_desc : "Hindi . Comedy . 2019",
            desc: "Three brothers are set to marry three sisters. However, a peek into the distant past reveals to one of the brothers that their brides have been mixed up in their current reincarnation.",
            img_photo : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3668/593668-h"
      },
      {
            head : "Lovecraft Country",
            date_desc : "Season 1 . 10 Episodes . Horror . A . English . HBO originals",
            desc: "Atticus Freeman, his friend Letitia and his uncle, George embark on a trip across America to search for his missing father. Along the way, they find themselves in grave danger.",
            img_photo : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1065/751065-h"
      },
      {
            head : "The king's Man",
            date_desc : "2hr 10min . 2021 . Action . U/A 16+",
            desc: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
            img_photo : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5025/1185025-h-ede36e0baddd"
      }
];


const carousel = document.querySelector(".carousel");
let sliders = []; // to store the slides

let slideIndex = 0; //track the current slide

const createSlide = () => {
      if (slideIndex >= showcase.length) {
      slideIndex = 0;
      }
      let slide = document.createElement("div");
      var imgElement = document.createElement("img");
      let content = document.createElement("div");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let desc = document.createElement("div");

      imgElement.appendChild(document.createTextNode(""));
      h1.appendChild(document.createTextNode(showcase[slideIndex].head));
      p.appendChild(document.createTextNode(showcase[slideIndex].desc));
      desc.appendChild(document.createTextNode(showcase[slideIndex].date_desc));
      content.appendChild(h1);
      content.appendChild(desc);
      content.appendChild(p);
      slide.appendChild(content);
      slide.appendChild(imgElement);
      carousel.appendChild(slide);

      imgElement.src = showcase[slideIndex].img_photo;
      slideIndex++;
      desc.className = "details_subhead";
      slide.className = "slider";
      content.className = "slide-content";
      h1.className = "movie-title";
      p.className = "movie-des";

      sliders.push(slide);

      if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
      }px)`;
      }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);




const videoCards =document.querySelectorAll(".video-card");
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});


let cardContainers = [...document.querySelectorAll(".movies_list")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});







