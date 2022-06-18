import { ICategory, IProduct } from "../models/";


export const categories:Array<ICategory>=[
    {
        id:"2",
        name:"Pizza Salgada",
        icon:"https://cdn-icons.flaticon.com/png/512/4058/premium/4058847.png?token=exp=1655486120~hmac=2bbc7727e3ff29d2f64539b470574dbe"  
    },
    {
        id:"3",
        name:"Pizza Doce",
        icon:"https://cdn-icons.flaticon.com/png/512/3511/premium/3511307.png?token=exp=1655484332~hmac=417376c40031a987f277b1916bf791f2"  
    },    
    {
        id:"4",
        name:"Bebidas",
        icon:"https://cdn-icons-png.flaticon.com/512/390/390166.png"  
    },
    {
        id:"5",
        name:"Sobremesas",
        icon:"https://cdn-icons.flaticon.com/png/512/1079/premium/1079120.png?token=exp=1655486263~hmac=99a2566940e96f3a0724fd7c624ce129"  
    }
]

export const products:Array<IProduct>=[
    {
        id:"1",
        name:"Pizza de Calabresa",
        price:"R$ 39,99",
        description:"Deliciosa Pizza de Calabresa com cebola, azeitona e molho de tomate.",
        categories:["2"],
        image:"https://img.freepik.com/fotos-gratis/pizza-de-calabresa-com-azeitonas-na-placa-de-madeira_140725-5374.jpg?size=338&ext=jpg"
    },
    {
        id:"2",
        name:"Pizza de Mussarela",
        price:"R$ 39,99",
        description:"A melhor pizza de queijo Mussarela do Brasil.",
        categories:["2"],
        image:"https://img.freepik.com/fotos-gratis/folheto-promocional-de-conceito-e-poster-para-restaurantes-ou-pizzarias-template-com-deliciosa-pizza-azeitona-tomate-queijo-mussarela_70216-8209.jpg?size=626&ext=jpg&ga=GA1.2.250355502.1655506693"
    },
    {
        id:"1",
        name:"Pizza de Calabresa",
        price:"R$ 39,99",
        description:"Deliciosa Pizza de Calabresa com cebola, azeitona e molho de tomate.",
        categories:["2"],
        image:"https://img.freepik.com/fotos-gratis/pizza-de-calabresa-com-azeitonas-na-placa-de-madeira_140725-5374.jpg?size=338&ext=jpg"
    },
    {
        id:"1",
        name:"Pizza de Calabresa",
        price:"R$ 39,99",
        description:"Deliciosa Pizza de Calabresa com cebola, azeitona e molho de tomate.",
        categories:["2"],
        image:"https://img.freepik.com/fotos-gratis/pizza-de-calabresa-com-azeitonas-na-placa-de-madeira_140725-5374.jpg?size=338&ext=jpg"
    },
    {
        id:"1",
        name:"Pizza de Calabresa",
        price:"R$ 39,99",
        description:"Deliciosa Pizza de Calabresa com cebola, azeitona e molho de tomate.",
        categories:["2"],
        image:"https://img.freepik.com/fotos-gratis/pizza-de-calabresa-com-azeitonas-na-placa-de-madeira_140725-5374.jpg?size=338&ext=jpg"
    },
    {
        id:"1",
        name:"Pizza de Calabresa",
        price:"R$ 39,99",
        description:"Deliciosa Pizza de Calabresa com cebola, azeitona e molho de tomate.",
        categories:["2"],
        image:"https://img.freepik.com/fotos-gratis/pizza-de-calabresa-com-azeitonas-na-placa-de-madeira_140725-5374.jpg?size=338&ext=jpg"
    }
]