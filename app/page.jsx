"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Footer from "@/components/Footer/Footer";
import "./home.css"
import Header from "@/components/Header/Header";


export default function Home() {
    useEffect(() => {
        gsap.fromTo(".hero__bg",{scale:.95,opacity:.0},{scale:1,duration: 2,ease: "power2.out",opacity:1});
        gsap.fromTo(".hero__content",{opacity: 0,x: -100,},{opacity: 1,x: 0,duration: 1,ease: "power3.out",});
        gsap.fromTo(".principles__header",{opacity:0,y:40},{opacity:1,y:0,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".principles__header",start:"top 80%"}})
        gsap.fromTo(".principles__item",{opacity:0,y:40},{opacity:1,y:0,duration:1,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".principles__item",start:"top 80%"}})
        gsap.fromTo(".bidding__container-anim",{opacity:0,x:-100},{opacity:1,x:0,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".bidding__container",start:"top 60%"}})
        gsap.fromTo(".bidding__bg",{scale:1.1},{scale:1,delay:.1,duration:1,ease:"power3.out",scrollTrigger:{trigger:".bidding__container",start:"top 60%"}})
        gsap.fromTo(".how-it-works__header",{opacity:0,y:40},{opacity:1,y:0,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".how-it-works__header",start:"top 80%"}})
        gsap.fromTo(".how-it-works__step",{opacity:0},{opacity:1,duration:1,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".how-it-works__steps",start:"top 60%"}})
        gsap.fromTo(".how-it-works__step-content",{y:40},{y:0,duration:1,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".how-it-works__steps",start:"top 60%"}})

        gsap.fromTo(".how-it-works__line_main",{transform:"translate(100px , 6px) scaleX(0%)"},{transform:"translate(100px , 6px) scaleX(100%)",duration:1.5,ease:"power1.inOut",scrollTrigger:{trigger:".how-it-works__steps",start:"top 60%"}})
        gsap.fromTo(".onboarding__content",{opacity:0,x:-100},{opacity:1,x:0,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".onboarding__content",start:"top 60%"}})
        gsap.fromTo(".onboarding__visual",{yPercent:100},{yPercent:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".onboarding__content",start:"top 60%"}})
        
        const path = document.querySelector(".svg-line path");
        const length = path.getTotalLength();

        gsap.set(path, {strokeDasharray: length,strokeDashoffset: length});
        gsap.to(path, {strokeDashoffset: 0,duration: 2,ease: "power3.out",scrollTrigger: {trigger: ".onboarding__content",start: "top 60%",}});
        

    }, []);
  return (
    <>
    <Header/> 
    <main>
        <section className="hero">
            <img src="/home/hero-bg.jpg" alt="" className="hero__bg" />

            <div className="hero__content-wr">
                <div className="hero__content">
                    <div className="hero__badge-row">
                        <div className="hero__circle">
                            <div className="hero-circle--state"></div>
                            <div className="hero-circle--active"></div>
                        </div>
                        <p className="hero__badge-text">Dealers live in lanes right now</p>
                    </div>

                    <div className="hero__text-block">
                        <h1 className="hero__title">
                            The live auction floor,<br/>
                            <span> built for dealers </span>
                        </h1>
                        <p className="hero__description">
                            Real-time bidding and digital sales solutions for dealers, fleets and enterprise partners.
                        </p>
                    </div>

                    <div className="hero__actions">
                        <button className="hero__button hero__button--primary">
                            <p className="hero__button-text">Connect to LiveLane</p>
                            <svg className="hero__button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33334 8H12.6667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 3.3335L12.6667 8.00016L8 12.6668" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>


                        </button>

                        <button className="hero__button hero__button--secondary">List a Vehicle</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="principles">
            <div className="principles__container">

                <div className="principles__header">
                    <p className="principles__label">Our 3 Pillars</p>
                    <h2 className="principles__title">
                        <span>The principles powering</span>
                        <span>every lane</span>
                    </h2>
                </div>

                <div className="principles__list">

                    <div className="principles__item">
                        <img src="/home/pil-photo1.png" className="principles__icon" />
                        <div className="principles__content">
                            <h6 className="principles__item-title">Transparency</h6>
                            <p className="principles__item-text">
                                Full condition reports, verified history, and clear bidding — no surprises on either side of the lane.
                            </p>
                        </div>
                    </div>

                    <div className="principles__item">
                        <img src="/home/pil-photo2.jpg" className="principles__icon" />
                        <div className="principles__content">
                            <h6 className="principles__item-title">Competitive Pricing</h6>
                            <p className="principles__item-text">
                                Dealer-to-dealer market dynamics with capped fees that keep your margins intact.
                            </p>
                        </div>
                    </div>

                    <div className="principles__item">
                        <img src="/home/pil-photo3.jpg" className="principles__icon" />
                        <div className="principles__content">
                            <h6 className="principles__item-title">Simplicity</h6>
                            <p className="principles__item-text">
                                One screen, one click to bid. Built for the floor — not for software trainers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bidding">
            <img src="/home/bidding-bg.png" className="bidding__bg" />
            <div className="bidding__container">
            <div className="bidding__container-anim">
                <div className="bidding__header">
                    <p className="bidding__label">Solutions</p>
                    <h2 className="bidding__title">
                        Bidding & Sales for Automotive Partners
                    </h2>
                    <p className="bidding__description">
                        One platform covering every step of the wholesale workflow from sourcing to settlement.
                    </p>
                </div>

                <ul className="bidding__list">

                    <li className="bidding__item">
                        <img src="/home/arrow.png" alt="arrow" className="bidding__icon" />
                        <p className="bidding__text">Live auctions</p>
                    </li>

                    <li className="bidding__item">
                        <img src="/home/arrow.png" alt="arrow" className="bidding__icon" />
                        <p className="bidding__text">Buy now</p>
                    </li>

                    <li className="bidding__item">
                        <img src="/home/arrow.png" alt="arrow" className="bidding__icon" />
                        <p className="bidding__text">1 weekly auction</p>
                    </li>

                    <li className="bidding__item">
                        <img src="/home/arrow.png" alt="arrow" className="bidding__icon" />
                        <p className="bidding__text">Buyer protection</p>
                    </li>

                </ul>

                <div className="bidding__actions">
                    <button className="bidding__button bidding__button--brow">Browse Auctions</button>
                    <button className="bidding__button bidding__button--secondary">Sell a Vehicle</button>
                </div>
            </div>
            </div>
        </section>
        <section className="how-it-works">
            <div className="how-it-works__container">

                <div className="how-it-works__header">
                    <p className="how-it-works__label">How It Works</p>
                    <h2 className="how-it-works__title">Four steps to the floor</h2>
                </div>

                <div >


                    <div className="how-it-works__steps">
                    <div className="how-it-works__line_main"></div>
                        <div className="how-it-works__step">

                            <div className="how-it-works__step-visual">
                                <div className="bodtka bodFirst"></div>
                                <div className="how-it-works__line polosa"></div>
                                <img src="/home/how-icon1.png" alt="icon" className="how-it-works__icon" />
                            </div>

                            <div className="how-it-works__step-content">
                                <p className="how-it-works__step-label">STEP 01</p>
                                <h6 className="how-it-works__step-title">Join Now</h6>
                                <p className="how-it-works__step-text">
                                    Create your dealer account in minutes.
                                </p>
                            </div>

                        </div>

                        <div className="how-it-works__step">
                            <div className="how-it-works__step-visual">
                                <div className="bodtka"></div>
                                <div className="how-it-works__line polosa"></div>
                                <img src="/home/how-icon2.png" alt="icon" className="how-it-works__icon" />
                            </div>

                            <div className="how-it-works__step-content">
                                <p className="how-it-works__step-label">STEP 02</p>
                                <h6 className="how-it-works__step-title">Get Approved</h6>
                                <p className="how-it-works__step-text">
                                    Verify your license to buy or sell.
                                </p>
                            </div>
                        </div>

                        <div className="how-it-works__step">
                            <div className="how-it-works__step-visual">
                                <div className="bodtka"></div>
                                <div className="how-it-works__line polosa"></div>
                                <img src="/home/how-icon3.png" alt="icon" className="how-it-works__icon" />
                            </div>

                            <div className="how-it-works__step-content">
                                <p className="how-it-works__step-label">STEP 03</p>
                                <h6 className="how-it-works__step-title">Connect Weekly</h6>
                                <p className="how-it-works__step-text">
                                    Tune into live auction lanes.
                                </p>
                            </div>
                        </div>

                        <div className="how-it-works__step">
                            <div className="how-it-works__step-visual">
                                <div className="bodtka bodLast"></div>
                                <div className="how-it-works__line polosa"></div>
                                <img src="/home/how-icon4.png" alt="icon" className="how-it-works__icon" />
                            </div>

                            <div className="how-it-works__step-content">
                                <p className="how-it-works__step-label">STEP 04</p>
                                <h6 className="how-it-works__step-title">Purchase or Sell</h6>
                                <p className="how-it-works__step-text">
                                    Bid, win, and move metal with confidence.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        <section className="onboarding">
            <svg className="svg-line" width="1014" height="601" viewBox="0 0 1014 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-202.316 190.691C19.4734 332.114 509.228 530.846 693.932 194.388C924.811 -226.185 305.806 -376.056 164.081 113.454C22.3561 602.964 760.464 918.451 982.162 309.094" stroke="#0C1220" stroke-opacity="0.7" stroke-width="61.7891" stroke-linecap="round"/>
            </svg>

            <div className="onboarding__content">
                <h2 className="onboarding__title">Get on the floor</h2>
                <p className="onboarding__description">
                    Onboarding in under 24 hours. Verified dealer license required.
                </p>
                 <div className="onboarding__actions">
                    <button className="onboarding__button onboarding__button--join">Join Now</button>
                    <button className="onboarding__button onboarding__button--secondary">Book a demo</button>
                </div>
            </div>

            <div className="onboarding__visual">
                <img src="/home/mobile1.png" alt="mobile" className="onboarding__img onboarding__img-first" />
                <img src="/home/mobile2.png" alt="mobile" className="onboarding__img onboarding__img-twise" />
            </div>
        </section>
    </main>
    <Footer/> 
    </>
  );
}