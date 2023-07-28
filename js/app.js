
// .bioTitle:hover~.bio {
//   background-color: #2613d453;
//   transform: translateY(0px);
// }

// bioTitle.addEventListener('click', function () {
//   bio.style.transform = 'translateY(0px)';
// })
// -------------------------------------------------



const html_logo = document.querySelector('.html_logo');
const css_logo = document.querySelector('.css_logo');
const js_logo = document.querySelector('.js_logo');
const php_logo = document.querySelector('.php_logo');
const mySql_logo = document.querySelector('.mySql_logo');

const sun = document.querySelector('.sun');
const logo_planet = document.querySelector('.logo-planet');

// ----- apearing bio dialog and sections ------------------
const bioTitle = document.querySelector('.bioTitle');
const bio = document.querySelector('.bio');
window.addEventListener('scroll', function () {

  var windowheight = window.innerHeight;
  var revealtop = bio.getBoundingClientRect().top;
  var revealpoint = 450;
  if (revealtop < windowheight - revealpoint) {
    bio.classList.add('activeBio');
  }
  else {
    bio.classList.remove('activeBio');
  }


});
// ------------revealing sections-------------

window.addEventListener('scroll', function () {
  var reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }

  }
});
html_logo.addEventListener('mouseover', function () {

  html_logo.src = 'images/HTML5_logo.png';

});
html_logo.addEventListener('mouseleave', function () {

  html_logo.src = 'images/Planet_html.png';
});

css_logo.addEventListener('mouseover', function () {

  css_logo.src = 'images/CSS3_logo.png';
});
css_logo.addEventListener('mouseleave', function () {

  css_logo.src = 'images/Planet_css.png';
});

js_logo.addEventListener('mouseover', function () {

  js_logo.src = 'images/Javascript_logo.png';
});
js_logo.addEventListener('mouseleave', function () {

  js_logo.src = 'images/Planet_js.png';
});

php_logo.addEventListener('mouseover', function () {

  php_logo.src = 'images/php_logo.png';
});
php_logo.addEventListener('mouseleave', function () {

  php_logo.src = 'images/Planet_php.png';
});
mySql_logo.addEventListener('mouseover', function () {

  mySql_logo.src = 'images/mySql_logo.png';
});
mySql_logo.addEventListener('mouseleave', function () {

  mySql_logo.src = 'images/Planet_MySQL.png';
});

sun.addEventListener('click', function () {
  html_logo.classList.toggle('html_position');
  css_logo.classList.toggle('css_position');
  js_logo.classList.toggle('js_position');
  php_logo.classList.toggle('php_position');
  mySql_logo.classList.toggle('mySql_position');
})

// ---------------burger btn----------------------

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const navLinks = document.querySelector(".navLinks");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    window.scrollTo(0, 0);
    menuBtn.classList.add("open");
    show();
    menuOpen = true;

  } else {
    menuBtn.classList.remove("open");
    close();
    menuOpen = false;
  }
});
function show() {
  navLinks.style.display = "flex";
  navLinks.style.top = "0";
}
function close() {
  navLinks.style.top = "-100vh";
}

// ---------nav menu to close when select item from nav menu------
const navItems = document.querySelectorAll('.navItems');

for (let navItem of navItems) {
  navItem.addEventListener('click', () => {
    menuBtn.classList.remove("open");
    close();
    menuOpen = false;
  })
};


// --------------------PPROJECTS/GALLERY FUNCTIONS--------------
// const imageContainer = document.querySelector('.image-container');

const popUp = document.querySelector('.popup-img');


const unkaBlock = document.querySelector('.unka-block');
const unkas = document.querySelectorAll('.unka');

const ticTacToeBlock = document.querySelector('.ticTacToe-block');
const ticTacToes = document.querySelectorAll('.ticTacToe');

const addProductBlock = document.querySelector('.addProduct-block');
const addProducts = document.querySelectorAll('.addProduct');

// ------ variables for displaying image and description -------
const listingDisplay = document.querySelector('.popup-img img');

const projectInfo = document.querySelector('.project-info');

const popup_link = document.querySelector('.popup_link');


const unkaInfo = [
  'Тhis is а website for a dental office. In the left corner of the navigation bar is the logo of the clinic (a vector image edited in figma and on which animation is made). For smaller devices the navigation bar turns into a burger button. The purple button takes you to the appointment booking form.(We will explain a few more in the following slides)',
  'Here 4 types of services are listed. Each type of service has an icon with animation (The icons are images converted in Illustrator as vectors and later edited in Figma). Under each icon there is a link that leads to the lower part of the site with a description of the service.',
  'A stylized footer is presented here.Icons for location, contact, business hours, and facebook and instagram are customized on Figma.',
  'All the services offered by the clinic are presented here in tables, which are divided into four tables, for each main type of service'
];

const ticTacToeInfo = [
  'This is a Tic Tac Toe game.In the initial part, the game is disabled and you must first choose the number of plays / games) ',
  'After selecting the number of games, the selective input is disabled and the game is enabled to start. On the right side is written a table on which the result for each game is recorded. After each game the disabled button "Next Game" becames enabled',
  'When all the plays are played, the "Next Game" button turns into "Show Result" and after clicking it, the final score is shown'
];

const addProductInfo = [
  'This is a simple web aplication of adding products and showing the list of added products. For this project I have used Javascript Ajax, PHP and MySql. The Products have different specifications and are ordered by type. There are 2 buttons here, for adding a new product and for mass deletion. There is a checkbox on each product and it is possible to check multiple products and by clicking the MASS DELETE button all checked products are deleted',
  'By clicking on the add product button takes you to the next page. Here you can choose what type of product you want to enter and new fields for entering specifications are added, different for each type of product. The SKU field does not allow entering products with the same SKU by verifying with the database'
]
// ---------------------------------------------------------------
// listingDisplay.src = '';







// -------------opening image box with click on block-----------
// ----------buttons for listing images in opened box--------------------
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');
let imgIndex;

backBtn.style.display = 'none';

// ----- link za UNKA: images/Unka_1.png----

unkaBlock.addEventListener('click', function (e) {
  // imageContainer.classList.remove('reveal');
  // imageContainer.classList.remove('active');
  imgIndex = 1;

  // for (let unka of unkas) {

  //   unka.classList.add('pop');

  // }
  listingDisplay.src = `images/Unka_${imgIndex}.png`;
  projectInfo.innerText = unkaInfo[imgIndex - 1];
  popup_link.href = '';
  popUp.style.display = 'block';
  // popUp.style.opacity = '1';


  // ----------listing images in opened box--------------------

  nextBtn.addEventListener('click', function (e) {
    imgIndex++;
    if (imgIndex >= unkas.length) {
      nextBtn.style.display = 'none';
    }

    backBtn.style.display = 'block';
    listingDisplay.src = `images/Unka_${imgIndex}.png`;
    projectInfo.innerText = unkaInfo[imgIndex - 1];

  })

  backBtn.addEventListener('click', function () {
    imgIndex--;

    if (imgIndex <= 1) {
      backBtn.style.display = 'none';
    }
    nextBtn.style.display = 'block';
    listingDisplay.src = `images/Unka_${imgIndex}.png`;
    projectInfo.innerText = unkaInfo[imgIndex - 1];

  })




})
// ----- link za ticTacToe: images/ticTacToe_1.png----

ticTacToeBlock.addEventListener('click', function (e) {

  imgIndex = 1;

  // for (let ticTacToe of ticTacToes) {

  //   ticTacToe.classList.add('pop');

  // }
  listingDisplay.src = `images/ticTacToe_${imgIndex}.png`;
  projectInfo.innerText = ticTacToeInfo[imgIndex - 1];
  popup_link.href = 'http://bazestictactoe.atwebpages.com/';
  popUp.style.display = 'block';

  // ---------- listing images in opened box--------------------
  const nextBtn = document.querySelector('.next');
  const backBtn = document.querySelector('.back');

  nextBtn.addEventListener('click', function (e) {
    imgIndex++;
    if (imgIndex >= ticTacToes.length) {
      nextBtn.style.display = 'none';
    }

    backBtn.style.display = 'block';
    listingDisplay.src = `images/ticTacToe_${imgIndex}.png`;
    projectInfo.innerText = ticTacToeInfo[imgIndex - 1];

  })

  backBtn.addEventListener('click', function () {
    imgIndex--;

    if (imgIndex <= 1) {
      backBtn.style.display = 'none';
    }

    nextBtn.style.display = 'block';
    listingDisplay.src = `images/ticTacToe_${imgIndex}.png`;
    projectInfo.innerText = ticTacToeInfo[imgIndex - 1];
  })



})
// ----- link za addProduct: images/addProduct_1.png----

addProductBlock.addEventListener('click', function (e) {
  imgIndex = 1;

  // for (let addProduct of addProducts) {

  //   addProduct.classList.add('pop');

  // }
  listingDisplay.src = `images/AddProduct_${imgIndex}.png`;
  projectInfo.innerText = addProductInfo[imgIndex - 1];
  popup_link.href = 'https://bazeproducts.000webhostapp.com/index.php';
  popUp.style.display = 'block';

  // ---------- listing images in opened box--------------------
  const nextBtn = document.querySelector('.next');
  const backBtn = document.querySelector('.back');

  nextBtn.addEventListener('click', function (e) {
    imgIndex++;
    if (imgIndex >= addProducts.length) {
      nextBtn.style.display = 'none';
    }
    backBtn.style.display = 'block';
    listingDisplay.src = `images/AddProduct_${imgIndex}.png`;
    projectInfo.innerText = addProductInfo[imgIndex - 1];

  })

  backBtn.addEventListener('click', function () {
    imgIndex--;
    if (imgIndex <= 1) {
      backBtn.style.display = 'none';
    }
    nextBtn.style.display = 'block';
    listingDisplay.src = `images/AddProduct_${imgIndex}.png`;
    projectInfo.innerText = addProductInfo[imgIndex - 1];
  })


})
// ----closing open image box-----
const closeView = document.querySelector('.popup-img span');
closeView.addEventListener('click', function () {
  // for (let addProduct of addProducts) {

  //   addProduct.classList.remove('pop');

  // }
  popUp.style.display = 'none';
  listingDisplay.src = '';
  document.getElementById('projects').scrollIntoView();
  location.reload(true);
});

// ---------form validation-------------

class ContactValidator {
  constructor(name, lastName, email, msg) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.msg = msg;
    this.errors = {};
  }



  validateName() {

    let val = this.name;
    const nameRegex = /^[a-zA-Z ]{3,12}$/;
    if (val === '') {
      this.addError('name', ': name cannot be empty');

    }
    else {
      if (!nameRegex.test(val)) {
        this.addError('name', ': name must be 3-12 chars');
      }
    }

  }
  validateLastName() {

    let val = this.lastName;
    const lastNameRegex = /^[a-zA-Z ]{3,12}$/;
    if (val === '') {
      this.addError('lastName', ': Last Name cannot be empty');
    }
    else {
      if (!lastNameRegex.test(val)) {
        this.addError('lastName', ': last Name must be 3-12 chars');
      }
    }

  }

  validateEmail() {

    let val = this.email;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (val === '') {
      this.addError('email', ': email cannot be empty');
    }
    else {
      if (!emailRegex.test(val)) {
        this.addError('email', ': email must be a valid email address');
      }
    }

  }
  validateMsg() {

    let val = this.msg;
    const msgRegex = /^[a-zA-Z0-9!?@#$&()-_`.+,%/\''"][^<>]{12,500}$/;
    if (val === '') {
      this.addError('msg', ': message cannot be empty');
    }
    else {
      if (!msgRegex.test(val)) {
        this.addError('msg', ': message must be 12-500 chars & alphanumeric');
      }
    }

  }
  validateForm() {
    // const fields = ['name', 'lastName', 'email', 'msg'];

    this.validateName();
    this.validateLastName();
    this.validateEmail();
    this.validateMsg();
    return this.errors;

  }
  addError(key, val) {
    this.errors[key] = val;
  }

}


// ---------------ignoring required fields messages--------------
document.addEventListener('invalid', (function () {
  const inputs = document.querySelectorAll('.input');
  return function (e) {
    e.preventDefault();
    for (let input of inputs) {
      input.focus();
    }
  };
})(), true);

// ------------------------------------------------------------
// ----------------sending contact form---------------------------
const sendMail = document.querySelector('[type="submit"]');


sendMail.addEventListener('click', function (e) {
  // e.preventDefault();
  const fields = ['name', 'lastName', 'email', 'msg'];

  const errBox = {
    name: document.querySelector('.nameError'),
    lastName: document.querySelector('.lastNameError'),
    email: document.querySelector('.emailError'),
    msg: document.querySelector('.msgError')
  }

  let name = document.querySelector('#name').value;

  let lastName = document.querySelector('#lastName').value;

  let email = document.querySelector('#email').value;

  let msg = document.querySelector('#msg').value;

  const Contact = new ContactValidator(name, lastName, email, msg);
  let errors = Contact.validateForm();
  for (let field of fields) {
    if (errors[field]) {
      errBox[field].innerText = errors[field];
      errBox[field].style.color = 'red';

    } else {
      errBox[field].innerText = '';
    }
    // console.log(errors);

  }
  if (Object.keys(errors).length === 0) {
    window.location.href = "thanks.html";
  }
})





// ------------------------------------------------
// -----------------------------------------------

/* -----------------------------------------------







/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
