import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export function ProductModal(props){

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="z-10 bg-black/40 inset-0 fixed"/>
            <Dialog.Content className="z-20 fixed bg-slate-200 py-2 px-4 top-1/2 left-1/2 rounded-md -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[850px] h-[35rem] md:h-96 shadow-md shadow-slate-800" >
                <Dialog.Close className="">
                    <div className="flex hover:text-white hover:bg-orange-400 rounded-lg">
                        <ArrowLeftIcon />
                        <p className="mx-1 text-sm">RETORNAR</p>
                    </div>
                 </Dialog.Close>
                <div className="mt-32 md:mt-0">                    
                    <Dialog.Title className="text-3xl mb-4 mx-4 md:mx-72 mt-0.5">{props.title}</Dialog.Title>               
                        <div className="flex flex-col">
                            
                            <img 
                                src='/sproduto1.jpg' 
                                className="fixed border-slate-700 border-solid rounded-md w-64 h-32 top-8"
                            />
                            <div>
                                <p className="ml-4 md:ml-72">{props.completeDescription}</p>
                                <p className="ml-4 md:ml-0 mt-16"><strong>Densidade:</strong>{props.density}</p>
                            </div>
                        </div>
                    </div>                    
            </Dialog.Content>                                    
        </Dialog.Portal>
                
    )
}