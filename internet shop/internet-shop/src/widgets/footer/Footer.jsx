import React from 'react';
import './footer.scss'
export const Footer = () => {
    return (
        <div className='container'>
            <footer>
                <div className="flex">
                    <div className="links">
                        <h2>Product</h2>
                        <p>Faur Fur jackets</p>
                        <p>Quitled Jackets</p>
                        <p>Nike Windrunner</p>
                        <p>Leather Jackets</p>
                        <p>Denim Jackets</p>
                    </div>
                    <div className="links">
                        <h2>Use Cases</h2>
                        <p>Web-designers</p>
                        <p>Marketers</p>
                        <p>Small Business</p>
                        <p>Website Builder</p>
                    </div>
                    <div className="links">
                        <h2>Resources</h2>
                        <p>Academy</p>
                        <p>Blog</p>
                        <p>Themes</p>
                        <p>Hosting</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                    <div className="links">
                        <h2>Company</h2>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>FAQs</p>
                        <p>Teams</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <hr />
                <input type="text"placeholder='Enter your email Address' value="" />
                <button>Subscribe</button>
                <h1>Subscribe</h1>
                <h1 className='brand-name'>Shadow Gear</h1>
                <div className="flex">
                    <p className='footer-menu'>Privacy Policy</p>
                    <p className='footer-menu'>Terms of Use</p>
                    <p className='footer-menu'>Sales and Refunds</p>
                    <p className='footer-menu'>Legal</p>
                    <p className='footer-menu'>Site Map</p>
                </div>
            </footer>
        </div>
    );
}
