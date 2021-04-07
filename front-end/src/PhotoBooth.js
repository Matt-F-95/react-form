import React, { useState } from 'react';
import './App.css';
import Webcam from "react-webcam";
import Slider from './Slider'
import SidebarItem from './SidebarItem'
import PhotoBoothImage from './images/photo_booth_img.png';

const DEFAULT_OPTIONS = [
        {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
        },
        {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
        },
        {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
        },
        {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
        }
]
const STICKER = [
        {
        name: 'Sticker 1',
        property: 'Sticker 1',
        },
        {
        name: 'Sticker 2',
        property: 'Sticker 2',
        
        },
        {
        name: 'Sticker 3',
        property: 'Sticker 3',
        
        },
        {
        name: 'Sticker 4',
        property: 'Sticker 4',
        
        },
        {
        name: 'Sticker 5',
        property: 'Sticker 5',
        
        },
        {
        name: 'Sticker 6',
        property: 'Sticker 6',
        
        }
]

function PhotoBooth() {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const [sticker, setStickers] = useState(STICKER)
    const selectedOption = options[selectedOptionIndex]
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        }, [webcamRef, setImgSrc]);
    
    function handleSliderChange({ target }) {
        setOptions(prevOptions => {
            return prevOptions.map((option, index) => {
            if (index !== selectedOptionIndex) return option
            return { ...option, value: target.value }
            })
        })
        }

    function handleStickerChange({ target }) {
        setStickers(prevOptions => {
            return prevOptions.map((option, index) => {
            if (index !== selectedOptionIndex) return option
            return { ...option, value: target.value }
            })
        })
        }
    
    function getImageStyle() {
        const filters = options.map(option => {
        return `${option.property}(${option.value}${option.unit})`
        })
    
        return { filter: filters.join(' ') }
    }
    
        console.log(getImageStyle())
    

	return (
		<div className="webCanvas" id ="webCanvas">
			<div className="app__container">
            <p className="text-5xl my-10">Milk Photobooth</p>
            <div className="flex lg:flex-row flex-col my-4">
                <div className ="lg:w-1/2 w-full m-4 flex items-center">
                    <img width="500" height="auto" id="photobooth_image" className="m-auto" src={PhotoBoothImage} alt=""/>
                </div>
                <div className ="lg:w-1/2 w-full m-4 p-2">
                    <h1 className="text-3xl text-center  mb-1">How to use the Photobooth</h1>
                        <ol className="instruction_list p-6 text-center">
                            <li className="leading-relaxed my-2 text-base">Click on the Photobooth Icon to play</li>
                            <li className="leading-relaxed my-2 text-base">Enter you details to enter the contest</li>
                            <li className="leading-relaxed my-2 text-base">Select your favorite filter to click images</li>
                            <li className="leading-relaxed my-2 text-base">Show the most active and healthy lifestyle in order to win the contest</li>
                            <li className="leading-relaxed my-2 text-base">Submit your picture to Photobooth contest </li>
                            <li className="leading-relaxed my-2 text-base">Click more photos to increase the chances to win </li>
                        </ol>
                </div> 
                </div>
            <div className ="webcam_section w-full ">
                <div className="webcam__left ">
                <Webcam
                        audio={false}
                        ref={webcamRef}
                        muted
                        autoPlay
                        screenshotFormat="image/jpeg"
                        className="app__videoFeed main-image w-full"
                        style={getImageStyle()}
                    />
                </div>
                <div className ="filter-right "> 
                    <div className="top-filters w-full">
                        <h1 className="text-2xl">Filters</h1>
                        <div className="sidebar ">
                            {options.map((option, index) => {
                                return (
                                    <SidebarItem
                                    key={index}
                                    name={option.name}
                                    active={index === selectedOptionIndex}
                                    handleClick={() => setSelectedOptionIndex(index)}
                                        />
                                    )
                                    })}
                            </div>
                            <Slider
                                min={selectedOption.range.min}
                                max={selectedOption.range.max}
                                value={selectedOption.value}
                                handleChange={handleSliderChange}
                            />
                        
                        </div>

                    <div className="bottom-filter w-full">
                    {sticker.map((sticker, index) => {
                                return (
                                    <SidebarItem
                                    key={index}
                                    name={sticker.name}
                                        />
                                        
                                    )
                                    })}
                    </div>
                    </div>
                </div>
                
                
                {imgSrc && (
                    <img
                    src={imgSrc}
                    width ={150}
                    height ={150}
                    alt="webcam"
                    className = "img-stored"
                    />
                )}
			</div>
			<div className="app__input">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={capture}>Capture photo</button>
			</div>
            
        
		</div>
	);
}



export default PhotoBooth;