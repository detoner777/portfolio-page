//Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    // Set Menu State
    showMenu = false;
  }
}

//Урок
console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data...");
//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working"
//   };
//   setTimeout(() => {
//     backendData.modifed = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working"
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });
// })

//   .then(clientData => {
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then(data => {
//     console.log("Modified", data);
//   })
//   .catch(err => console.error("Error", err))
//   .finally(() => console.log("finally"));

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log("After 2 sec"));
// sleep(3000).then(() => console.log("After 3 sec"));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});
