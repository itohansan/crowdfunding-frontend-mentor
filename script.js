// import { subtract, subtractb } from "./test";
// ///mobile nav
const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const navContainer = document.querySelector(".nav-container");
const spinner = document.querySelector(".spinner");

/////mobile nav////
const btnNav = document.querySelector(".btn-mobile-nav");
const sectionHero = document.querySelector(".section-hero");
const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmark = document.querySelector(".bookmark");
const mobileBookmarkIcon = document.querySelector(".mobile-bookmark--icon");
const closeModal = document.querySelector(".close-icon");
const ctaBtns = document.querySelectorAll(".cta-btn");
const thankYou = document.querySelector(".thank-you");
const form = document.querySelector("#thanks");
const mainBtn = document.querySelector(".main-bkm-btn");
const mainBtnActive = document.querySelector(".main-bkm-btn-active");
const mainBody = document.querySelector(".main-body");
const btnBam = document.querySelector(".bamboo-reward");
const btnBlk = document.querySelector(".black-reward");
const gotItBtn = document.querySelector(".got-it");
const backProjectContainer = document.querySelector(".back-project__container");
//////stock
const selectBtn = document.querySelectorAll(".select");
let stockBamboo = document.querySelectorAll(".stocks-bamboo");
let stockBlack = document.querySelectorAll(".stocks-black");

const header = document.querySelector(".introduction");
const nav = document.querySelector("nav");
//stock main heading
const mainBamboo = document.querySelector(".main-stock-bamboo");
const mainBlack = document.querySelector(".main-stock-black");
////////continue button
const continueBtn1 = document.querySelector("#continue1");
const continueBtn2 = document.querySelector("#continue2");
const continueBtn3 = document.querySelector("#continue3");
// ////RADIO-BUTTONS SELECTION///////////
const noReward = document.querySelector("#no-reward");
const bambooReward = document.querySelector("#bamboo-stand");
const blackReward = document.querySelector("#black-stand");
const mahoganyReward = document.querySelector("#mahogany-stand");
/////amount, counter
const personCounter = document.querySelector(".person-counter");
const backed = document.querySelector(".backed");
const amountPledged1 = document.getElementById("amount-pledged1");
const amountPledged2 = document.getElementById("amount-pledged2");
const amountPledged3 = document.getElementById("amount-pledged3");
//////////the containers////////////////
const noRewardDiv = document.querySelector("#no-reward-div");
const bambooStandDiv = document.querySelector("#bamboo-stand-div");
const blackStandDiv = document.querySelector("#black-stand-div");
const mahoganyStandDiv = document.querySelector("#mahogany-stand-div");
///////////input pledge section///////////////////
const noRewardInput = document.querySelector("#none");
const bambooRewardInput = document.querySelector("#bamboo");
const blackRewardInput = document.querySelector("#black");
const mahoganyRewardInput = document.querySelector("#mahogany");
const subscriptionPlanCl = document.querySelectorAll(".subscription-plan");
const activeBtn = document.querySelectorAll(".active-btn");

const modal = document.querySelector(".modal");
const modalCta = document.querySelector(".modal-cta");
///MODAL
const subscriptionDivs = [
  noRewardDiv,
  bambooStandDiv,
  blackStandDiv,
  mahoganyStandDiv,
];
//INPUTS
const inputs = [
  noRewardInput,
  bambooRewardInput,
  blackRewardInput,
  mahoganyRewardInput,
];

//STICKY NAVIGATION
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});
headerObserver.observe(header);

btnNav.addEventListener("click", function () {
  sectionHero.classList.toggle("nav-open");
});

const mobileNav = document.querySelector(".nav-right");
document.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    !mobileNav.contains(e.target) &&
    e.target !== closeNav &&
    e.target !== openNav
  ) {
    sectionHero.classList.remove("nav-open");
  }
});

//OPEN MODAL
ctaBtns.forEach((ctaBtn) => {
  ctaBtn.addEventListener("click", function (e) {
    e.preventDefault();
    backProjectContainer.style.display = "block";
  });
});
// CLOSE MODAL
closeModal.addEventListener("click", function () {
  backProjectContainer.style.display = "none";
});

//THANK YOU DIV
gotItBtn.addEventListener("click", function (event) {
  thankYou.style.display = "none";
  mainBody.style.filter = "blur(0px)";
});
//ADD EVENT LISTENERS TO RADIO BUTTONS
noReward.addEventListener("click", function () {
  displayInput(noRewardInput, noRewardDiv);
});
bambooReward.addEventListener("click", function () {
  displayInput(bambooRewardInput, bambooStandDiv);
});
blackReward.addEventListener("click", function () {
  displayInput(blackRewardInput, blackStandDiv);
});
mahoganyReward.addEventListener("click", function () {
  displayInput(mahoganyRewardInput, mahoganyStandDiv);
});
//
ctaBtns.forEach((ctaBtn) => {
  ctaBtn.addEventListener("click", function (e) {
    e.preventDefault();
    backProjectContainer.style.display = "block";
    // backProjectContainer.scrollIntoView();
  });
});

//RADIO ACTIVE
const bambooStandCl = document.querySelector(".bamboo-stand");
const blackStandCl = document.querySelector(".black-edition-stand");
const displayInput = function (input, div) {
  for (
    let i = 0, j = 0;
    i < inputs.length, j < subscriptionDivs.length;
    i++, j++
  ) {
    if (inputs[i] === input && subscriptionDivs[j] === div) {
      inputs[i].style.display = "block";
      subscriptionDivs[j].classList.remove("modal-unit-border");
      subscriptionDivs[j].classList.add("active");
    } else {
      inputs[i].style.display = "none";
      subscriptionDivs[j].classList.remove("active");
      subscriptionDivs[j].classList.add("modal-unit-border");
    }
  }
};

//BOOKMARK TRIGGER
bookmarkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ///
  if (bookmarkBtn.classList.contains("main-bkm-btn-active")) {
    bookmarkBtn.classList.remove("main-bkm-btn-active");
    bookmarkBtn.innerHTML = "Bookmark";
  } else {
    bookmarkBtn.classList.add("main-bkm-btn-active");
    bookmarkBtn.innerHTML = "Bookmarked";
  }
  if (bookmark.classList.contains("active-bookmark")) {
    bookmark.classList.remove("active-bookmark");
  } else {
    bookmark.classList.add("active-bookmark");
  }
});
mobileBookmarkIcon.addEventListener("click", function () {
  mobileBookmarkIcon.classList.toggle("active-bookmark");
});

/////progress bar, counter
const progressBarCl = document.querySelector(".progress");
const max = 100000;

let count = parseInt(personCounter.innerHTML);

// ADD COUNT**
function add() {
  localStorage.setItem("count", (count += 1));
  personCounter.innerHTML = JSON.parse(
    localStorage.getItem("count")
  ).toLocaleString();
}
// add();
personCounter.innerHTML = JSON.parse(
  localStorage.getItem("count")
).toLocaleString();

// let curAmount = +backed.innerHTML.replace(",", "");
let curAmount = parseInt(backed.innerHTML);

function percentageIncrement() {
  if (curAmount < max) {
    progressBarCl.style.width = `${(curAmount / max) * 100}%`;
  }
  if (curAmount >= max) {
    ctaBtns.forEach((btn) => {
      if (btn.disabled === false) {
        btn.disabled = true;
      }
    });
    subscriptionPlanCl.forEach((plan) => {
      plan.classList.add("blur-out");
    });
  }
}
percentageIncrement();

function addPledge(pledgeInputValue, minPledgeValue) {
  if (pledgeInputValue.value === "" || pledgeInputValue < minPledgeValue) {
    localStorage.setItem("curAmount", parseInt((curAmount += minPledgeValue)));
    backed.innerHTML = localStorage.getItem("curAmount").toLocaleString();
    percentageIncrement();
    // add();
  }
  if (pledgeInputValue.value > minPledgeValue) {
    localStorage.setItem(
      "curAmount",
      (curAmount += parseInt(pledgeInputValue.value))
    );
    backed.innerHTML = localStorage.getItem("curAmount").toLocaleString();
    percentageIncrement();
    // add();
  }
}

addPledge(amountPledged2, 25);

// addPledge();
backed.innerHTML = JSON.parse(
  localStorage.getItem("curAmount")
).toLocaleString();

// spinner();
function thanksLoad() {
  selectBtn.forEach((btns) => {
    btns.addEventListener("click", (e) => {
      e.preventDefault();
      spinner.classList.add("visible");
      backProjectContainer.style.display = "none";
      setTimeout(function () {
        spinner.classList.remove("visible");
        spinner.scrollIntoView();
        thankYou.style.display = "block";
        thankYou.scrollIntoView();

        mainBody.style.filter = "blur(1px)";
      }, 3000);
    });
  });
}
thanksLoad();

stockBamboo.forEach((stock) => {});
let bmbLeft;
function bambooLeft(btn) {
  stockBamboo.forEach((stockBam) => {
    if (parseInt(stockBam.innerHTML) < 1) {
      btn.disabled = true;
      thankYou.style.display = "none";
      console.log(parseInt(stockBam.innerHTML));
      console.log(45);
      alert("over");
    } else {
      btn.disabled = false;
      localStorage.setItem(
        "bmbLeft",
        JSON.stringify(parseInt((stockBam.innerHTML -= 1)))
      );
      stockBam.innerHTML = localStorage.getItem("bmbLeft");

      bmbLeft = localStorage.getItem("bmbLeft");
    }
  });
}
// bambooLeft(btnBam);

stockBamboo.forEach((stock) => {
  stock.innerHTML = localStorage.getItem("bmbLeft");
  console.log(localStorage.getItem("bmbLeft"));
});

let blkLeft;
function blackLeft(btn) {
  stockBlack.forEach((stockBlk) => {
    if (parseInt(stockBlk.innerHTML) < 1) {
      btn.disabled = true;
      thankYou.style.display = "none";
    } else {
      btn.disabled = false;
      localStorage.setItem(
        "blkLeft",
        JSON.stringify(parseInt((stockBlk.innerHTML -= 1)))
      );
      stockBlk.innerHTML = localStorage.getItem("blkLeft");
      blkLeft = localStorage.getItem("blkLeft");
    }
  });
}
// blackLeft(btnBlk);
stockBlack.forEach((stock) => {
  stock.innerHTML = localStorage.getItem("blkLeft");
});

const blur = document.querySelector(".blur-out");

continueBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  add();
  // thanksLoad();
});

continueBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  addPledge(amountPledged2, 25);
  bambooLeft(btnBam);
  add();
  thanksLoad();
  percentageIncrement();
});

continueBtn3.addEventListener("click", function (e) {
  e.preventDefault();
  addPledge(amountPledged3, 75);
  blackLeft(btnBlk);
  add();
  thanksLoad();
  percentageIncrement();
});
