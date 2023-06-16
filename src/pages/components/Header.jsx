import { useState } from "react";

import logo from '../../assets/logo-web.svg';
import { RxHamburgerMenu } from "react-icons/rx"
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramLine} from "react-icons/ri"
import { BsFacebook } from "react-icons/bs"
import { MdPhone } from 'react-icons/md'

import { WebMenu } from './WebMenu';
import { Contacts } from "./Contacts";

export function Header(){ 

    const [toggleShowMenuItem, setToggleShowMenuItem] = useState('invisible');
    const [toggleShowPopup, setToggleShowPopup] = useState('invisible');
    const [selectedContact, setSelectedContact] = useState('')

    function showMobileMenu(){      


        if(toggleShowMenuItem === 'visible'){
            setToggleShowMenuItem('invisible');
        } else {
            setToggleShowMenuItem('visible');
        }
        console.log(setToggleShowMenuItem)
    }
        
    function showContact(contact){
        setSelectedContact(contact);
        console.log(contact)

        if(toggleShowPopup === 'invisible'){
            setToggleShowPopup('visible');
        } else {
            setToggleShowPopup('invisible');
        }
    }

    function getPositionY(positionBiggerScreen, positionLowerScreen){
        let finalPosition = 0;
        if (screen.width >= 1200){
            finalPosition = positionBiggerScreen
        } else {
            finalPosition = positionLowerScreen
        }
        
        return finalPosition
    }

    return (        
            <header className="md:flex fixed z-10 px-1 md:px-4 md:py-1 w-full md:w-screen h-16 md:h-[4.5rem] bg-slate-200">
                <a href="/">
                    <img className="z-40 ml-12 md:ml-2 mt-2 w-36" src={logo} alt="Pedreira Carrascoza" title="Pedreira Carrascoza" />
                </a>                          

                <div className="absolute z-10 top-6 md:top-8 right-2 md:right-8 gap-1 inline-flex md:flex">
                        <RiInstagramLine  
                            id="instagram"
                            size={24} 
                            alt="Perfis do Instagram da Pedreira Carrascoza" 
                            title="Instagram da Pedreira Carrascoza e do Agrocar"
                            className="cursor-pointer w-7 h-7"
                            onClick={()=>showContact('instagram')}
                        />
                        <BsFacebook 
                            id="facebook"
                            size={24} 
                            alt="Perfis do Facebook da Pedreira Carrascoza" 
                            title="Facebook da Pedreira Carrascoza"
                            className="cursor-pointer w-6 h-6"
                            onClick={()=>showContact('facebook')}
                        />
                        <FaMapMarkerAlt 
                            id="location"
                            alt="Endereço da Pedreira Carrascoza"
                            title="Endereço da Pedreira Carrascoza"
                            className="cursor-pointer w-6 h-6"
                            onClick={()=>showContact('address')}    
                        />
                        <MdPhone
                            id="phone"                            
                            alt="Telefone da Pedreira Carrascoza"
                            title="Telefone da Pedreira Carrascoza"  
                            className="cursor-pointer w-6 h-6" 
                            onClick={()=>showContact('phone')}
                        />                
                </div>

                <div id='popup' className={`${toggleShowPopup}`}>
                    <Contacts target={selectedContact} />                  
                </div>                  

                    <div>            
                        <nav>
                            <div className="flex flex-col">
                                <button className={`absolute z-10 top-6 left-2 md:invisible`} onClick={(showMobileMenu)}>
                                    <RxHamburgerMenu size={28}/>                              
                                </button>

                               <div id="web-menu" className={`${toggleShowMenuItem} md:visible absolute md:mt-8 md:left-56 bg-slate-200 md:p-0 p-4`}>
                                <ul className="flex flex-col md:flex-row list-none uppercase sm:w-screen text-base cursor-pointer"> 
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">                               
                                        <WebMenu menuOption={ { hasChild: false, description: 'Início', positionY: 1} } />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu 
                                            menuOption={ 
                                                {
                                                    description: 'Quem Somos', 
                                                    id:'whoarewe',
                                                    hasChild: true, 
                                                    subMenu:
                                                        [
                                                            { description: 'Sobre nós' , positionY: getPositionY(425,110) },                                                            
                                                            { description: 'Qualidade', positionY: getPositionY(840,960) },
                                                            { description: 'Missão', positionY: getPositionY(1440,2350) }
                                                        ]                                                      
                                                }   
                                            
                                            }
                                        />
                                    </li>                                  
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu
                                            menuOption={
                                                {
                                                    description: 'Produtos', 
                                                    id:'products',
                                                    hasChild: false,
                                                    positionY: getPositionY(1620, 2700)
                                                }
                                            }                                            
                                        />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu menuOption={{ hasChild: false, description: 'Remineralizador', positionY: getPositionY(2300, 4150) }} />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu
                                            menuOption={
                                                {
                                                    url:'#', 
                                                    description:'Localização', 
                                                    id:'location',
                                                    hasChild: true,
                                                    subMenu:
                                                    [
                                                        { description:'Cidades Atendidas', positionY: getPositionY(4825,5300)},
                                                        { description:'Encontre-nos', positionY: getPositionY(5000,5450)}
                                                    ]
                                                }
                                            }                                            
                                            
                                        />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu  menuOption={{ hasChild: false, description:'Contato', positionY: getPositionY(5720,5900) }}/>  
                                    </li>                        
                                </ul>
                                </div>
                            </div>                                                                                          
                    </nav>
                    <div className="absolute inline-flex op-16 md:top-2 right-2 md:right-56 md:mt-8">
                        <input 
                            className="h-6 w-56 md:w-48 text-sm hidden" 
                            type="text" 
                            id="search-input" 
                            placeholder="Procure por" 
                        />                    
                    </div>                                   
                </div>
            </header>                   
    )
}