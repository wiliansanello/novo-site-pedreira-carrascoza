import { useState } from "react";

import { RxChevronDown } from "react-icons/rx"

export function WebMenu({ menuOption }) {

    const [target, setTarget] = useState('');
    const [element, setElement] = useState('');
    const [visible, setVisible] = useState(false);
    const [toggleShow, setToggleShow] = useState('hidden');
    const [display, setDisplay] = useState('none');
    const [direction, setDirection] = useState('row');

    function setVisibilityMenu(){
        
        setTarget(menuOption.id);
        setVisible(!visible);
                        
        if (target) { 
            setElement(`${target}-dropdown`)
        }  
        
        if(element){
            if (visible){
                setToggleShow('hidden');
                setDisplay('none');
                setDirection('row');
            } else {
                setToggleShow('visible');
                setDisplay('flex');
                setDirection('column'); 
            }
        }
        
        if(element){
            document.getElementById(element).style.visibility = toggleShow;
            document.getElementById(element).style.display = display;
            document.getElementById(element).style.flexDirection = direction;  
        } 
    
    }

    function scrollToSelectedOption(positionY){

        console.log(positionY)
        window.scroll({
            top: positionY,
            left: 0,
            behavior: "smooth"
        })

        if (element) {
            document.getElementById(element).style.visibility = 'hidden';
        }
    }
    
    return (
        <div 
            className={menuOption.subMenu ? "sm:flex md:justify-items-center w-screen md:w-full md:ml-0" : ""}
        >                                          
            <a 
                id={menuOption.id} 
                className="font-bold no-underline"
                onMouseEnter={setVisibilityMenu} 
                onMouseLeave={setVisibilityMenu}
                onClick={menuOption.hasChild ? setVisibilityMenu : ()=>{scrollToSelectedOption(menuOption.positionY)}}                
            >
                {menuOption.description}
            </a>
            {menuOption.subMenu && 
                <div className="mt-1 inline-flex">
                    <RxChevronDown size={16} />
                </div>
            }
            <div className="mx-0 py-1 md:py-0 md:border-none border-b-2 border-slate-300"/>

            {menuOption.subMenu && (
                <ul 
                    id={element}
                    onMouseLeave={setVisibilityMenu}
                    className="hidden md:absolute z-40 md:mt-6 -ml-4 md:text-center w-screen md:w-40 bg-slate-200 shadow-lg text-black sm:capitalize"
                >
                
                    {menuOption.subMenu.map((item, i) => {                                     
                        return <li key={i} className="hover:bg-orange-400 hover:text-white transition-500" >
                            <a className="ml-12 md:ml-0" onClick={()=>{scrollToSelectedOption(item.positionY)}}>{item.description} </a>
                            <div className="mx-2 md:mx-8 py-1 border-b-2 border-slate-300"/>
                        </li>
                        })}                                      
                </ul>            
                )}                                      
        </div>
    )
}