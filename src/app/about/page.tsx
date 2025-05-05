import "../styles/about.css"

export default function About() {
    return (
        <div className="min-h-screen bg-white p-8">
            <h1 className="about-title">ABOUT US</h1>
            <div>
                <h1 className = "about-headers right-side">WHAT IS YUZU CAKE?</h1>
                <div className="Container">
                <img src = "https://pacacc.org/wp-content/uploads/2021/05/2114880_gray-semi-transparent-grey-box-hd-png-download.png" className="imagePlaceholder top"></img>
                <p className = "right-side close">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
            <div id="buttonAlignment"> <button className = "ovalButton">OUR MENU</button></div>
            <div>
                <h1 className = "about-headers left-side">ABOUT THE OWNER</h1>
                <div className="test">
                    <p className = "left-side">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <img src = "https://pacacc.org/wp-content/uploads/2021/05/2114880_gray-semi-transparent-grey-box-hd-png-download.png" className="imagePlaceholder bottom"></img>
                </div>
            </div>
        </div>
    );
}