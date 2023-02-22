import { useState } from "react";

import logo from "../../../public/logo-web.svg";
import searchIcon from "../../../public/search-web.svg"
import facebookLogo from "../../../public/facebook-web.svg";
import instagramLogo from "../../../public/instagram-web.svg";
import Image from "next/image";

export function Header(){

    const [element, setElement] = useState('');
    const [visible, setVisible] = useState('hidden');
    const [display, setDisplay] = useState('none');
    const [direction, setDirection] = useState('row');

    function setMenuVisible(event){
        const target = event.target.id
        
        //console.log("Target no mostrar: ", target);

        if (target === 'whoarewe') { 
            setElement('whoarewe-dropdown')
         }  else if(target === 'products') {
            setElement('products-dropdown')
         }  else if(target === "location") {
            setElement('location-dropdown')
         } 
                          
        setVisible('visible');
        setDisplay('flex');
        setDirection('column');  
        
        if(element){
            document.getElementById(element).style.visibility = visible;
            document.getElementById(element).style.display = display;
            document.getElementById(element).style.flexDirection = direction;  
        }      
    }

    function setMenuHidden(event) {

        const target = event.target.id;
                
        console.log("Nome no esconder: ", target);

        setElement(target)

        /*if (target === "whoarewe-dropdown") { 
            elementId = target
         } else if(target === "products") {
            elementId = "products-dropdown"
         } else if(target === "location") {
            elementId = "location-dropdown"
         }*/   
   
        setVisible('hidden');
        setDisplay('none');
        setDirection('row');        

        if(element){
            document.getElementById(element).style.visibility = visible;
            document.getElementById(element).style.display = display;
            document.getElementById(element).style.flexDirection = direction;
        } 
    }

    function showSearchBar(){
        document.getElementById("search-input").removeAttribute("hidden");
    }

    return (        

        <header className="flex fixed z-10 px-4 py-2 w-full h-20 bg-[#D9D9D9]">
            <a href="/"><Image src={logo} alt="Pedreira Carrascoza" title="Pedreira Carrascoza" /></a>
            <div className="grid justify-items-center pl-20">                
                    <span>Rodovia Ângelo Cavalheiro, Km 04 - Cravinhos/SP<strong className="ml-8">(16)3951-1710</strong></span>
                    <div className="flex pt-1.5">            
                        <nav>                
                            <ul className="flex list-none uppercase py-4 cursor-pointer">
                                <li className="float-left font-bold px-8 hover:bg-black hover:text-white">
                                    <a href="/">Home</a>
                                 </li>       
                                <li id="whoarewe" className="px-8" onMouseEnter={setMenuVisible}>                                           
                                    <a href="#" className="font-bold no-underline hover:bg-black hover:text-white">Quem Somos</a> 
                                    <ul 
                                        id="whoarewe-dropdown"
                                        onMouseLeave={setMenuHidden}
                                        className="hidden px-6 py-2 absolute bg-[#D9D9D9] shadow-lg text-center capitalize"
                                    >                                         
                                        <li className="hover:bg-black hover:text-white">
                                            <a href="/sobre-nos">Sobre nós</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]"/>
                                        </li>
                                        
                                        <li className="hover:bg-black hover:text-white">
                                            <a href="/missao">Missão</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]"/>
                                        </li>
                                        
                                        <li className="hover:bg-black hover:text-white">
                                            <a href="/qualidade">Qualidade</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>       
                                    </ul>                                     
                                </li> 
                                <li id="products" className="px-8 hover:bg-[#1D2483]" onMouseEnter={setMenuVisible}>                                                                    
                                    <a href="/produtos" className="font-bold no-underline hover:text-white">Produtos</a>
                                    <ul 
                                        id="products-dropdown"
                                        onMouseLeave={setMenuHidden} 
                                        className="hidden px-6 py-2 absolute bg-[#D9D9D9] shadow-lg text-center capitalize"
                                    >
                                        <li className="hover:bg-[#1D2483] hover:text-white"> 
                                            <a href="rachao">Rachão</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>                                            
                                        <li className="hover:bg-[#1D2483] hover:text-white">
                                            <a href="brita">Brita</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>                                            
                                        <li className="hover:bg-[#1D2483] hover:text-white">
                                            <a href="pedrisco">Pedrisco</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>
                                        <li className="hover:bg-[#1D2483] hover:text-white">
                                            <a href="bica">Bica</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>                        
                                        <li className="hover:bg-[#1D2483] hover:text-white">
                                            <a href="areia">Areia</a>
                                            <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>    
                                    </ul>           
                                </li>
                            <li><a className="inline-block px-8 text-center font-bold no-underline hover:bg-[#1D2483] hover:text-white" href="/agrocar">Agrocar</a></li> 
                            <li id="location" className="hover:bg-[#1D2483]" onMouseEnter={setMenuVisible}>
                                <a href="#" className="font-bold no-underline hover:text-white">Localização</a>
                                <ul 
                                    id="location-dropdown" 
                                    className="hidden px-6 py-2 absolute bg-[#D9D9D9] shadow-lg text-center capitalize" 
                                    onMouseLeave={setMenuHidden}
                                >
                                    <li className="hover:bg-[#1D2483] hover:text-white">
                                        <a href="/encontre-nos">Encontre-nos</a>
                                        <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                    </li>
                                    <li className="hover:bg-[#1D2483] hover:text-white">
                                    <a href="/cidades-atendidas">Cidades atendidas</a>
                                    <div className="mx-1 py-1 border-b-2 border-[#9B8F8F]" />
                                    </li>
                                    
                                </ul>                                
                            </li>                                                    
                            <li><a className="inline-block text-center font-bold no-underline hover:bg-[#1D2483] hover:text-white px-8" href="/contato">Contato</a></li>            
                        </ul>                                                                    
                    </nav>  
                    <input 
                        className="h-8 mt-1 text-sm hidden" 
                        type="text" 
                        id="search-input" 
                        placeholder="Digite aqui o que está buscando..." 
                    />           
                    <div className="flex">
                        
                        <button className="bg-transparent border-none" onClick={showSearchBar}>
                            <Image src={searchIcon} alt="Pesquise em nosso site" title="Pesquise em nosso site" />
                        </button>
                        <a className="no-underline" href="https://www.instagram.com/pedreiracarrascoza" target="_blank">
                            <Image src={instagramLogo} alt="Instagram da Pedreira Carrascoza" title="Instagram da Pedreira Carrascoza"/>
                        </a>
                        <a className="no-underline" href="https://www.facebook.com/pedreiracarrascoza" target="_blank">
                            <Image src={facebookLogo} alt="Facebook da Pedreira Carrascoza" title="Facebook da Pedreira Carrascoza"/>
                        </a>                
                    </div>   
                </div>
            </div>           
        </header>
    )
}