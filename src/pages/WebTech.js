import React from "react"
import { Link } from "react-router-dom"
import Cards from "../components/Cards"
import DomainCards from "../components/DomainCards"
import Carousel from "../components/Carousel"


export default function WebTech(){
    return(
        <Carousel 
        title="Web Technologies" 
        img1="frontend.png"
        url1="/explore/webtech/frontend" 
        img2="gamedev.png"
        url2="/explore/webtech/gamedev" 
        img3="datasci.png"
        url3="/explore/webtech/datasci" 
        img4="machine.png"
        url4="/explore/webtech/machine"
        img5="backend.png"
        url5="/explore/webtech/backend"
        img6="arvr.png"
        url6="/explore/webtech/arvr"
        img7="technical.png"
        url7="/explore/webtech/technical"
        img8="devops.png"
        url8="/explore/webtech/devops"
        img9="appdev.png"
        url9="/explore/webtech/appdev"
        img10="blockchain.png"
        url10="/explore/webtech/blockchain"
        img11="cyber.png"
        url11="/explore/webtech/cyber"
        img12="quantum.png"
        url12="/explore/webtech/quantum"
        />
        
    )
} 