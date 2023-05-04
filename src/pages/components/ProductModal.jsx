import * as Dialog from '@radix-ui/react-dialog';

export function ProductModal(props){

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="z-10 bg-black/80 inset-0 fixed"/>
            <Dialog.Content className="fixed bg-slate-100 py-8 px-10 rounded-md -translate-x-1/2 -translate-y-1/2 w-[480px] shadow-lg shadow-slate-300" >
                <Dialog.Title className="text-xl font-black">Pedrisco 1/4 "</Dialog.Title>
                <Dialog.Description>{props.title}</Dialog.Description>                
                <div className="flex flex-col">
                    <img 
                        src='/sproduto1.jpg' 
                        className="border-slate-700 rounded-md"
                    />
                    <p>{props.completeDescription}</p>
                </div>    
            </Dialog.Content>                                    
        </Dialog.Portal>
                
    )
}