import { Negociacoes } from './../models/Negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.inputData = document.querySelector('#data');
        this.inputQtd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const qtd = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, qtd, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
