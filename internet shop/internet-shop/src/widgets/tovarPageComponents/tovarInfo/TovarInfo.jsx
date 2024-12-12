    import React, { useState } from 'react'
    import './tovarInfo.scss'
    import shueImg1 from '../../img/image.png'
    import shueImg2 from '../../img/image (1).png'
    import shueImg3 from '../../img/image (2).png'
    import shueImg4 from '../../img/image (3).png'
    export const TovarInfo = ({activeLike, like, }) => {
        const [showDescription, setShowDescription] = useState(true)
        const [activeImage, setActiveImage] = useState(shueImg1)

        const description = ["Whether you're shopping for yourself or looking for the perfect gift, we've got you covered. Start exploring now and experience the joy of effortless online shopping!","Shop with Us Today!"]
        const images = [shueImg2, shueImg3, shueImg4]
        return (
        <div className='container'>
            <div className="tovarInfo">
                <div className="flex">
                    <div className="col-4">
                        <img src={activeImage} className="shueImg1" />
                        <div className="shueImgBox">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt='' onClick={() => setActiveImage(image)} className={`shueImg ${activeImage === image ? 'active' : ''}`}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-4">
                        <h3>ADERERROR</h3>
                        <h2>Nike Sportswear Metro Puffer</h2>
                        <h2>98 600$</h2>
                        <h4>Color</h4>
                        <button className="color-btn red"></button>
                        <button className="color-btn yellow"></button>
                        <button className="color-btn green"></button>
                        <button className="color-btn blue"></button>
                        <button className="color-btn pink"></button>
                        <button className="color-btn gray"></button>

                        <h4>Size</h4>
                        <button className='size-btn'>M</button>
                        <button className='size-btn'>L</button>
                        <button className='size-btn'>XL</button>
                        <br />
                        <div className="flex flex-btn">
                        <button className='add-to-bag'>Add To Bag</button>
                        <button onClick={like} className={activeLike}></button>
                        </div>

                        <div className="flex details">
                            <a onClick={() => setShowDescription(true)} href='#'>Description
                                <hr />
                            </a>
                            <a  onClick={() => setShowDescription(false)} href='#'>Details
                                <hr />
                            </a>
                            <a  onClick={() => setShowDescription(false)} href='#'>Style
                                <hr />
                            </a>
                            <a  onClick={() => setShowDescription(false)} href='#'>Model
                                <hr />
                            </a>
                        </div>
                        {showDescription && (
                        <div className="description">
                            {description.map((item, index) => (
                                <p className='description-text' key={index}>{item}</p>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
        )
    }

