import {useState} from "react";

import { RxChevronDown } from "react-icons/rx"

export function WebMenu({menuOption, subMenu}) {

    const [target, setTarget] = useState('')
    const [element, setElement] = useState('');
    const [visible, setVisible] = useState('hidden');
    const [display, setDisplay] = useState('none');
    const [direction, setDirection] = useState('row');
    

    function setMenuVisible(e){
        setTarget(menuOption.id)
        
        console.log(menuOption.id, element);
    
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
        setTarget('')
    }
        
    function setMenuHidden(e) {
    
        setTarget(e.target.id)

        if (target === 'whoarewe') { 
            setElement('whoarewe-dropdown')
            }  else if(target === 'products') {
            setElement('products-dropdown')
            }  else if(target === "location") {
            setElement('location-dropdown')
            } 
    
        setVisible('hidden');
        setDisplay('none');
        setDirection('row');        
    
        if(element){
            document.getElementById(element).style.visibility = visible;
            document.getElementById(element).style.display = display;
            document.getElementById(element).style.flexDirection = direction;
        } 
    }
        
    
    return (
        <div className={subMenu ? "sm:flex ml-[22rem] md:ml-0" : ""}>                                          
            <a 
                id={menuOption.id} 
                href={menuOption.url} 
                className="font-bold no-underline"
                onMouseEnter={setMenuVisible} 
                onMouseLeave={setMenuHidden}
            >
                {menuOption.description}
            </a>
            {subMenu && <RxChevronDown color="black" size={24}/>}

            {subMenu && (
            <ul 
                id={element}
                onMouseLeave={setMenuHidden}
                className="hidden z-40 py-2 md:mt-6 sm:ml-8 md:-ml-4 absolute bg-[#D9D9D9] shadow-lg text-center text-black sm:capitalize w-40"
            >  
                {subMenu.map((item, i) => {                                     
                    return <li key={i} className="hover:bg-black hover:text-white transition-500">
                        <a href={item.url}>{item.description}</a>
                        <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                    </li>
                    })}                                      
            </ul>
            )}                                      
        </div>
    )
}