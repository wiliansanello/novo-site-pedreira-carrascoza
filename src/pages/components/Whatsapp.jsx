export function Whatsapp(){
    return (
        <div className="z-40">
            <a 
                className="pt-48" 
                href="https://api.whatsapp.com/send?phone=551639511710&text=Olá!%20Gostaria%20de%20um%20orçamento" 
                target="_blank"
            >
                <img 
                    className="fixed z-40 w-18 right-4 bottom-4 md:right-10 md:bottom-10 md:w-16 cursor-pointer hover:w-[76px] duration-200" 
                    src="whatsapp-icon.svg" 
                    width={56} 
                    height={56} 
                    alt="WhatsApp da Pedreira Carrascoza" 
                    title="WhatsApp da Pedreira Carrascoza"
                />    
            </a>
        </div>
    )
}