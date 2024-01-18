import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div class = "project shadow-xl">
    <img className="object-fit-contain" src={require("../../../assets/images/projects/hackoverflowv3.png")} alt=""/>
    <div class="card-content">
      <h2>
        Card Heading
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <a href="#" class="button refer">
        Find out more 
        <span class="material-symbols-outlined">
        &#10140;
        </span>
      </a>
    </div>
  </div>
  )
}

export default Card
