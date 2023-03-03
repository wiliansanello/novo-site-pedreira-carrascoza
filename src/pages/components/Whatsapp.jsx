import Image from 'next/image';
import Link from 'next/link';

export function Whatsapp(){
    return (
        <div className="z-40">
            <Link 
                className="pt-48" 
                href="https://api.whatsapp.com/send?phone=5516981544877&text=Olá!%20Gostaria%20de%20um%20orçamento" 
                target="_blank"
            >
                <Image 
                    className="fixed z-40 left-72 top-[41rem] w-18 md:w-16 md:left-[84rem] md:top-[37rem] cursor-pointer hover:w-[76px] duration-200" 
                    src="whatsapp-icon.svg" 
                    width={56} 
                    height={56} 
                    alt="WhatsApp da Pedreira Carrascoza" 
                    title="WhatsApp da Pedreira Carrascoza"
                />    
            </Link>
        </div>
    )
}