import React from 'react'


const Cards = (props) => {
  return (
  
  <div>
    <div>
      <h1>INDIAN BEST BATMANS</h1>
       <div className='parent1'>
     <div className='mainBlock'>
        <img src={props.play_load[0].picture} alt="" />
        <h2>{props.play_load[0].Name}</h2>
        <h2>{props.play_load[0].Matches}</h2>
        <h2>{props.play_load[0].Runs}</h2>
        <h2>{props.play_load[0].Average}</h2>
        <h2>{props.play_load[0].Best_score}</h2>
     </div>
     
     <div className="mainBlock">
        <img src={props.play_load[1].picture} alt="" />
        <h2>{props.play_load[1].Name}</h2>
        <h2>{props.play_load[1].Matches}</h2>
        <h2>{props.play_load[1].Runs}</h2>
        <h2>{props.play_load[1].Average}</h2>
        <h2>{props.play_load[1].Best_score}</h2>
     </div>
     <div className="mainBlock">
        <img src={props.play_load[2].picture} alt="" />
        <h2>{props.play_load[2].Name}</h2>
        <h2>{props.play_load[2].Matches}</h2>
        <h2>{props.play_load[2].Runs}</h2>
        <h2>{props.play_load[2].Average}</h2>
        <h2>{props.play_load[2].Best_score}</h2>
     </div>
     <div className="mainBlock">
        <img src={props.play_load[3].picture} alt="" />
        <h2>{props.play_load[3].Name}</h2>
        <h2>{props.play_load[3].Matches}</h2>
        <h2>{props.play_load[3].Runs}</h2>
        <h2>{props.play_load[3].Average}</h2>
        <h2>{props.play_load[3].Best_score}</h2>
     </div>
     <div className="mainBlock">
        <img src={props.play_load[4].picture} alt="" />
        <h2>{props.play_load[4].Name}</h2>
        <h2>{props.play_load[4].Matches}</h2>
        <h2>{props.play_load[4].Runs}</h2>
        <h2>{props.play_load[4].Average}</h2>
        <h2>{props.play_load[4].Best_score}</h2>
     </div>
     </div>
     <div className='parent2'>
     <div className="mainBlock">
        <img src={props.play_load[5].picture} alt="" />
        <h2>{props.play_load[5].Name}</h2>
        <h2>{props.play_load[5].Matches}</h2>
        <h2>{props.play_load[5].Runs}</h2>
        <h2>{props.play_load[5].Average}</h2>
        <h2>{props.play_load[5].Best_score}</h2>
     </div>
     <div className="mainBlock">
        <img src={props.play_load[6].picture} alt="" />
        <h2>{props.play_load[6].Name}</h2>
        <h2>{props.play_load[6].Matches}</h2>
        <h2>{props.play_load[6].Runs}</h2>
        <h2>{props.play_load[6].Average}</h2>
        <h2>{props.play_load[6].Best_score}</h2>
     </div>
     <div className="mainBlock">
        <img src={props.play_load[7].picture} alt="" />
        <h2>{props.play_load[7].Name}</h2>
        <h2>{props.play_load[7].Matches}</h2>
        <h2>{props.play_load[7].Runs}</h2>
        <h2>{props.play_load[7].Average}</h2>
        <h2>{props.play_load[7].Best_score}</h2>
     </div>
     <div className="mainBlock">
        <img src={props.play_load[8].picture} alt="" />
        <h2>{props.play_load[8].Name}</h2>
        <h2>{props.play_load[8].Matches}</h2>
        <h2>{props.play_load[8].Runs}</h2>
        <h2>{props.play_load[8].Average}</h2>
        <h2>{props.play_load[8].Best_score}</h2>
     </div>
     <div className="mainBlock">
        <img src={props.play_load[9].picture} alt="" />
        <h2>{props.play_load[9].Name}</h2>
        <h2>{props.play_load[9].Matches}</h2>
        <h2>{props.play_load[9].Runs}</h2>
        <h2>{props.play_load[9].Average}</h2>
        <h2>{props.play_load[9].Best_score}</h2>
     </div>
     </div>
    </div>
    

    <div>

      <div>
        <div>
          <img src={props.play_load[10].picture} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards