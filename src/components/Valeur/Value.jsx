import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
import { useState } from 'react'

const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className='paddings innerWidth flexCenter v-container'>

            {/* côté gauche*/}
            <div className='v-left'>
                <div className='image-container'>
                    <img src='./Value.png' alt=''/>
                </div>
            </div>

            {/* côté gdroit*/}
            <div className='flexColStart v-right'>
                <span className='orangeText'>Pourquoi Dubai ?</span>
                <span className='primaryText'>Un rêve qui devient réalité </span>
                <span className='secondaryText'>Vous optez pour une transition en douceur vers une nouvelle vie excitante à Dubai, la ville de l'opportunité. 
                      <br />
                      Nous sommes là pour rendre votre rêve d'expatriation une réalité. Contactez-nous dès aujourd'hui pour commencer cette aventure exceptionnelle.
                </span>


                <Accordion
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((item, i) => {
                                const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
            
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>


                                            <AccordionItemState>
                                                {({expanded})=> 
                                                expanded 
                                                ? setClassName("expanded") 
                                                : setClassName("collapsed")
                                            }   

                                            </AccordionItemState>

                                            <div className='flexCenter icon'>{item.icon}</div>

                                            <span className='primaryText'>
                                                {item.heading}
                                            </span>
                                            
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    
                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>

        </div>    
    </section>   
  )
}

export default Value