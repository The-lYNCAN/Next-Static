import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import HeroImg from './lobby.jpg'
import text from './config'
// import Gym from './gym.jpg'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    // console.log(Gym);
    window.addEventListener("load", () => {
      const firstOneImg = text.ReviewOneImg
      const firstOneName = text.ReviewOneName
      const firstOneStatus = text.ReviewOneStatus
      const firstOneComment = text.ReviewOneQuote
      const secondImg = text.ReviewTwoImg
      const secondName = text.ReviewTwoName
      const secondStatus = text.ReviewTwoStatus
      const secondComment = text.ReviewTwoQuote
      console.log(process.env);
      // console.log(text);
      console.log("Loaded!");
      const top = document.getElementsByClassName("top-container")[0].offsetHeight
      const overView = document.getElementsByClassName("overview-section")[0].offsetHeight
      const overViewBottom = document.getElementsByClassName("overview-bottom")[0].offsetHeight
      const Amen = document.getElementsByClassName("provision")[0].offsetHeight
      const Locate = document.getElementsByClassName("location")[0].offsetHeight
      
      document.getElementById("over").addEventListener("click", () => {
        window.scrollBy(0, top - overView - 90)
        console.log(overViewBottom);
        console.log(overView);
      })
      document.getElementById("Amen").addEventListener("click", () => {
        window.scrollBy(0, top - 60)
  
      })
      document.getElementById("local").addEventListener("click", () => {
        window.scrollBy(0, top + Amen - 300)
        console.log(Amen);
  
      })
      document.getElementById("test").addEventListener("click", () => {
        window.scrollBy(0, top + Amen)
        console.log(Locate);
  
      })
  
      document.getElementsByClassName("learn")[0].addEventListener("click", () => {
        window.scrollBy(0, top -overView - 90)
  
      })
  
      document.getElementById("top").addEventListener("click", () => {
        window.scrollBy(0, -10000)
        console.log(Locate);
  
      })
      document.getElementById("cross").addEventListener("click", () => {
        document.getElementsByClassName("Popcon")[0].style.display = "none"
      })
      document.getElementById("contactre").addEventListener("click", () => {
        document.getElementsByClassName("Popcon")[0].style.display = "block"
      })
  
      document.getElementById("contact").addEventListener("click", () => {
        window.scrollBy(0, top + 650)
      })
  
      if(window.screen.width < 700){
        setInterval(() => {
  
          
          console.log(document.getElementById("first").checked);
          if(document.getElementById("first").checked === true){
            document.getElementById("second").checked = true
          }else if(document.getElementById("second").checked === true){
            document.getElementById("third").checked = true
          }else if(document.getElementById("third").checked === true){
            document.getElementById("first").checked = true
          }else{
            document.getElementById("second").checked = true
    
          }
          
          
        }, 4000);
        document.getElementsByClassName("SlideShow")[0].style.width = "360px"
        document.getElementsByClassName("SlideShow")[0].style.overflowX = "scroll"
        document.getElementById("firsti").style.width = "300px"
        document.getElementsByClassName("Footer2")[0].style.marginLeft = "125px"
        document.getElementsByClassName("Footer2")[0].style.marginTop = "0px"
        document.getElementsByClassName("Footer")[0].style.marginTop = "12px"
        // document.getElementsByClassName("Footer")[0].style.marginLeft = "60px"
        document.getElementsByClassName("Foot")[0].style.height = "60px"
        document.getElementsByClassName("Footer2")[0].style.marginLeft = "125px"
        // document.getElementsByClassName("FContainer")[0].style.display = "none"
        // document.getElementsByClassName("pop")[0].style.left = "50px"
        document.getElementsByClassName("FootCon")[0].style.marginBottom = "-100px"
        // document.getElementsByClassName("pop")[0].style.width = "80%"
        document.getElementById("sendp").style.marginLeft = "30%"
        // document.getElementsByClassName("map")[0].style.height = "360px"
        // document.getElementsByClassName("map")[0].style.width = "360px"
        // document.getElementsByClassName("APlace")[0].style.width = "360px"
        // document.getElementsByClassName("map")[0].style.padding = "20px"
        document.getElementsByClassName("APlace")[0].style.paddingLeft = "10px"
        document.getElementsByClassName("where")[0].style.marginLeft = "20px"
        // document.getElementsByClassName("lost")[0].style.marginLeft = "50px"
        document.getElementsByClassName("lost")[0].style.marginTop = "0px"
        document.getElementsByClassName("SlideShow")[0].style.width = "95%"
        document.getElementsByClassName("APlace")[0].style.width = "calc(95% - 32px)"
        document.getElementsByClassName("APlace")[0].style.height = "calc(30% + 15px)"
        document.getElementsByClassName("F")[0].style.textAlign = "left"
        // document.getElementsByClassName("Statement")[0].style.width = "250px"
        document.getElementsByClassName("contactInfo")[0].style.width = "95%"
        document.getElementsByClassName("contactInfo")[0].style.margin = "-150px"
        document.getElementsByClassName("contactInfo")[0].style.marginLeft = "10px"
        document.getElementsByClassName("AboutGym")[0].style.width = "92%"
        // document.getElementsByClassName("AboutGym")[0].style.marginTop = "0"
        // document.getElementsByClassName("profileName")[0].style.marginLeft = "30%"
        // document.getElementsByClassName("status")[0].style.marginLeft = "23%"
        // document.getElementsByClassName("svgs")[0].style.padding = "5px"
        document.getElementsByClassName("empty")[0].style.width = "0"
        document.getElementsByClassName("line")[0].style.width = "80%"
        document.getElementsByClassName("line")[0].style.height = "1px"
        document.getElementsByClassName("Statement")[0].style.width = "80%"
        document.getElementsByClassName("navbar")[0].style.width = "200px"
        document.getElementsByClassName("HeroImg")[0].style.marginLeft = "2.5%"
        document.getElementsByClassName("HeroImg")[0].style.height = "250px"
        document.getElementsByClassName("HeroImg")[0].style.width = "95%"
        document.getElementsByClassName("HeroImg")[0].style.marginRight = "0"
        document.getElementsByClassName("Gym")[0].style.width = "100%"
        document.getElementsByClassName("Gym")[0].style.height = "250px"
        document.getElementsByClassName("provision")[0].style.marginLeft = "2.5%"
        document.getElementsByClassName("provision")[0].style.marginTop = "-98px"
        document.getElementsByClassName("provision")[0].style.width = "97.5%"
        document.getElementsByClassName("profile")[0].style.marginTop = "25px"
        document.getElementsByClassName("nav")[0].style.width = "100%"
        // document.getElementsByClassName("map")[0].style.width = "calc(100% - 30px)"
        // document.getElementsByClassName("map")[0].style.padding = "0"
        document.getElementsByClassName("contactInfo")[0].style.padding = "0"
        document.getElementsByClassName("rightArrow")[0].addEventListener("click", () => {
          document.getElementsByClassName("profile")[0].src = firstOneImg
          document.getElementsByClassName("profileName")[0].textContent = firstOneName
          document.getElementsByClassName("status")[0].textContent = firstOneStatus
          document.getElementsByClassName("quote")[0].textContent = firstOneComment
        })
        document.getElementsByClassName("rightArrow")[1].addEventListener("click", () => {
          document.getElementsByClassName("profile")[0].src = secondImg
          document.getElementsByClassName("profileName")[0].textContent = secondName
          document.getElementsByClassName("status")[0].textContent = secondStatus
          document.getElementsByClassName("quote")[0].textContent = secondComment
        })
        // document.getElementsByClassName("contactInfo")[0].style.width = "0"
        
        document.getElementById("contactre").addEventListener("click", () => {
          document.getElementsByClassName("Popcon")[0].style.display = "block"
  
        })
        document.getElementById("sideo").addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "0"
          document.getElementsByClassName("tobeblacked")[0].style.width = "0"
          document.getElementsByClassName("tobeblacked")[0].style.display = "none"
          document.getElementsByClassName("sideNavBar")[0].style.display = "none"
          window.scrollBy(0, 420)
          setTimeout(() => {
            
            document.getElementsByClassName("sideNavBar")[0].style.transition = "1s"
            
          }, 1000)
        })
        document.getElementById("sidea").addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "0"
          document.getElementsByClassName("sideNavBar")[0].style.display = "none"
          window.scrollBy(0, 900)
          setTimeout(() => {
            
            document.getElementsByClassName("sideNavBar")[0].style.transition = "1s"
            
          }, 1000)
        })
        document.getElementById("sidel").addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "0"
          document.getElementsByClassName("sideNavBar")[0].style.display = "none"
          window.scrollBy(0, 1250)
          setTimeout(() => {
            
            document.getElementsByClassName("sideNavBar")[0].style.transition = "1s"
            
          }, 1000)
        })
        document.getElementById("sidet2").addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "0"
          document.getElementsByClassName("sideNavBar")[0].style.display = "none"
          window.scrollBy(0, 1750)
          setTimeout(() => {
            
            document.getElementsByClassName("sideNavBar")[0].style.transition = "1s"
            
          }, 1000)
        })
        document.getElementById("sides").addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "0"
          document.getElementsByClassName("sideNavBar")[0].style.display = "none"
          window.scrollBy(0, 420)
          setTimeout(() => {
            
            document.getElementsByClassName("sideNavBar")[0].style.transition = "1s"
            
          }, 1000)
        })
        document.getElementById("sidec").addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "0"
          document.getElementsByClassName("sideNavBar")[0].style.display = "none"
          window.scrollBy(0, 420)
          setTimeout(() => {
            
            document.getElementsByClassName("sideNavBar")[0].style.transition = "1s"
            
          }, 1000)
        })
        document.getElementsByClassName("Statement")[0].style.height = "150px"
        document.getElementsByClassName("closeNav")[0].addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "0"
          document.getElementsByClassName("tobeblacked")[0].style.display = "none"
          setTimeout(() => {
            
            document.getElementsByClassName("sideNavBar")[0].style.transition = "1s"
            
          }, 1000)
          
        })
        document.getElementsByClassName("resNav")[0].addEventListener("click", () => {
          document.getElementsByClassName("sideNav")[0].style.width = "65%"
          document.getElementsByClassName("tobeblacked")[0].style.width = "100%"
          document.getElementsByClassName("tobeblacked")[0].style.display = "block"
          
          setTimeout(() => {
            
            document.getElementsByClassName("sideNav")[0].style.display = "block"
            document.getElementsByClassName("sideNav")[0].style.transition = "1s"
            document.getElementsByClassName("sideNavBar")[0].style.display = "block"
            // document.getElementsByClassName("top-container")[0].style.display = "none"
  
          }, 1000)
        })
      }else{
        
        if(window.screen.width < 900){
          document.getElementsByClassName("SlideShow")[0].style.height = "350px"
          document.getElementsByClassName("slide")[0].style.width = "100%"
          document.getElementsByClassName("slide")[0].style.height = "100%"
          document.getElementsByClassName("slide")[1].style.display = "none"
          document.getElementsByClassName("slide")[2].style.display = "none"
          document.getElementsByClassName("HeroImg")[0].style.height = "300px"
          // document.getElementsByClassName("empty")[0].style.height = "100px"
          // document.getElementsByClassName("empty")[0].style.width = "100px"
        }else{
          console.log("this is monitor");
          document.getElementsByClassName("slideNext")[0].addEventListener("click", () => {
            if(document.getElementById("first").checked === true){
              document.getElementById("second").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.8)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
            }else if(document.getElementById("third").checked === true){
              document.getElementById("second").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.8)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
            }else if(document.getElementById("second").checked === true){
              document.getElementById("third").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.8)"
            }else{
              document.getElementById("second").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.8)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
      
            }
          })
          document.getElementsByClassName("slideNextR")[0].addEventListener("click", () => {
            if(document.getElementById("first").checked === true){
              document.getElementById("third").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.8)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
            }else if(document.getElementById("second").checked === true){
              document.getElementById("third").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.8)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
            }else if(document.getElementById("second").checked === true){
              document.getElementById("first").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.8)"
            }else{
              document.getElementById("first").checked = true
              document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.8)"
              document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
              document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
      
            }
          })
          console.log("only desktop code is here");
          // document.getElementById("HeroImg").style.minWidth = "calc(100% - 314px)"
          // document.getElementById("HeroImg").style.minHeight = "500px"
          // document.getElementById("HeroImg").style.height = "800px"
          // document.getElementById("HeroImg").style.marginTop = "0"
          // document.getElementById("HeroImg").style.position = "relative"
  
          document.getElementsByClassName("rightArrow")[0].addEventListener("click", () => {
            document.getElementsByClassName("profile")[0].src = firstOneImg
            document.getElementsByClassName("profileName")[0].textContent = firstOneName
            document.getElementsByClassName("status")[0].textContent = firstOneStatus
            document.getElementsByClassName("quote")[0].textContent = firstOneComment
          })
          document.getElementsByClassName("rightArrow")[1].addEventListener("click", () => {
            document.getElementsByClassName("profile")[0].src = secondImg
            document.getElementsByClassName("profileName")[0].textContent = secondName
            document.getElementsByClassName("status")[0].textContent = secondStatus
            document.getElementsByClassName("quote")[0].textContent = secondComment
          })
  
          document.getElementsByClassName("downCon")[0].style.marginRight = "10px"
          document.getElementsByClassName("downCon")[0].style.marginLeft = "10px"
          document.getElementsByClassName("Icon")[0].style.width = "42px"
          document.getElementsByClassName("Icon")[0].style.height = "42px"
          document.getElementsByClassName("Icon")[1].style.width = "42px"
          document.getElementsByClassName("Icon")[1].style.height = "42px"
          document.getElementsByClassName("Icon")[2].style.width = "42px"
          document.getElementsByClassName("Icon")[2].style.height = "42px"
          document.getElementsByClassName("Icon")[3].style.width = "42px"
          document.getElementsByClassName("Icon")[3].style.height = "42px"
          document.getElementsByClassName("Icon")[4].style.width = "42px"
          document.getElementsByClassName("Icon")[4].style.height = "42px"
          document.getElementsByClassName("Icon")[5].style.width = "42px"
          document.getElementsByClassName("Icon")[5].style.height = "42px"
          document.getElementsByClassName("Icon")[6].style.width = "42px"
          document.getElementsByClassName("Icon")[6].style.height = "42px"
          document.getElementsByClassName("Icon")[7].style.width = "42px"
          document.getElementsByClassName("Icon")[7].style.height = "42px"
          document.getElementsByClassName("resNav")[0].style.display = "none"
          document.getElementsByClassName("SlideShow")[0].style.width = "1393px"
        //   setInterval(() => {
        //     // document.getElementsByClassName("SlideShow")[0].style.height = "1393px"
        //   // console.log("new img");
        //   // console.log(document.getElementById("firstimg").style.marginLeft);
          
        //   // console.log(document.getElementById("first").checked);111
        //   if(document.getElementById("first").checked === true){
        //     document.getElementById("third").checked = true
        //     document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.8)"
        //     document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
        //     document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
        //   }else if(document.getElementById("third").checked === true){
        //     document.getElementById("second").checked = true
        //     document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.5)"
        //     document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.8)"
        //     document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
        //   }else if(document.getElementById("second").checked === true){
        //     document.getElementById("first").checked = true
        //     document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.5)"
        //     document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
        //     document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.8)"
        //   }else{
        //     document.getElementById("second").checked = true
        //     document.getElementsByClassName("selections3")[0].style.background = "rgba(255, 255, 255, 0.8)"
        //     document.getElementsByClassName("selections2")[0].style.background = "rgba(255, 255, 255, 0.5)"
        //     document.getElementsByClassName("selections1")[0].style.background = "rgba(255, 255, 255, 0.5)"
    
        //   }
          
          
        // }, 4000);
        
        }
  
      }
      // console.log(window.screen);
      
    })
    
  }, [])
  return (
    <div className="App">
      <div className="top-container">
        <div className="nav">
        <div className="empty"><div className="note"></div></div>
          <div className="nav-con">
            <button className="resNav"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.1 10H1.9C0.850659 10 0 10.8507 0 11.9V12.1C0 13.1493 0.850659 14 1.9 14H34.1C35.1493 14 36 13.1493 36 12.1V11.9C36 10.8507 35.1493 10 34.1 10Z" fill="white"/>
<path d="M34.1 20H1.9C0.850659 20 0 20.8507 0 21.9V22.1C0 23.1493 0.850659 24 1.9 24H34.1C35.1493 24 36 23.1493 36 22.1V21.9C36 20.8507 35.1493 20 34.1 20Z" fill="white"/>
<path d="M34.1 0H1.9C0.850659 0 0 0.850659 0 1.9V2.1C0 3.14934 0.850659 4 1.9 4H34.1C35.1493 4 36 3.14934 36 2.1V1.9C36 0.850659 35.1493 0 34.1 0Z" fill="white"/>
</svg>
</button>
            {/* <h1>ABout us</h1> */}
            <ul className="navbar">
              <li id="over" className="navItem">Overview</li>
              <li id="Amen" className="navItem">Amenities</li>
              <li id="local" className="navItem">Location</li>
              <li id="test" className="navItem">Testimonials</li>
              <li className="navItem"><button id="contact" className="contactBtn">Contact us</button></li>
            </ul>
          </div>
          <div className="tobeblacked">
            <div className="sideNav">
              <div className="s">

              <ul className="sideNavBar">
                <button className="closeNav"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.92797 1.37067L13 10.4427L22.0346 1.408C22.193 1.23947 22.3837 1.10466 22.5954 1.01164C22.8071 0.918617 23.0354 0.869309 23.2666 0.866669C23.7617 0.866669 24.2365 1.06333 24.5866 1.4134C24.9366 1.76347 25.1333 2.23826 25.1333 2.73334C25.1377 2.96219 25.0952 3.18952 25.0085 3.40138C24.9219 3.61324 24.7928 3.80515 24.6293 3.96534L15.5013 13L24.6293 22.128C24.937 22.429 25.1174 22.8366 25.1333 23.2667C25.1333 23.7617 24.9366 24.2365 24.5866 24.5866C24.2365 24.9367 23.7617 25.1333 23.2666 25.1333C23.0287 25.1432 22.7914 25.1035 22.5697 25.0167C22.3479 24.93 22.1467 24.798 21.9786 24.6293L13 15.5573L3.94664 24.6107C3.78891 24.7736 3.60049 24.9036 3.39224 24.9933C3.18399 25.0831 2.96004 25.1306 2.7333 25.1333C2.23823 25.1333 1.76344 24.9367 1.41337 24.5866C1.0633 24.2365 0.866637 23.7617 0.866637 23.2667C0.862285 23.0378 0.904746 22.8105 0.991414 22.5986C1.07808 22.3868 1.20713 22.1949 1.37064 22.0347L10.4986 13L1.37064 3.872C1.06298 3.57102 0.882577 3.16344 0.866637 2.73334C0.866637 2.23826 1.0633 1.76347 1.41337 1.4134C1.76344 1.06333 2.23823 0.866669 2.7333 0.866669C3.1813 0.872269 3.61064 1.05334 3.92797 1.37067Z" fill="#302E2E"/>
</svg>
</button>
                <li id="sideo" className="SideItem">Overview</li>
                <li id="sidea" className="SideItem">Amenities</li>
                <li id="sidel" className="SideItem">Location</li>
                <li id="sidet2" className="SideItem">Testimonials</li>                
                <li id="sides" className="SideItem">Schedule Visit</li>                
                <li id="sidec" className="SideItem">Call +919999999999</li>                

              </ul>
              </div>
            </div>
            </div>
        </div>
        <div className="littleLower">
          <div className="support"><svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38 18.44C38 7.46 29.48 0 20 0C10.62 0 2 7.3 2 18.56C0.8 19.24 0 20.52 0 22V26C0 28.2 1.8 30 4 30H6V17.8C6 10.06 12.26 3.8 20 3.8C27.74 3.8 34 10.06 34 17.8V32H18V36H34C36.2 36 38 34.2 38 32V29.56C39.18 28.94 40 27.72 40 26.28V21.68C40 20.28 39.18 19.06 38 18.44Z" fill="white"/>
<path d="M14 22C15.1046 22 16 21.1046 16 20C16 18.8954 15.1046 18 14 18C12.8954 18 12 18.8954 12 20C12 21.1046 12.8954 22 14 22Z" fill="white"/>
<path d="M26 22C27.1046 22 28 21.1046 28 20C28 18.8954 27.1046 18 26 18C24.8954 18 24 18.8954 24 20C24 21.1046 24.8954 22 26 22Z" fill="white"/>
<path d="M31.9999 16.06C31.0399 10.36 26.0799 6 20.0999 6C14.0399 6 7.51994 11.02 8.03994 18.9C12.9799 16.88 16.6999 12.48 17.7599 7.12C20.3799 12.38 25.7599 16 31.9999 16.06Z" fill="white"/>
</svg>
</div>
          <img alt="not Found" className="HeroImg" src="/lobby.jpg" />
          {/* <Image id="HeroImg" alt="not Found" className="HeroImg" src={HeroImg} /> */}
          <div className="buttons">
            <button className="call">Call +919999999999</button>
          </div>
          <div className="buttons2">
            <button className="call2">SCHEDULE VISIT</button>
          </div>
          <div className="contactInfo">
            <h3 className="title">ADITYA HEIGHTS</h3>
            <p className="text">{text.heroText}</p>
            <ul className="cat">
              <li id="ekBHK" className="catItem"><b>1BHK</b></li>
              <li className="catItem"><b>2BHK</b></li>
              <li className="catItem"><b>3BHK</b></li>
            </ul>
            <div className="btnsContainer">
              <button className="learn">Learn more</button>
              <button id="contactre" className="contact">Contact us</button>
            </div>
          </div>
        </div>
      </div>
      <section>
      <div className="overview-section">
        <h1 className="overview-title">OVERVIEW</h1>
        <h3 className="subhead">Aditya Heights, Pune</h3>
        <div className="heightsLine"></div>
        <p className="About">{text.overViewText}</p>
        <div className="btnCon">
        <button className="DownloadBtn"><div className="downCon"><svg id="svgs" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75004 19.5H19.25C19.4375 19.4997 19.6182 19.5695 19.7567 19.6958C19.8952 19.822 19.9814 19.9956 19.9984 20.1822C20.0153 20.3689 19.9617 20.5551 19.8482 20.7042C19.7347 20.8534 19.5695 20.9546 19.385 20.988L19.25 21H5.75004C5.56262 21.0003 5.38186 20.9305 5.24336 20.8042C5.10487 20.678 5.01866 20.5044 5.00173 20.3178C4.98479 20.1311 5.03836 19.9449 5.15187 19.7958C5.26538 19.6466 5.43062 19.5454 5.61504 19.512L5.75004 19.5H19.25H5.75004ZM12.365 1.512L12.5 1.5C12.6756 1.49994 12.8456 1.56146 12.9804 1.67383C13.1153 1.78621 13.2064 1.94233 13.238 2.115L13.25 2.25V15.438L17.273 11.4165C17.3971 11.2923 17.5609 11.2155 17.7358 11.1996C17.9107 11.1837 18.0856 11.2297 18.23 11.3295L18.335 11.4165C18.4591 11.5408 18.5355 11.7046 18.5512 11.8795C18.5668 12.0544 18.5206 12.2292 18.4205 12.3735L18.3335 12.477L13.031 17.781C12.9068 17.905 12.7429 17.9815 12.568 17.9971C12.3932 18.0127 12.2183 17.9665 12.074 17.8665L11.969 17.781L6.66654 12.477C6.53366 12.3447 6.45516 12.1675 6.44649 11.9802C6.43782 11.7929 6.49961 11.6091 6.6197 11.4651C6.73979 11.3211 6.90946 11.2273 7.09527 11.2022C7.28107 11.1771 7.46955 11.2225 7.62354 11.3295L7.72704 11.4165L11.75 15.438V2.25C11.75 2.07446 11.8115 1.90446 11.9239 1.76961C12.0363 1.63476 12.1924 1.5436 12.365 1.512L12.5 1.5L12.365 1.512Z" fill="white"/>
</svg></div>
Download brochure</button>
        </div>
      </div>
      <div className="overview-bottom">
        <div className="switches">
        </div>
        <div className="SlideShow">
          <button className="slideNext"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.85136 10.9376L7.3648 6.56943C7.45362 6.49902 7.52492 6.41168 7.5738 6.3134C7.62268 6.21512 7.64799 6.10823 7.64799 6.00005C7.64799 5.89188 7.62268 5.78499 7.5738 5.68671C7.52492 5.58843 7.45362 5.50109 7.3648 5.43068L1.85136 1.06255C1.32509 0.645678 0.512207 0.991303 0.512207 1.63193V10.3694C0.512207 11.0101 1.32509 11.3557 1.85136 10.9376Z" fill="white"/>
</svg>
</button>
          <button className="slideNextR"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.37105 10.9376L0.857613 6.56943C0.76879 6.49902 0.697493 6.41168 0.648611 6.3134C0.599729 6.21512 0.57442 6.10823 0.57442 6.00005C0.57442 5.89188 0.599729 5.78499 0.648611 5.68671C0.697493 5.58843 0.76879 5.50109 0.857613 5.43068L6.37105 1.06255C6.89732 0.645678 7.71021 0.991303 7.71021 1.63193V10.3694C7.71021 11.0101 6.89732 11.3557 6.37105 10.9376Z" fill="white"/>
</svg>
</button>
          <div className="selections1"><div className="selectNum1"></div></div>
          <div className="selections2"><div className="selectNum2"></div></div>
          <div className="selections3"><div className="selectNum3"></div></div>
          {/* <div className="selections"></div> */}
          {/* <div className="selections"></div> */}
          <input type="radio" id="first" name="show" />
          <input type="radio" id="second" name="show" />
          <input type="radio" id="third" name="show" />
          <div id="firstimg" className="slide">
            <img id="firsti" alt="not found" className="Gym" src="/gym.jpg" />
          </div>
          <div className="slide">
            <img alt="not found" className="Gym" src="/gym.jpg" />
          </div>
          <div className="slide">
            <img alt="not found" className="Gym" src="/gym.jpg" />
          </div>
          

        </div>
        <div className="AboutGym">
          <h3 className="GymTitle">24/7 GYM SERVICES</h3>
          <p className="GymAbout">{text.ServiceText}</p>
        </div>
        <div className="filling">
        </div>
      </div>
      </section>
      <div className="Popcon">
          <div className="pop">
            <button id="cross">X</button>
            <div className="pform">
              {/* <h1>SCHEDULE MEETING</h1> */}
              <h1 className="FormHead">Contact</h1>
                      <input placeholder="Name" id="namep" />
                      <input id="numberp" placeholder="Mobile Number" /><br />
                      <input id="messagep" placeholder="Message" />
                      <input id="messagep" placeholder="Date For Visit" /><br />
                      <button id="sendp">Send Message</button>
              {/* <button></button> */}
            </div>
          </div>

      </div>
      <section className="pro">
        <div className="provision">
          <div className="imgback">
          <h1 className="amenities">AMENITIES</h1>
          <p className="amP">{text.Amen}</p>
          <div className="facilitiesList">
            {/* <ul className="unorder">
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Spa</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Cycle track</li>
            </ul>
            <ul className="unorder">
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Spa</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Cycle track</li>
            </ul>
            <ul className="unorder">
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Spa</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Cycle track</li>
            </ul>
            <ul className="unorder">
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Spa</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
              <li className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Cycle track</li>
            </ul> */}
            <ul className="unorder">
              <li id="firstth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="firstth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="firstth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="fourth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="fifth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="sixth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="seventh" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="eighth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="nineth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="tenth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="eleventh" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="twelveth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="thirteenth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>
<li id="fourteenth" className="orderItem"><div className="Icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1805 9.7155C27.993 9.756 25.476 10.3425 22.251 12.3765C21.7665 10.026 20.3325 5.625 16.089 1.149L15 0L13.911 1.1505C9.6525 5.643 8.2245 10.056 7.7445 12.4215C4.5075 10.353 2.01 9.759 1.827 9.717L0 9.309V11.181C0 22.116 5.8875 29.181 15 29.181C23.9715 29.181 30 21.948 30 11.181V9.318L28.1805 9.7155ZM10.4985 14.238C10.5015 14.1885 10.7265 9.588 15 4.44C19.221 9.54 19.4985 14.181 19.5 14.181V14.3685C17.8178 15.7664 16.3028 17.3539 14.985 19.0995C13.6635 17.3847 12.1591 15.819 10.4985 14.43V14.238ZM15 26.181C7.026 26.181 3.6765 19.887 3.0945 13.335C5.577 14.412 10.0185 16.974 13.755 22.5195L15.0165 24.393L16.254 22.503C19.893 16.941 24.3915 14.3865 26.898 13.32C26.301 19.662 22.956 26.181 15 26.181Z" fill="white"/>
</svg>
</div>Gym</li>

            </ul>
          </div>
          </div>
        </div>
        </section>
        <div className="location">
          <div className="where">
          <h1 className="locate">LOCATION</h1>
          <p className="pdis">{text.LocationText}</p>
          
          </div>
          {/* <img alt="not found" className="map" src={Location} /> */}
          <iframe
          className="map"
  loading="lazy"
  allowfullscreen
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8DNIwtk0xu3t1mvUoCLdxP-mkBoqNXWA
    &q=Space+Needle,Seattle+WA">
</iframe>
          {/* <img alt="not found" className="map" src="https://www.google.com/maps/@28.6916608,76.9097728,14z" /> */}
          {/* <iframe src="https://www.google.com/maps/embed/v1/place/key=AIzaSyDNDRb2KhXOkSQMDqkhUWHbX6zQrDc-Kac"></iframe> */}
          {/* <iframe src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyC8DNIwtk0xu3t1mvUoCLdxP-mkBoqNXWA&output=embed" /> */}
          <div className="APlace">
            <h1 className="heights">ADITYA HEIGHTS</h1>
            <p className="heightsDes">{text.heightsText}</p>
            <button className="locateBtn">Contact us</button>
          </div>
        </div>

        <section>
        <div className="lastSecond">
          <h1 className="brag">HEAR FROM OUR FAMILY</h1>
          <p className="F">{text.TextimonialText}</p>
          <div className="subContainer">
            {/* <div className="differentReviews"> */}
            <div className="lost">
              <div className="profImg">
            <img alt="not Found" className="profile" src="https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg" />

              </div>
            <h3 className="profileName">Elon Musk</h3>
            <p className="status">SpaceX</p>
            </div>
            <div className="line"></div>
            <div className="Statement">
              <p className="quote">erisque entesque vel tellus condimmet scelerisque agittis faucibus pretium. Tellus, mauris eget urna purus, nam.</p>
            <button id="firstarr" className="rightArrow"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.37105 10.9376L0.857613 6.56943C0.76879 6.49902 0.697493 6.41168 0.648611 6.3134C0.599729 6.21512 0.57442 6.10823 0.57442 6.00005C0.57442 5.89188 0.599729 5.78499 0.648611 5.68671C0.697493 5.58843 0.76879 5.50109 0.857613 5.43068L6.37105 1.06255C6.89732 0.645678 7.71021 0.991303 7.71021 1.63193V10.3694C7.71021 11.0101 6.89732 11.3557 6.37105 10.9376Z" fill="white"/>
</svg>

</button>
<button className="rightArrow"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.85136 10.9376L7.3648 6.56943C7.45362 6.49902 7.52492 6.41168 7.5738 6.3134C7.62268 6.21512 7.64799 6.10823 7.64799 6.00005C7.64799 5.89188 7.62268 5.78499 7.5738 5.68671C7.52492 5.58843 7.45362 5.50109 7.3648 5.43068L1.85136 1.06255C1.32509 0.645678 0.512207 0.991303 0.512207 1.63193V10.3694C0.512207 11.0101 1.32509 11.3557 1.85136 10.9376Z" fill="white"/>
</svg>
</button>
            </div>
            {/* </div> */}
            
          </div>
        </div>
        </section>

        <div className="FContainer">
            <div className="FSub">
              <div className="Form">
                <div className="No">
                  <div className="Drop">
                    <div className="Final">
                      <h1 className="FormHead">CONTACT</h1>
                      <input placeholder="Name" id="name" />
                      <input id="number" placeholder="Mobile Number" /><br />
                      <input id="message" placeholder="Message" /><br />
                      <button id="send">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
        <div className="Disclaimor">
          <h1 className="dis">DISCLAIMER</h1>
          <p className="disc">{text.DisclaimerText}</p>
        </div>
        <div className="FootCon">
        <div className="Foot">
          <p className="Footer">RERANumber</p>
          <p id="top" className="Footer2">BACK TO TOP       <div className="backIcon"><svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9991 1.99894L14 1.99805L13.6168 1.07441L14 1.99805L14.0009 1.99894L26.0009 13.9989L26.0013 13.9998L26.0009 14.0007L26.708 14.7078L26.0009 14.0007L26 14.0011L25.9992 14.0007L14.7072 2.70679L14 1.9995L13.2929 2.70679L2.00093 14.0007L2.00004 14.0011L1.99915 14.0007L1.29204 14.7078L1.99915 14.0007L1.99878 13.9998L1.99915 13.9989L13.9991 1.99894Z" fill="#D4AF37" stroke="#D4AF37" stroke-width="2"/>
<path d="M13.9991 9.99894L14 9.99805L13.6168 9.07441L14 9.99805L14.0009 9.99894L26.0009 21.9989L26.0013 21.9998L26.0009 22.0007L26.708 22.7078L26.0009 22.0007L26 22.0011L25.9992 22.0007L14.7072 10.7068L14 9.99949L13.2929 10.7068L2.00093 22.0007L2.00004 22.0011L1.99915 22.0007L1.29204 22.7078L1.99915 22.0007L1.99878 21.9998L1.99915 21.9989L13.9991 9.99894Z" fill="#D4AF37" stroke="#D4AF37" stroke-width="2"/>
</svg>
</div></p>
        </div>
        </div>
    </div>
  )
}
