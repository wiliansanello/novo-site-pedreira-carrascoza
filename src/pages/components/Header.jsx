import { useState } from "react";

import logo from "../../../public/logo-web.svg";
import searchIcon from "../../../public/search-web.svg"
import facebookLogo from "../../../public/facebook-web.svg";
import instagramLogo from "../../../public/instagram-web.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx"

import { WebMenu } from './WebMenu';

export function Header(){ 
    
    const [element, setElement] = useState('');
    const [visible, setVisible] = useState('hidden');
    const [display, setDisplay] = useState('none');

    function showSearchBar(){
        document.getElementById("search-input").style.visibilty('visible');
    }

    function showMobileMenu(){
       
        setElement('web-menu');
        setVisible('visible');
        setDisplay('flex')

        if(element){
            document.getElementById(element).style.visibilty = visible;
            document.getElementById(element).style.display = display;
        }
    }

    return (        
            <header className="md:flex fixed z-10 px-1 md:px-4 md:py-1 w-full md:w-screen h-48 md:h-20 bg-[#D9D9D9]">
                <a href="/">
                    <Image className="z-40 ml-32 md:ml-2 mt-2 w-44 md:max-w-md" src={logo} alt="Pedreira Carrascoza" title="Pedreira Carrascoza" />
                </a>                          
                                        
                <div className="flex flex-col md:flex-row text-base ml-12 md:ml-48">
                    <p className="text-center">Rodovia Ângelo Cavalheiro, Km 04</p>
                    <p className="hidden md:block md:px-1">-</p>
                    <p className="text-center md:px-1"> Cravinhos/SP</p>
                    <strong className="text-2xl md:text-base text-center -ml-12 md:ml-0 md:px-4">(16)3951-1710</strong>
                </div>

                <div className=" absolute z-10 top-28 right-[4.5rem] md:top-0.5 md:right-[32rem] inline-flex md:flex">                    
                    <a className="no-underline" href="https://www.instagram.com/pedreiracarrascoza" target="_blank">
                        <Image src={instagramLogo} alt="Instagram da Pedreira Carrascoza" title="Instagram da Pedreira Carrascoza"/>
                    </a>
                    <a className="no-underline -ml-1" href="https://www.facebook.com/pedreiracarrascoza" target="_blank">
                        <Image src={facebookLogo} alt="Facebook da Pedreira Carrascoza" title="Facebook da Pedreira Carrascoza"/>
                    </a>                
                </div>       
                  
                    <div>            
                        <nav>
                            <div className="flex flex-col">
                                <button className="absolute z-10 top-[9.5rem] left-2 md:hidden" onClick={(showMobileMenu)}>
                                    <RxHamburgerMenu size={36}/>                              
                                </button>

                               <div className="absolute mt-12 left-48">
                                <ul id="web-menu" className="md:flex list-none uppercase sm:w-screen text-2xl md:text-base cursor-pointer hidden"> 
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">                               
                                        <WebMenu menuOption={ {url:"/", description: 'Home'} } />
                                    </li>
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu 
                                            menuOption={ {url : '#', description: 'Quem Somos', id:'whoarewe'} }
                                            subMenu={ 
                                                [
                                                    { url: '/#sobre-nos', description: 'Sobre nós' },
                                                    { url: '/#missao', description: 'Missão' },
                                                    { url: '/#qualidade', description: 'Qualidade'}
                                                ] 
                                            }
                                        />
                                    </li>                                  
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
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
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu menuOption={{url:'/#remineralizador', description: 'Remineralizador'}} />
                                    </li>
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
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
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu  menuOption={{url:'/#contato', description:'Contato'}}/>  
                                    </li>                        
                                </ul>
                                </div>
                            </div>                                                                                          
                    </nav>
                    <div className="absolute top-[9.5rem] md:top-2 right-12 md:mt-8">
                        <input 
                            className="h-8 w-56 md:w-48 text-sm" 
                            type="text" 
                            id="search-input" 
                            placeholder="Procure por" 
                        />                                            
                        <button id="search-input" className="border-none ml-2" onClick={showSearchBar}>
                            <Image src={searchIcon} alt="Pesquise em nosso site" title="Pesquise em nosso site" />
                        </button>
                    </div>  

                                    
                </div>
            </header>                   
    )
}