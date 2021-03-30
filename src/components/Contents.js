import React from 'react'
import ContentItem from './ContentItem'
import './Contents.css'

function Contents() {
    return (
        <div className="cards">
            <h1>Check out what our site offers!</h1>
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {/* <ContentItem 
                        // src="images/img-9.jpg"
                        text="Make an account today"
                        label="Account"
                        path="/register_login"
                        /> */}
                        <ContentItem 
                        src="pictures/img2.jpg"
                        text="Find out the weather in your area"
                        label="Weather"
                        path="/nearby"
                        />
                        <ContentItem 
                        // src="images/img-2.jpg"
                        text="Meet your friends"
                        label="Chat"
                        path="/chat"
                        />
                    </ul>
                    {/* <ul className="cards__items">
                        <ContentItem 
                        src="images/img-3.jpg"
                        text="Explore the hidden waterfall deep inside the Amzon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <ContentItem 
                        src="images/img-4.jpg"
                        text="Travel through the islands of Bali"
                        label="Luxury"
                        path="/services"
                        />
                        <ContentItem 
                        src="images/img-5.jpg"
                        text="Travel through the islands of Bali"
                        label="Luxury"
                        path="/services"
                        />
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Contents
