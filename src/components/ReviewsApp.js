import React,{useState} from 'react'
import './ReviewsApp.css'
import ReviewsItem from './ReviewsItem'
const reviewsList = [
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
      username: 'Wade Warren',
      companyName: 'Rang',
      description:
        'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
      username: 'Adrian Williams',
      companyName: 'WheelO',
      description:
        'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
      username: 'Sherry Johnson',
      companyName: 'MedX',
      description:
        'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
      username: 'Ronald Jones',
      companyName: 'Infinos Tech',
      description:
        'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
    },
  ]
function ReviewsApp() {
    const [activeItem,setActiveItem] = useState(0);
    const onFetchDetails=()=>{
        const{imgUrl,username,companyName,description} = reviewsList[activeItem]
        return {imgUrl,username,companyName,description}
    }
    const onLeftClick=()=>{
        if(activeItem > 0){
            setActiveItem(prevState=>prevState - 1)
            
        }
    }
    const onRightClick=()=>{
        if(activeItem < reviewsList.length -1){
            setActiveItem(prevState => prevState + 1)
            
        }
    }
  return (
    <div className='main-background'>
      <h1 className="main-heading">Reviews</h1>
        <div className="review-container">
          <button onClick={onLeftClick} >
            <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png " alt="left-arrow"/>  
          </button>
          <ReviewsItem userDetails={onFetchDetails()}/>
          <button onClick={onRightClick} >
            <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right-arrow"/>
          </button>
        </div>
    </div>
  )
}

export default ReviewsApp
