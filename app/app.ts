import { NegociacaoController } from './controllers/Negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form) { 
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possivel iniciar a aplicação. Verifica se o form existe')
}