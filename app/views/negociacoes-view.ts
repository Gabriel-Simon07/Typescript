import { Negociacoes } from './../models/Negociacoes.js';
export class NegociacoesView {

    private elemento: HTMLElement;

    constructor(private selector: string) {
        this.elemento = document.querySelector(selector);
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>   
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join(' ')}
                </tbody>
            </table>
        `;
    }

    update(model: Negociacoes) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}