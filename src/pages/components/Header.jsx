import { useState } from "react";

import logo from '../../assets/logo-web.svg';
import { RxHamburgerMenu } from "react-icons/rx"
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramLine} from "react-icons/ri"
import { BsFacebook, BsSearch } from "react-icons/bs"
import { MdPhone } from 'react-icons/md'

import { WebMenu } from './WebMenu';
import { Contacts } from "./Contacts";
import { Address } from "./Address";

export function Header(){ 

    const [target, setTarget] = useState('')
    const [element, setElement] = useState('');
    const [visible, setVisible] = useState(false);
    const [toggleShow, setToggleShow] = useState('hidden')
    const [display, setDisplay] = useState('none');
    const [contactList, setContactList] = useState([]);
    const [description, setDescription] = useState('');

    function showSearchBar(){
        setElement("search-input")
        setVisible(!visible)

        if(visible){
            setToggleShow('hidden');
        } else {
            setToggleShow('visible');
        }    

        if(element){
            setDisplay('flex')
            document.getElementById(element).style.visibilty = toggleShow;
            document.getElementById(element).style.display = display;
            setElement("")
        }
    }

    function showMobileMenu(){
       
        setElement('web-menu');
        setVisible(!visible);

        if(visible){
            setToggleShow('hidden');
        } else {
            setToggleShow('visible');
        }
        setDisplay('flex')

        if(element){
            document.getElementById(element).style.visibility = toggleShow;
            document.getElementById(element).style.display = display;
        }
    }

    function showSocialMediaList(e){

        if (target !== '') {
            setTarget('');
        }

        setTarget(e.target.id);
        setVisible(!visible);
        
        if(visible){
            setToggleShow('hidden');
        } else {
            setToggleShow('visible');
        }

        if (target === "instagram") {

            setContactList([
                {contact: "@pedreiracarrascoza", link:"https://www.instagram.com/pedreiracarrascoza"},
                {contact: "@agrocar.remineralizador", link:"https://www.instagram.com/agrocar.remineralizador"}
                ]);
                setDescription('Clique para seguir');

        } else if(target === "facebook") {

            setContactList([{contact: "pedreiracarrascoza", link:"https://www.facebook.com/pedreiracarrascoza"}]);
            setDescription('Clique para curtir a página');

       } else if (target === "phone") {

            setContactList([{contact:"(16)3951-1710", link:"tel:+1639511710"}]);
            setDescription('Ligue para a Pedreira Carrascoza');

        }
                
        if(contactList){
            setDisplay("flex")
            document.getElementById('popup').style.visibility = toggleShow;
            document.getElementById('popup').style.display = display;            
        }
    }

    return (        
            <header className="md:flex fixed z-10 px-1 md:px-4 md:py-1 w-full md:w-screen h-20 md:h-[4.5rem] bg-slate-200">
                <a href="/">
                    <img className="z-40 ml-12 md:ml-2 mt-2 w-36 md:w-44" src={logo} alt="Pedreira Carrascoza" title="Pedreira Carrascoza" />
                </a>                          

                <div className="absolute z-10 top-10 md:top-8 right-2 md:right-8 gap-1 inline-flex md:flex">
                        <RiInstagramLine  
                            id="instagram"
                            size={24} 
                            alt="Perfis do Instagram da Pedreira Carrascoza" 
                            title="Instagram da Pedreira Carrascoza e do Agrocar"
                            className="cursor-pointer w-9 md:w-7 h-9 md:h-7"
                            onClick={showSocialMediaList}
                        />
                        <BsFacebook 
                            id="facebook"
                            size={24} 
                            alt="Perfis do Facebook da Pedreira Carrascoza" 
                            title="Facebook da Pedreira Carrascoza e do Agrocar"
                            className="cursor-pointer w-9 md:w-6 h-9 md:h-6"
                            onClick={showSocialMediaList}
                        />
                        <FaMapMarkerAlt 
                            id="location"
                            alt="Endereço da Pedreira Carrascoza"
                            title="Endereço da Pedreira Carrascoza"
                            className="cursor-pointer w-9 md:w-6 h-9 md:h-6"
                            onClick={showSocialMediaList}    
                        />
                        <MdPhone
                            id="phone"
                            
                            alt="Endereço da Pedreira Carrascoza"
                            title="Endereço da Pedreira Carrascoza"  
                            className="cursor-pointer w-10 md:w-6 h-10 md:h-6" 
                            onClick={showSocialMediaList}
                        />                
                </div>

                <div id="popup" className="hidden">
                    {(target === 'location') && <Address />}
                    {(target !== 'location') && <Contacts contactsList={contactList} title={description} />}                    
                </div>
                
                    <div>            
                        <nav>
                            <div className="flex flex-col">
                                <button className="absolute z-10 top-4 left-2 md:hidden" onClick={(showMobileMenu)}>
                                    <RxHamburgerMenu size={32}/>                              
                                </button>

                               <div id="web-menu" className="hidden md:flex absolute md:mt-8 md:left-56 bg-slate-200 md:p-0 p-4">
                                <ul className="flex flex-col md:flex-row list-none uppercase sm:w-screen text-xl md:text-base cursor-pointer"> 
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">                               
                                        <WebMenu menuOption={ {url:"#", description: 'Início'} } />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu 
                                            menuOption={ {url : '#', description: 'Quem Somos', id:'whoarewe'} }
                                            subMenu={ 
                                                [
                                                    { url: '#sobre-nos', description: 'Sobre nós' },
                                                    { url: '#missao', description: 'Missão' },
                                                    { url: '#qualidade', description: 'Qualidade'}
                                                ] 
                                            }
                                        />
                                    </li>                                  
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu
                                            menuOption={{url: '/#produtos', description: 'Produtos', id:'products'}}
                                            subMenu={
                                                [
                                                    {url: '/#rachao', description: 'Rachão'},
                                                    {url: '/#brita', description: 'Brita'},
                                                    {url: '/#pedrisco', description: 'Pedrisco'},
                                                    {url: '/#bica', description: 'Bica'},
                                                    {url: '/#areia', description: 'Areia'}
                                                ]
                                            }
                                        />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu menuOption={{url:'/#remineralizador', description: 'Remineralizador'}} />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu
                                            menuOption={{url:'#', description:'Localização', id:'location'}}
                                            subMenu={
                                                [
                                                    {url:'/#cidades-atendidas', description:'Cidades Atendidas'},
                                                    {url:'/#encontre-nos', description:'Encontre-nos'}
                                                ]
                                            }
                                        />
                                    </li>
                                    <li className="md:px-4 hover:bg-orange-400 hover:text-white duration-200">
                                        <WebMenu  menuOption={{url:'/#contato', description:'Contato'}}/>  
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
                        {/*<button id="search-input" className="-left-24 border-none" onClick={showSearchBar}>
                            <BsSearch size={24} alt="Pesquise em nosso site" title="Pesquise em nosso site" />
                                        </button>*/}                    
                                
                    </div>                                   
                </div>
            </header>                   
    )
}