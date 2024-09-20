class mainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <link rel="stylesheet" href="style.css">
        <header class="header">
        <div class="logo-link"><a href="/" class="nav-link"><img class="mainlogo" src="/images/kitfest-colour-logo.svg" alt="KITFest Logo" height="5px" width="auto"></a></div>
        
            <nav class="navbar">
            <div class="links">
                <ul class="nav-menu">
                    <li class="nav-item">
                    <a href="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                    <a href="/about-kitfest" class="nav-link">About The Festival</a>
                    </li>
                    <li class="nav-item">
                    <a href="/our-team" class="nav-link">Our Team</a>
                    </li>
                    
                    <li class="nav-item">
                    <a href="/contact-us" class="nav-link">Contact Us</a>
                    </li>
                    <li class="nav-item">
                    <a href="/login-form" class="login">Login</a>
                    <a href="/index" class="login-out">Log Out</a>
                    </li>
                    <li class="nav-item">
                    <a href="/profile" class="profile-nav">My Profile</a>
                    </li>
                    <li class="nav-item">
                    <a href="/profile" class="profile-nav">Logout</a>
                    </li>
                </ul>
                </div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            </nav>
            
                <a class="cta" href="/donate"><button class="cta-button">DONATE</button></a>
                <script type="text/javascript">
                
                </script>
        </header>
            `;

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
    var token = sessionStorage.getItem("userToken");
    let loginButton = document.querySelector(".login");
    let loginOutButton = document.querySelector(".login-out");
    if (token) {
      loginButton.style.display = "none";
      //loginOutButton.style.display = 'block'
    } else {
      loginOutButton.style.display = "none";
    }

    loginOutButton.addEventListener("click", () => {
      sessionStorage.removeItem("userToken");
      window.location.href = "/index";
    });
  }
}

customElements.define("main-header", mainHeader);

class mainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <script src="emailSubscription.js"></script>
            <link rel="stylesheet" href="style.css">
            <footer class="footer-tray">
            <div class="footer-container">
                <div class="footer">
                    <div class="footer-heading footer-1">
                        <h2>Stay Connected</h2>
                        <a href="https://www.facebook.com/kitfestke" target="_blank">Facebook</a>
                        <a href="https://twitter.com/kitfest_ke" target="_blank">Twitter</a>
                        <a href="https://www.instagram.com/kitfest_ke/" target="_blank">Instagram</a>
                        <a href="https://www.youtube.com/channel/UCBrAgBdoIOZjRRcMfpWF0eg" target="_blank">YouTube</a>
                        <a href="https://wa.me/254794785768" target="_blank">WhatsApp</a>

                    <div class="emailSubscribe-form">
                        <form id=news_form>
                            <label for="subscribe">Receive Festival News</label><br><br>
                            <input id="email" name="email" type="email" class="ohnohoney">
                            <input name="emailSubscribe" type="email" placeholder="Enter your email address" id="emailSubscribe">
                            <input type="submit" value="Sign Up" id="subscribe">
                            </form>
                        </div>
                    </div>

                    <div class="footer-heading footer-2">
                        <h2>Festival Overview</h2>
                        <!-- <a href="/kitfest-2022">#KITFest2022</a> -->
                        <a href="/participation">Participation</a>
                        <a href="/experiences">Experiences</a>
                        <a href="/2022-honorary">#KITFest2022 Honorary</a>
                        <a href="/brand">KITFest Brand</a>
                        <!-- <a href="#">Partnerships</a> -->
                        <!-- <a href="#">History</a> -->
                        <!-- <a href="/our-team">The Team</a> -->
                    </div>

                    <div class="footer-heading footer-3">
                        <h2>Important Links</h2>
                        <a href="/about-kitfest">About KITFest</a>
                        <a href="https://kenyatheatreawards.com/" target="_blank">Kenya Theatre Awards</a>
                        <a href="https://theatre.co.ke/" target="_blank">Theatre KE</a>
                        <a href="https://stager.kitfest.co.ke/" target="_blank">KITFest Stager</a>
                        <a href="https://trust.kitfest.co.ke/" target="_blank">KITFT</a>
                        <a href="https://www.kenyaculturalcentre.go.ke/" target="_blank">Kenya Cultural Centre</a>
                    </div>
                    <div class="footer-copyright">
                        <p>
                        &copy; 2013 &mdash; <span id="currentYear"></span> All Rights Reserved. Kenya International Theatre Festival Trust.
                        </p>

                        <p>
                            DESIGN BY <a href="https://creativeage.agency/" target="_blank">CREATIVE AGE</a>
                        </p>
                    </div>
                </div>
            </div>
            </footer>
            `;
  }
}

customElements.define("main-footer", mainFooter);

var date = new Date();
var year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

class mainTitleBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <link rel="stylesheet" href="style.css">
            <div class="title-bar">
            <div class="title-bar-1"></div>
            <div class="title-bar-2"></div>
            <div class="title-bar-3"></div>
            <div class="title-bar-4"></div>
            <div class="title-bar-5"></div>
            <div class="title-bar-6"></div>
        </div>
            `;
  }
}

customElements.define("main-title-bar", mainTitleBar);

const header = document.querySelector(".header");
let lastScollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScollY < window.scrollY) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScollY = window.scrollY;
});
