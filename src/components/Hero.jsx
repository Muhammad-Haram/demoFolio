import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="bg-image-container" style={{ position: "relative" }}>
                <div className="bg-gradient-container"></div>
                <div className="width-container">
                    <article className="wrapper wrapper--vertical">
                        <div className="marquee marquee--vertical">
                            <div className="marquee__group">
                                <img className="marquee-img" src='/img/project1.png' alt="" />
                                <img className="marquee-img" src='/img/project1.png' alt="" />
                                <img className="marquee-img" src='/img/project1.png' alt="" />
                                <img className="marquee-img" src='/img/project1.png' alt="" />
                                <img className="marquee-img" src='/img/project1.png' alt="" />
                            </div>

                            <div aria-hidden="true" className="marquee__group">
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            </div>
                        </div>
                        <div className="marquee marquee--reverse marquee--vertical">
                            <div className="marquee__group">
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            </div>

                            <div aria-hidden="true" className="marquee__group">
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            <img className="marquee-img" src='/img/project1.png' alt="" />
                            </div>
                        </div>
                    </article>
                    <div className="hero-content">
                        <p className="hero-heading">Build a Winning Team: Assess. Interview. Develop.</p>
                        <p className="hero-paragraph">
                            Talent acquisition and management tools designed to improve your talent outcomes and with your prospects in mind.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero