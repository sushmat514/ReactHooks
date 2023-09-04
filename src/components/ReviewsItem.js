import React from 'react'
// import './ReviewsCarousleItem.css'
export default function ReviewsItem(props) {
  const {userDetails} = props
  const {imgUrl,username,companyName,description} = userDetails
  return (
    <div className='review-card-container'>
        <img src={imgUrl} alt = {username}/>
        <h1>{username}</h1>
        <p>{companyName}</p>
        <p>{description}</p>
    </div>
  )
}