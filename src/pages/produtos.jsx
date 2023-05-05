import * as Dialog from '@radix-ui/react-dialog';

import { ProductCard } from './components/ProductCard';

import { ProductModal } from './components/ProductModal';

export function Products() {

          
   return (
        <div className>
            <div className="mx-6 md:mx-12">
                <h1 className="pt-8 text-bold text-4xl text-center">Produtos</h1>
                <div className="text-base md:text-lg indent-8">
                    <p className="pt-8 pb-4 text-justify md:text-center">
                        Clique no card do produto desejado para obter mais informações. Se desejar fazer um orçamento, clique no ícone 
                        do WhatsApp no canto inferior direito e fale com um de nossos vendedores.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:mx-8"> 
                <Dialog.Root>
                <div>
                    <Dialog.Trigger>                    
                        <ProductCard
                            title = "Pedrisco 1/4 pol"
                            imageUrl ="/sproduto1.jpg"
                            description = "Descrição Comercial"
                            density = "1.299 ton/m³"
                        />
                    </Dialog.Trigger>

                    <ProductModal 
                        title= "Pedrisco 1/4 pol"
                        completeDescription = "Essa é uma descrição completa do produto XPTO, fabricado pela empresa das organizações Tabajara"
                    />

                    <Dialog.Trigger>
                            <ProductCard 
                                title = "BGS faixa A"
                                imageUrl ="/sproduto1.jpg"
                                description = "Descrição Comercial"
                                density = "1.299 ton/m³"
                            />
                    </Dialog.Trigger>
                    <ProductModal 
                        title= "BGS faixa A"
                        completeDescription = "Essa é uma descrição completa do produto"
                    />   
                    
                    <Dialog.Trigger>
                            <ProductCard 
                                title = "Areia de brita"
                                imageUrl ="/sproduto1.jpg"
                                description = "Descrição Comercial"
                                density = "1.299 ton/m³"
                            />
                    </Dialog.Trigger>
                    <ProductModal 
                        title= "Areia de Brita"
                        completeDescription = "Essa é uma descrição completa do produto"
                    />
                
                    <Dialog.Trigger>
                            <ProductCard 
                                title = "Bica solo"
                                imageUrl ="/sproduto1.jpg"
                                description = "Descrição Comercial"
                                density = "1.299 ton/m³"
                            />
                    </Dialog.Trigger>
                    <ProductModal 
                        title= "Bica solo"
                        completeDescription = "Essa é uma descrição completa do produto"
                    />
                </div>
                <div>
                    <Dialog.Trigger>
                            <ProductCard 
                                title = "Pedra 1/2"
                                imageUrl ="/sproduto1.jpg"
                                description = "Descrição Comercial"
                                density = "1.299 ton/m³"
                            />
                    </Dialog.Trigger>
                    <ProductModal 
                        title= "Pedra 1/2"
                        density = "1.299 ton/m³"
                        completeDescription = "Essa é uma descrição completa do produto XPTO, fabricado pela empresa das organizações Tabajara"
                    />
                </div>
                </Dialog.Root>                         
            </div>
        </div>
        
    )
}

