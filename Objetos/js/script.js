

const produtos = {
    produto1: {
    nome: "Camiseta Algodão Premium",
    preco: 59.90,
    disponivel: true,
    fabricante: {
    nome: "Malharia do Sol",
    localizacao: "São Paulo, SP",
    },
    },
    produto2: {
    nome: "Calça Jeans Slim Fit",
    preco: 129.90,
    disponivel: false,
    fabricante: {
    nome: "Jeans Brasil",
    localizacao: "Rio de Janeiro, RJ",
    },
    },
    produto3: {
    nome: "Tênis Esportivo Runner",
    preco: 199.90,
    disponivel: true,
    fabricante: {
    nome: "Calçados Sport",
    localizacao: "Minas Gerais, MG",
    
    },
    }
    };



    const Onibus = {
        onibus1: {
        nome: "Millenium",
        preco: 1000,
        disponivel: true,
        fabricante: {
        nome: "Caio",
        localizacao: "São Paulo, SP",
        },
        },
        onibus2: {
        nome: "Viale",
        preco: 4000,
        disponivel: false,
        fabricante: {
        nome: "Marcopolo",
        localizacao: "Rio de Janeiro, RJ",
        },
        },
        onibus3: {
        nome: "UrbanusS",
        preco: 3400,
        disponivel: true,
        fabricante: {
        nome: "Busscar",
        localizacao: "Minas Gerais, MG",
        
        },
        }
        };
     
       



    

console.log("Produto3")
console.log("Nome: "        + produtos.produto3.nome)
console.log("Preço: "       + produtos.produto3.preco)
console.log("Disponivel: "   + produtos.produto3.disponivel ? "Sim":"Não")
console.log("Fabricante Nome:", produtos.produto3.fabricante.nome);
console.log("Fabricante Localização:", produtos.produto3.fabricante.localizacao);

//System.out.println("")