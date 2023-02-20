import WhatsappIcon from '../../../public/whatsapp-icon.svg';
import Image from 'next/image';

export function Whatsapp(){
    return (
        <div>
            <a className="pt-48" href="#">
                <Image className="p-24" src={WhatsappIcon} alt="WhatsApp da Pedreira Carrascoza" title="WhatsApp da Pedreira Carrascoza"/>    
            </a>
        </div>
    )
}