import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks1 from '../components/navigation-links1'
import Thingy from '../components/thingy'

const Home = (props) => {
  return (
    <>
      <main className="home-container">
        <Head>
          <title>NoThrottle</title>
          <meta
            name="description"
            content="Art shouldn't just be for the rich. NoThrottle's goal is to provide cost effective solutions to your business' need."
          />
          <meta property="og:title" content="NoThrottle" />
          <meta
            property="og:description"
            content="Art shouldn't just be for the rich. NoThrottle's goal is to provide cost effective solutions to your business' need."
          />
        </Head>
        <animate-on-reveal
          animation="fadeIn"
          duration="300ms"
          delay="0s"
          direction="normal"
          easing="ease"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-container01"
          ></div>
        </animate-on-reveal>
        <nav data-role="Navigation" className="home-header">
          <div className="home-container02">
            <img
              alt="logo"
              src="https://i.imgur.com/jlw8qax.png"
              className="home-image"
            />
            <span className="home-text">NoThrottle</span>
          </div>
          <div className="home-nav">
            <nav className="home-nav1">
              <nav className="home-nav2">
                <Link href="/">
                  <a className="home-link">Home</a>
                </Link>
                <div
                  data-thq="thq-dropdown"
                  className="home-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle"
                  >
                    <span className="home-text01">Projects</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="home-dropdown-arrow"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="home-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle1"
                      >
                        <span className="home-text02">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle2"
                      >
                        <span className="home-text03">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle3"
                      >
                        <span className="home-text04">Sub-menu Item</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link href="/portfolio">
                  <a className="home-link1">Portfolio</a>
                </Link>
                <Link href="/pricing">
                  <a className="home-link2">Pricing</a>
                </Link>
                <Link href="/contact">
                  <a className="home-link3">Contact</a>
                </Link>
                <span className="home-text05">Links</span>
              </nav>
            </nav>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav3">
              <div className="home-container03">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks1 rootClassName="rootClassName8"></NavigationLinks1>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </nav>
        <div className="home-hero">
          <div className="home-container04">
            <h1 className="home-text06">NOTHROTTLE</h1>
            <h2 className="home-text07">
              <span>Art shouldn&apos;t be just for the rich</span>
              <br></br>
            </h2>
            <span className="home-text10">
              NoThrottle aims to provide high quality, cost effective, and cost
              efficient products for your business, commercial, or personal
              needs. Pricing is done extremely dynamically to ensure that you
              pay just for what you need.
            </span>
            <div className="home-btn-group">
              <button className="home-button button">
                <span className="home-text11">
                  <span>Learn More</span>
                  <br></br>
                </span>
              </button>
              <Link href="/contact">
                <a className="home-link4 button">
                  <span className="home-text14">
                    <span>Contact</span>
                    <br></br>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="/layered-waves-haikei.svg"
            className="home-image2"
          />
        </div>
        <div className="home-container05">
          <div className="home-features">
            <h1 className="home-text17">Why work with us:</h1>
            <div className="home-container06">
              <div className="home-feature-card">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M554 256l364 256-364 256v-512zM170 768v-512l364 256z"></path>
                </svg>
                <div className="home-container07">
                  <h2 className="home-text18">Fast Response</h2>
                  <span className="home-text19">
                    We usually reply within 1 hour of an email or message. The
                    maximum you&apos;d be waiting for a reply is half a day.
                  </span>
                </div>
              </div>
              <div className="home-feature-card1">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
                </svg>
                <div className="home-container08">
                  <h2 className="home-text20">Flexible Working Hours</h2>
                  <span className="home-text21">
                    You could need something done at 1 am, and if we&apos;re
                    available at that time, we can do it.
                  </span>
                </div>
              </div>
              <div className="home-feature-card2">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M384 128c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM790.994 512c0 0 0 0 0 0 0-57.993 47.013-105.006 105.006-105.006s105.006 47.013 105.006 105.006c0 0 0 0 0 0 0 57.993-47.013 105.006-105.006 105.006s-105.006-47.013-105.006-105.006zM688.424 783.53c0-52.526 42.58-95.106 95.106-95.106s95.106 42.58 95.106 95.106c0 52.526-42.58 95.106-95.106 95.106s-95.106-42.58-95.106-95.106zM425.862 896c0-47.573 38.565-86.138 86.138-86.138s86.138 38.565 86.138 86.138c0 47.573-38.565 86.138-86.138 86.138s-86.138-38.565-86.138-86.138zM162.454 783.53c0-43.088 34.93-78.018 78.018-78.018s78.018 34.93 78.018 78.018c0 43.088-34.93 78.018-78.018 78.018s-78.018-34.93-78.018-78.018zM57.338 512c0-39.026 31.636-70.662 70.662-70.662s70.662 31.636 70.662 70.662c0 39.026-31.636 70.662-70.662 70.662s-70.662-31.636-70.662-70.662zM176.472 240.472c0 0 0 0 0 0 0-35.346 28.654-64 64-64s64 28.654 64 64c0 0 0 0 0 0 0 35.346-28.654 64-64 64s-64-28.654-64-64zM899.464 240.472c0 64.024-51.906 115.934-115.936 115.934-64.024 0-115.936-51.91-115.936-115.934 0-64.032 51.912-115.934 115.936-115.934 64.030 0 115.936 51.902 115.936 115.934z"></path>
                </svg>
                <div className="home-container09">
                  <h2 className="home-text22">No Commitment</h2>
                  <span className="home-text23">
                    If you need something done but unsure if we&apos;re going to
                    be the first to commit to your request, just mention that in
                    the email.
                  </span>
                </div>
              </div>
              <div className="home-feature-card3">
                <svg
                  viewBox="0 0 1316.5714285714284 1024"
                  className="home-icon18"
                >
                  <path d="M0 859.429v-347.429h1316.571v347.429c0 50.286-41.143 91.429-91.429 91.429h-1133.714c-50.286 0-91.429-41.143-91.429-91.429zM365.714 731.429v73.143h219.429v-73.143h-219.429zM146.286 731.429v73.143h146.286v-73.143h-146.286zM1225.143 73.143c50.286 0 91.429 41.143 91.429 91.429v128h-1316.571v-128c0-50.286 41.143-91.429 91.429-91.429h1133.714z"></path>
                </svg>
                <div className="home-container10">
                  <h2 className="home-text24">Inexpensive</h2>
                  <span className="home-text25">
                    Pricing is done dynamically, taking into account your
                    organization size, personal needs, and etc. We will never
                    charge more than the cost estimates we provide during a
                    pricing discussion.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-stats">
            <div className="home-stat">
              <h1 className="home-text26">12+</h1>
              <span className="home-text27">Happy Clients</span>
              <span className="home-text28">
                Be part of this number by having me design your graphics.
              </span>
            </div>
            <div className="home-stat1">
              <h1 className="home-text29">70</h1>
              <span className="home-text30">Projects Completed</span>
              <span className="home-text31">
                Increase this number by getting in contact!
              </span>
            </div>
            <div className="home-stat2">
              <h1 className="home-text32">
                <span>500</span>
                <span>+</span>
              </h1>
              <span className="home-text35">Worked Hours</span>
              <span className="home-text36">
                Any paid/contracted work time is yours; you are the priority.
              </span>
            </div>
            <div className="home-stat3">
              <h1 className="home-text37">16/5</h1>
              <span className="home-text38">Support</span>
              <span className="home-text39">
                Found a typo or minor error and need it to be fixed ASAP?
                I&apos;ll be there.
              </span>
            </div>
          </div>
        </div>
        <div className="home-container11">
          <span className="home-text40">WHAT WE DO:</span>
        </div>
        <div className="home-container12">
          <Thingy
            status="1"
            imageSrc="https://i.imgur.com/5E1S2d0.png"
            description="Tarpaulin, Posters, Signs, Infographics, Logos, and many more!"
            pROJECTNAME="Graphic Designs"
            pROJECTTYPE="We make"
            rootClassName="thingy-root-class-name"
          ></Thingy>
          <Thingy
            status="2"
            imageSrc="https://i.imgur.com/TuOnpNW.png"
            description="Posters, Concept Art, Portraits, Sketches, etc."
            pROJECTNAME="Illustrations"
            pROJECTTYPE="We create"
            rootClassName="thingy-root-class-name1"
          ></Thingy>
          <Thingy
            status="3"
            imageSrc="https://i.imgur.com/EhFUAag.png"
            description="Video Editing, Motion Graphics, Animations, plus more!"
            pROJECTNAME="Motion Graphics"
            pROJECTTYPE="We produce"
            rootClassName="thingy-root-class-name2"
          ></Thingy>
          <Thingy
            status="4"
            imageSrc="https://user-images.githubusercontent.com/75120879/150243149-a58a7607-706b-43e9-990d-6fb2848eb671.png"
            description="UI and UX Design, Game Development, Quality of Life software, Mobile Apps, and more!"
            pROJECTNAME="Software"
            pROJECTTYPE="We build"
            rootClassName="thingy-root-class-name3"
          ></Thingy>
        </div>
        <div className="home-banner">
          <h2 className="home-text41">
            <span>Want to join NoThrottle Inc.?</span>
            <br></br>
            <span>Use our name, and keep 100% of the profits!</span>
            <br className="home-text45"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <button className="home-button1 button">Learn More</button>
        </div>
        <footer className="home-footer">
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-logo">
                <div className="home-container15">
                  <img
                    alt="logo"
                    src="https://i.imgur.com/jlw8qax.png"
                    className="home-image3"
                  />
                  <span className="home-text47">NoThrottle</span>
                </div>
                <span className="home-text48">
                  Accessible Art for Everyone!
                </span>
              </div>
              <div className="home-links-container">
                <div className="home-container16">
                  <div className="home-product-container">
                    <span className="home-text49">Product</span>
                    <span className="home-text50">Features</span>
                    <span className="home-text51">Pricing</span>
                    <span className="home-text52">Tutorials</span>
                    <span className="home-text53">Releases</span>
                  </div>
                  <div className="home-company-container">
                    <span className="home-text54">Company</span>
                    <Link href="/morph">
                      <a className="home-link5">About</a>
                    </Link>
                    <Link href="/contact">
                      <a className="home-link6">Contact</a>
                    </Link>
                  </div>
                </div>
                <div className="home-container17">
                  <div className="home-contact">
                    <span className="home-text55">Contact Us</span>
                    <span className="home-text56">inquire@nothrottle.com</span>
                  </div>
                  <div className="home-socials">
                    <span className="home-text57">Follow Us</span>
                    <div className="home-icon-group1">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-icon20"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon22"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon24"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-separator"></div>
            <span className="home-text58">
              © 2024 NoThrottle Inc., All Rights Reserved.
            </span>
          </div>
        </footer>
      </main>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #1c1c1c;
          }
          .home-container01 {
            top: 0;
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-medium);
            display: flex;
            z-index: 101;
            position: fixed;
            align-items: flex-start;
            justify-content: flex-start;
            background-image: linear-gradient(
              to bottom,
              #000000dd 0%,
              #00000000 80%
            );
          }
          .home-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 103;
            position: fixed;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container02 {
            height: 2rem;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image {
            height: 2rem;
          }
          .home-text {
            color: #ffffff;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            color: #ffffff;
            text-decoration: none;
          }
          .home-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            margin-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow {
            transition: 0.3s;
          }
          .home-icon {
            fill: #d9d9d9;
            width: 20px;
            height: 20px;
            transition: 0.3s;
          }
          .home-dropdown-list {
            top: var(--dl-space-space-unit);
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            align-items: stretch;
            border-color: #2c2c2c;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
            list-style-type: none;
            background-color: #1c1c1c;
            list-style-position: inside;
          }
          .home-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle3 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-link1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .home-link2 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link3 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-text05 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container03 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 102;
            position: relative;
            max-width: 100%;
            align-self: stretch;
            min-height: 120vh;
            align-items: stretch;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: linear-gradient(
                110deg,
                rgba(250, 242, 254, 0.3) 0%,
                rgba(243, 243, 255, 0.1) 15%,
                rgba(240, 253, 255, 0) 100%
              ),
              url('https://i.imgur.com/TnRPUg7.png');
          }
          .home-container04 {
            width: 600px;
            display: flex;
            z-index: 150;
            align-self: flex-start;
            margin-top: 30vh;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            margin-right: 200px;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text06 {
            color: var(--dl-color-primary-500);
            font-size: 6rem;
            font-style: normal;
            font-weight: 900;
            padding-top: 10px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 10px;
            background-color: var(--dl-color-gray-black);
          }
          .home-text07 {
            color: var(--dl-color-gray-white);
            font-size: 2rem;
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text10 {
            color: var(--dl-color-gray-900);
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-300);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-300);
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-text11 {
            font-style: normal;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-link4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-100);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link4:hover {
            transform: scale(1.02);
          }
          .home-text14 {
            font-style: normal;
            font-weight: 700;
          }
          .home-image2 {
            left: 0px;
            width: 100%;
            bottom: -15vh;
            height: 100%;
            z-index: 102;
            position: absolute;
            align-self: stretch;
            object-fit: cover;
          }
          .home-container05 {
            width: 100%;
            height: 110vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-features {
            width: auto;
            border: 5px solid transparent;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1106px;
            background: #202023;
            box-shadow: 0px 0px 100px 1px #443e3e;
            margin-top: var(--dl-space-space-fourunits);
            margin-left: var(--dl-space-space-fiveunits);
            border-image: linear-gradient(
              to bottom right,
              #b827fc 0%,
              #2c90fc 25%,
              #b8fd33 50%,
              #fec837 75%,
              #fd1892 100%
            );
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 15px;
            flex-direction: column;
            border-image-slice: 1;
          }
          .home-text17 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container06 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon12 {
            fill: #d9d9d9;
            width: 4rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text18 {
            color: var(--dl-color-primary-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text19 {
            color: var(--dl-color-gray-900);
          }
          .home-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon14 {
            fill: #d9d9d9;
            width: 3rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container08 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text20 {
            color: var(--dl-color-primary-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text21 {
            color: var(--dl-color-gray-900);
          }
          .home-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon16 {
            fill: #d9d9d9;
            width: 4rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text22 {
            color: var(--dl-color-primary-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: var(--dl-color-gray-900);
          }
          .home-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon18 {
            fill: #d9d9d9;
            width: 6rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text24 {
            color: var(--dl-color-primary-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text25 {
            color: var(--dl-color-gray-900);
          }
          .home-stats {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: 1106px;
            margin-top: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text26 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text27 {
            color: #ffffff;
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text28 {
            color: var(--dl-color-gray-900);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text29 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text30 {
            color: #ffffff;
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text31 {
            color: var(--dl-color-gray-900);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text32 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text35 {
            color: #ffffff;
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text36 {
            color: var(--dl-color-gray-900);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text37 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text38 {
            color: #ffffff;
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text39 {
            color: var(--dl-color-gray-900);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-container11 {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            align-self: center;
            max-height: var(--dl-size-size-maxwidth);
            min-height: 250px;
            align-items: center;
            justify-content: center;
          }
          .home-text40 {
            color: rgb(255, 255, 255);
            font-size: 5rem;
            align-self: flex-end;
            font-style: normal;
            font-weight: 700;
          }
          .home-container12 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 0;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/circle-scatter-haikei.svg');
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            z-index: 100;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text41 {
            color: var(--dl-color-gray-900);
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text45 {
            font-weight: 600;
          }
          .home-button1 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-primary-500);
          }
          .home-button1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: stretch;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-image: linear-gradient(
              to bottom,
              #bdc3c700 0%,
              #112c3e50 100%
            );
          }
          .home-container13 {
            width: 100%;
            display: flex;
            max-width: 1106px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-container14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container15 {
            height: 2rem;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image3 {
            height: 2rem;
          }
          .home-text47 {
            color: var(--dl-color-gray-white);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text48 {
            color: var(--dl-color-gray-900);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container16 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text49 {
            color: var(--dl-color-primary-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text50 {
            color: var(--dl-color-gray-900);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text51 {
            color: var(--dl-color-gray-900);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text52 {
            color: var(--dl-color-gray-900);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text53 {
            color: var(--dl-color-gray-900);
          }
          .home-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text54 {
            color: var(--dl-color-primary-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link5 {
            color: var(--dl-color-gray-900);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link6 {
            color: var(--dl-color-gray-900);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text55 {
            color: var(--dl-color-primary-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text56 {
            color: var(--dl-color-gray-900);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text57 {
            color: var(--dl-color-primary-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon20 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon22 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon24 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .home-text58 {
            color: var(--dl-color-gray-white);
            align-self: center;
          }
          @media (max-width: 1600px) {
            .home-container11 {
              height: auto;
            }
          }
          @media (max-width: 1200px) {
            .home-text40 {
              font-size: 5rem;
              font-style: normal;
              font-weight: 700;
            }
            .home-banner {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-container04 {
              align-self: center;
              align-items: center;
              margin-right: var(--dl-space-space-sixunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text07 {
              text-align: center;
            }
            .home-text10 {
              text-align: center;
            }
            .home-features {
              width: auto;
            }
            .home-text26 {
              text-align: center;
            }
            .home-text29 {
              text-align: center;
            }
            .home-text32 {
              text-align: center;
            }
            .home-text37 {
              text-align: center;
            }
            .home-text40 {
              font-size: 5rem;
            }
            .home-text41 {
              text-align: center;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-container16 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-nav1 {
              align-items: flex-start;
              flex-direction: column;
            }
            .home-nav2 {
              align-items: flex-start;
              flex-direction: column;
            }
            .home-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text05 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text06 {
              font-size: 5rem;
            }
            .home-features {
              width: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              grid-template-columns: 1fr;
            }
            .home-feature-card {
              flex-direction: row;
            }
            .home-container07 {
              flex-direction: column;
            }
            .home-feature-card1 {
              flex-direction: row;
            }
            .home-icon14 {
              width: 3rem;
              height: 4rem;
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-feature-card2 {
              flex-direction: row;
            }
            .home-container09 {
              flex-direction: column;
            }
            .home-feature-card3 {
              flex-direction: row;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-text27 {
              text-align: center;
            }
            .home-text30 {
              text-align: center;
            }
            .home-text35 {
              text-align: center;
            }
            .home-text38 {
              text-align: center;
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container14 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-logo {
              align-items: center;
            }
            .home-text48 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .home-container16 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container04 {
              width: 100%;
              max-width: 600px;
              min-width: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text06 {
              width: 100%;
              font-size: 3.5rem;
              text-align: center;
            }
            .home-text10 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .home-link4 {
              align-self: center;
              margin-left: var(--dl-space-space-unit);
            }
            .home-features {
              width: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container07 {
              flex-direction: column;
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-container09 {
              flex-direction: column;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-stats {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-container11 {
              width: auto;
              max-width: 1200px;
              min-width: 100%;
            }
            .home-text40 {
              font-size: 3rem;
            }
            .home-container12 {
              align-self: stretch;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-container14 {
              align-items: center;
              flex-direction: column;
            }
            .home-text48 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              align-items: center;
              flex-direction: column;
            }
            .home-container16 {
              margin-right: 0px;
            }
            .home-container17 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text58 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
