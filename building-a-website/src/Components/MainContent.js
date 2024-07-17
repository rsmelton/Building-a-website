import React from 'react';
import './MainContent.css';
import '../utils.css';
import coffeeHouseImg from '../images/coffeeHouse.png';
import welcomeScreenImg from '../images/welcomeScreen.png';

function MainContent() {
  return (
    // So here we will have one container that holds other containers
    <main>
        <img src={welcomeScreenImg} alt='Welcome Screen' width={1000} height={600} />
        <div id='about' className='container'>
            <div className='description_container kanit-light'>
                {/* <h2>Dragon's Brew</h2> */}
                <p>The ambiance is cozy yet enigmatic, with soft instrumental music playing in the background, creating a serene atmosphere perfect for contemplation or conversation. The menu boasts a variety of unique blends and brews inspired by different dragon lore from around the world. You can savor a "Fire Dragon Espresso," a bold and intense shot with a spicy kick, or perhaps indulge in a "Frost Dragon Latte," a creamy concoction infused with mint and white chocolate.</p>
                <p>The baristas, clad in aprons adorned with dragon motifs, are friendly and knowledgeable, ready to guide you through the menu and recommend the perfect drink to suit your mood. Patrons are often seen relaxing with their laptops or books, enjoying the free Wi-Fi and the comforting warmth of their dragon-emblazoned ceramic mugs.</p>
                <p>Dragons Brew isn't just a coffee shop; it's a sanctuary where myth and reality blend seamlessly, where every sip transports you on a journey through legends and fantasies. Whether you're seeking a quick caffeine fix or a tranquil retreat from the urban hustle, Dragons Brew promises an unforgettable experience steeped in both magic and the art of coffee.</p>
                <p>Indoor and Outdoor seating is available.</p>
                <p><b>Pickup or Delivery is available thru Uber Eats or Doordash.</b></p>
            </div>
            <div className='info_container kanit-light'>
                <h3>PHONE NUMBER</h3>
                <h4>(256)-123-4567</h4>
                <h3>LOCATION</h3>
                <h4>TBA</h4>
                <h3>HOURS</h3>
                <h4>7:00 am - 4:00 pm</h4>
                <h4>Everyday</h4>
            </div>
        </div>
        <hr />
        <div className='container'>
            <img className='coffee_house_image' src={coffeeHouseImg} alt='coffee house' width={500} height={500}/>
            <div className='reviews_container kanit-light'>
                <h3>Name: Robert Melton, Review: ⭐️⭐️⭐️⭐️⭐️</h3>
                <p>Dragons Brew is my go-to spot for a perfect cup of coffee! The ambiance is cozy with just the right touch of dragon-themed decor that adds a whimsical charm. The baristas are friendly and knowledgeable, always recommending new blends to try. Their Dragon's Roast is my favorite; it's rich and smooth, perfect for starting my day right!</p>
                <h3>Name: Deondre North, Review: ⭐️⭐️⭐️⭐️⭐️</h3>
                <p>What a gem! Dragons Brew not only serves amazing coffee but also creates a welcoming atmosphere that feels like a home away from home. The moment you step in, you're greeted with the aroma of freshly ground beans and a smile from the staff. I love their attention to detail, from the unique dragon art on the walls to the carefully curated menu. Whether you're in for a quick espresso or a leisurely afternoon latte, this place delivers excellence every time.</p>
                <h3>Name: Brandon Jones, Review: ⭐️⭐️⭐️⭐️⭐️</h3>
                <p>Dragons Brew has quickly become my favorite coffee haunt in town. The quality of their coffee is unmatched, sourced from the best beans and expertly brewed to perfection. It's evident that they care about the craft, as each cup is consistently delicious. Beyond the coffee, the staff here truly makes the experience exceptional. They're not just baristas; they're passionate about coffee and always willing to share their knowledge. Whether you're a coffee aficionado or simply enjoy a good cup, Dragons Brew is a must-visit!</p>
            </div>
        </div>
        {/* <hr /> */}
    </main>
  );
}

export default MainContent;