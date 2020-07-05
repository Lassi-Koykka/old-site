import React from "react";

type techProps = {
    img?: string,
    alt: string,
    name: string
}

export default function Tech({img, alt, name}: techProps) {
    return(
    <li className="tech">
        <img className="techLogo" src={img} alt={alt}/>
    <span className="techName">{name}</span>
    </li>
    )
}