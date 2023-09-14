import React from 'react';
import './Hero.css';
import {TiLocation} from 'react-icons/ti';
import CountUp from 'react-countup';
import {motion, spring} from 'framer-motion';


const Hero = () => {
  return (
   <section className='hero-wrapper'>
    <div className='paddings innerWidth flexCenter hero-container '>

        {/* Côté gauche */}
        <div className='flexColStart hero-left'>            
            <div className='hero-title'>               
                <motion.h1
                initial={{y: '2rem', opacity: 0}}
                animate={{y: 0,opacity: 1}}
                transition={{
                  duration: 2,
                  type: 'spring'
                }}
                > Découvrir <br/>
                     un bien <br/>
                     plus adapté
                </motion.h1>
            </div>

            <div className='flexColStart hero-des'>
                <span className='secondaryText'> Trouver très facilement une variété de biens immobiliers qui vous conviennent </span>
                <span className='secondaryText'> Oubliez toutes les difficultés liées à la recherche d'une résidence pour vous </span>
            </div>

            <div className='flexCenter search-bar'>
            <TiLocation color='var(--blue)' size={25}/>
            <input type='text' />
            <button className='button'>Rechercher</button>
         
            </div>

            <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Visite l'an dernier</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Clients Heureux</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} /> <span>+</span>
              </span>
              <span className="secondaryText">Depuis tant d'années</span>
            </div>
          </div>
        </div>

        {/* Côté droit */}
        <div className='flexCenter hero-right'>
            <motion.div
            initial={{x: '7rem', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 4,
              type: 'spring'
            }}
            className='image-container'>

                <img src='./hero-image.png' alt='' />

            </motion.div>
        </div>
    </div>
   </section>
  )
}

export default Hero