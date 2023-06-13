export function Contacts(props){

    console.log(props.contactsList)
    return (
        <div>
            <div className="flex flex-col p-4 fixed right-1 top-16  bg-slate-200">
            { props.contactsList.map((item,i) => {
                return (
                    <div key={i} className="z-10">
                        <a className="no-underline hover:text-orange-400" href={item.link} target="_blank" title={props.title}>
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