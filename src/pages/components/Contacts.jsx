import { useState } from "react";

import { getPositionY } from "../../utils/getPositionY";
import { scrollToSelectedOption } from "../../utils/scrollToSelectedOption";

export function Contacts(props){

    let contactData = [];
    let elementTitle = "";
    let contactList = [];
    let visibility = "invisible"

    /*function showLink () {
        if (toggleContactLink === 'visible'){
            setToggleContactLink('invisible');
        } else {
            setToggleContactLink('visible');
        }
        console.log(toggleContactLink)
    }*/

    function selectSocialMedia(){   

        if (props.target === 'instagram') {

            elementTitle = 'Clique para seguir';

            contactData = [
                {contact: '@pedreiracarrascoza', link:'https://www.instagram.com/pedreiracarrascoza', elementTitle},
                {contact: '@agrocar.remineralizador', link:'https://www.instagram.com/agrocar.remineralizador', elementTitle}
            ];
        
        } else if(props.target === 'facebook') {

            elementTitle = 'Clique para curtir a página';

            contactData = [
                {contact: 'pedreiracarrascoza', link:'https://www.facebook.com/pedreiracarrascoza', elementTitle}            
            ]; 
            
        } else if (props.target === 'address') {

            contactData = [
                {
                    text: 'Rodovia Ângelo Cavalheiro, Km 04', 
                    contact: 'Ver mapa', 
                    position: ()=>{
                        scrollToSelectedOption(getPositionY(5000,5450))
                    }
                }
            ];

        } else if (props.target === "phone") {

            elementTitle = 'Ligue para a Pedreira Carrascoza';

            contactData = [
                {contact: '(16)3951-1710', link:'tel:+1639511710', elementTitle}
            ];
        }

        return contactData;
    }   

    visibility = props.visibility;
    contactList = selectSocialMedia();
   
    return (
        <div>
            <div className={`${visibility} flex flex-col p-4 fixed right-1 top-16  bg-slate-200`}>
            {contactList.map((item,i) => {
                return (
                    <div key={i} className={"z-10"}>
                        {
                            props.target === 'address' && 
                                <div>
                                    <p>Rodovia Ângelo Cavalheiro, Km 04</p>
                                    <p>Cravinhos/SP</p>
                                </div>
                        }
                        <a className="no-underline hover:text-orange-400 cursor-pointer" 
                            href={item.link} 
                            target="_blank" 
                            title={elementTitle}
                            onClick={props.target === 'address' ? ()=>{item.position()} : ()=>console.log(0)}
                        >
                            {item.contact}        
                        </a>                
                    </div>                    
                )     
            })        
            }
            </div> 
        </div>
    )
}