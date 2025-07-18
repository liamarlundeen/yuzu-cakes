import "../styles/about.css"
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">ABOUT US</h1>
            <div className="section-divider"></div>
            <div>
                <h1 className="about-headers right-side">WHAT IS YUZU CAKE?</h1>
                <div className="Container">
                    <Image 
                        src="https://pacacc.org/wp-content/uploads/2021/05/2114880_gray-semi-transparent-grey-box-hd-png-download.png" 
                        alt="Yuzu cake placeholder image"
                        className="imagePlaceholder top"
                        width={400}
                        height={300}
                    />
                    <p className="right-side close">
                        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
            <div className="menu-button" id="buttonAlignment">
                <Link href="/menu">
                    <button className="ovalButton">OUR MENU</button>
                </Link>
            </div>
            <div>
                <h1 className="about-headers left-side">ABOUT THE OWNER</h1>
                <div className="test">
                    <p className="left-side">
                        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <Image 
                        src="https://pacacc.org/wp-content/uploads/2021/05/2114880_gray-semi-transparent-grey-box-hd-png-download.png" 
                        alt="Owner placeholder image"
                        className="imagePlaceholder bottom"
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}