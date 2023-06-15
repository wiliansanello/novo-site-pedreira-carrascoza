import { useState } from "react";

import { RxChevronDown } from "react-icons/rx"

export function WebMenu({ menuOption }) {

    const [element, setElement] = useState('');
    const [toggleShow, setToggleShow] = useState('hidden');

    function setVisibilityItem(){
        let targetElement = `${menuOption.id}-dropdown`;
        setElement(targetElement);
      
        if(targetElement){
            
            if (toggleShow === 'hidden') {
                setToggleShow('visible')
            } else {
                setToggleShow('hidden')
            }
            
        }
    }

  
    function scrollToSelectedOption(positionY){

        window.scroll({
            top: positionY,
            left: 0,
            behavior: "smooth"
        })

        setToggleShow('invisible');
        
    }
    
    return (
        <div 
            className={menuOption.subMenu ? "sm:flex md:justify-items-center w-screen md:w-full md:ml-0" : ""}
        >                                          
            <a 
                id={menuOption.id} 
                className="font-bold no-underline"
                onMouseEnter={setVisibilityItem} 
                onMouseLeave={setVisibilityItem}
                onClick={menuOption.hasChild ? setVisibilityItem : ()=>{scrollToSelectedOption(menuOption.positionY)}}                
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
                    onMouseLeave={setVisibilityItem}
                    className={`${toggleShow} md:absolute z-40 md:mt-6 -ml-4 md:text-center w-screen md:w-40 bg-slate-200 shadow-lg text-black sm:capitalize`}
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