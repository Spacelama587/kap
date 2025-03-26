"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";

import "./archive.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ArchivePage = () => {
  const container = useRef();

  // controls pinning of the source section
  useGSAP(
    () => {
      let pinAnimation;

      const initPinning = () => {
        if (pinAnimation) {
          pinAnimation.kill();
        }

        if (window.innerWidth > 900) {
          pinAnimation = ScrollTrigger.create({
            trigger: ".sticky-archive",
            start: "top top",
            endTrigger: ".gallery",
            end: "bottom bottom",
            pin: ".source",
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        }
      };

      initPinning();

      const handleResize = () => {
        initPinning();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        if (pinAnimation) {
          pinAnimation.kill();
        }
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="archive" ref={container}>
        <section className="archive-hero">
          <div className="container">
            <ShuffleText
              as="h1"
              text="Portfolio 101: Strategic Equity Positioning"
            />
            <div className="archive-hero-img-wrapper">
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <div className="archive-hero-img">
                  <img src="/images/carousel/pexels-photo-273209.jpeg" alt="" />
                </div>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky-archive">
          <div className="archive-col source">
            <div className="container">
              <div className="source-img">
                <img src="/images/carousel/photo-1518186285589-2f7649de83e0.avif" alt="" />
              </div>
              <div className="source-content">
                <p className="primary">[ March 26, 2025 ]</p>
                <h4>Gazing into the distance </h4>
              </div>
            </div>
          </div>
          <div className="archive-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  // JIST: Michael Chen's breakthrough analysis of emerging market equities b y  identifying undervalued companies with strong growth potentia
                </p>
                <p className="secondary">[ Blog Article ]</p>
                <h4>David M</h4>
                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img src="/images/carousel/photo-1592495989226-03f88104f8cc.avif" alt="" />
                  </div>
                  <div className="gallery-row sub-images">
                    <div className="sub-images-col">
                      <img src="/images/carousel/photo-1617761141732-d481912af1a9.avif" alt="" />
                    </div>
                    <div className="sub-images-col">
                      <img src="/images/carousel/photo-1591617870684-6e861e6a48ad.avif" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="value-discovery">
          <div className="container">
            <article className="value-discovery-content">
              <p className="primary">[ Portfolio Innovation — David Kim ]</p>
              <div className="value-discovery-text">
                <p>David Kim's groundbreaking research demonstrates our commitment to identifying exceptional investment opportunities through meticulous fundamental analysis. By focusing on intrinsic value and long-term potential, we consistently uncover market inefficiencies.
                Our approach transcends traditional investment strategies by employing a multi-dimensional analytical framework. We dissect financial statements, market trends, and emerging technological disruptions to build a comprehensive understanding of each potential investment.
                </p>
                <p>Rigorous quantitative models are complemented by qualitative insights, allowing us to identify companies with sustainable competitive advantages and transformative potential. We believe that true value emerges from understanding the intricate ecosystem surrounding each investment opportunity.</p>
                
                <p>By maintaining a disciplined research methodology and an unwavering commitment to long-term value creation, we navigate market complexities with strategic precision. Our portfolio construction is a delicate balance of calculated risk and innovative thinking.</p>

                <p>Demo Artice section ends here</p>
              </div>
            </article>
          </div>
        </section>
        <section className="next-archive">
          <div className="next-archive-bg"></div>
          <div className="marquee-archive">
            <Marquee />
          </div>
          <div className="container">
            <p className="primary">[ Next Article ]</p>
            <div className="next-archive-img">
              <img src="/images/carousel/64c2eabfd6d587f67ee8a1a9_784 x 480 (x2).png" alt="" />
            </div>
            <h2>Macroeconomic Value Strategies</h2>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ArchivePage;
