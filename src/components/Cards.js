import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className ='cards'>
      <h1>Everything You Need To Host in Style</h1>
      <div className='cards--conrtainer'>
        <div className='cards--wrapper'>
            <ul className='cards--items'>
                <CardItem 
                src='images/TableSetUp.jpg'
                text='Explore Kits'
                label='All Inclusive'
                path='/Products'
                />
                <CardItem 
                src='images/CheeseBoard.jpg'
                text='Explore Table Settings'
                label='Decor'
                path='/Products'
                />
            </ul>
            <ul className='cards--items'>
                <CardItem 
                src='images/Board.jpg'
                text='Explore Add Ons'
                label='Additional'
                path='/Products'
                />
                <CardItem 
                src='images/Drink.jpg'
                text='Explore Drinks'
                label='Recipes'
                path='/Products'
                />
                <CardItem 
                src='images/Bubbly.jpg'
                text='Explore Sets'
                label='Dishware'
                path='/Products'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
