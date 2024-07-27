import React from 'react';
import './Menu.css';
import '../utils.css';
import dragonsFireLatte from '../images/dragonsFireLatte.png';
import enchantedEspresso from '../images/enchantedEspresso.png';
import frostDragonLatte from '../images/frostDragonLatte.png';
import mysticMatcha from '../images/mysticMatcha.png';
import phoenixFrappuccino from '../images/phoenixFrappuccino.png';
import sorcerersSmoresMocha from '../images/sorcerersSmoresMocha.png';
import unicornColdBrew from '../images/unicornColdBrew.png';
import wizardsWhiteChcolateMocha from '../images/wizardsWhiteChocolateMocha.png';

const Menu = () => {
  return (
      <>
        <h1 className='title'>Menu</h1>
        <div className='menu-container'>
          <div className='cell-container'>
            <img className='cell-item' src={dragonsFireLatte} alt='menu item' />
            <h3>Dragons Fire Latte</h3>
            <p>A spicy twist on a classic latte with a hint of cinnamon and cayenne pepper, topped with a good amount of whipped cream</p>
            <button>Add to order</button>
          </div>
          <div className='cell-container'>
            <img className='cell-item' src={enchantedEspresso} alt='menu item' />
            <h3>Enchanted Espresso</h3>
            <p> A double shot of our finest espresso, served with a twist of lemon and a sprinkling of enchanted edible glitter upon request</p>
            <button>Add to order</button>
          </div>
          <div className='cell-container'>
            <img className='cell-item' src={frostDragonLatte} alt='menu item' />
            <h3>Frost Dragon Latte</h3>
            <p>A freezing cold latte with mint and white chocolate with some whipped cream on top and a drizzle of caramel</p>
            <button>Add to order</button>
          </div>
          <div className='cell-container'>
            <img className='cell-item' src={mysticMatcha} alt='menu item' />
            <h3>Mystic Matcha</h3>
            <p>A vibrant green matcha latte with a touch of vanilla and honey, served with a side of mochi</p>
            <button>Add to order</button>
          </div>
          <div className='cell-container'>
            <img className='cell-item' src={phoenixFrappuccino} alt='menu item' />
            <h3>Phoenix Frappuccino</h3>
            <p>A cool, blended drink with flavors of mango, raspberry, and a hint of chili, topped with whipped cream and a fiery chocolate drizzle</p>
            <button>Add to order</button>
          </div>
          <div className='cell-container'>
            <img className='cell-item' src={sorcerersSmoresMocha} alt='menu item' />
            <h3>Sorcerers Smores Mocha</h3>
            <p>A decadent mocha with toasted marshmallow, graham cracker crumbles, and chocolate drizzle</p>
            <button>Add to order</button>
          </div>
          <div className='cell-container'>
            <img className='cell-item' src={unicornColdBrew} alt='menu item' />
            <h3>Unicorn Cold Brew</h3>
            <p>A magical cold brew coffee infused with lavender and vanilla, served with a swirl of pastel-colored cream on the top</p>
            <button>Add to order</button>
          </div>
          <div className='cell-container'>
            <img className='cell-item' src={wizardsWhiteChcolateMocha} alt='menu item' />
            <h3>Wizards White Chcolate Mocha</h3>
            <p>A creamy white chocolate mocha mixed with a hazelnut mocha topped with whipped cream and a drizzle of caramel and chocolate</p>
            <button>Add to order</button>
          </div>
        </div>
      </>
  );
};

export default Menu;