import { Negociacao } from './../models/negociacao';
import { DiasSemana } from '../enums/dias-semana.js';
import { Negociacoes } from './../models/Negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQtd: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView =  new NegociacoesView('#negociacoesView', true);
    private mensagemView =  new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQtd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQtd.value,
            this.inputValor.value
        );

        if(!this.isDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitos');
            return;
        }
        this.negociacoes.adiciona(negociacao); 
        this.limparFormulario();
        this.atualizaView();    
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }

    private isDiaUtil(data: Date) {
        return data.getDay() > DiasSemana.DOMINGO 
            && data.getDay() < DiasSemana.SABADO; 
    }
}