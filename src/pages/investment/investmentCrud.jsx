import React, { Component } from 'react'
import axios from 'axios'
import Main from '../../components/template/Main'

const headerProps = {
    title: 'Simulador K',
    subtitle: 'Faça a simulação e veja qual investimento rende mais!', 
}

const baseUrl = 'http://localhost:3001'
const baseUrlInvestment = 'http://localhost:3001/investment-parameters'
const initialState = {
    investment: {  id_user: '' , value: '', investment_time: '', rate_cdi_percent: ''},
    list: []
}

export default class InvestmentCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ investment: initialState.investment })
    }

    save() {
        const investment = this.state.investment
        const method = investment.id ? 'put' : 'post'
        const url = investment.id ? `${baseUrlInvestment}/${investment.id}` : baseUrlInvestment
        axios[method](url, investment)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ investment: initialState.investment, list })
            })
    }
    
    getUpdatedList(investment, add = true) {
        const list = this.state.list.filter(u => u.id !== investment.id)
        if(add) list.unshift(investment)
        return list
    }

    updateField(event) {
        const investment = { ...this.state.investment }
        investment[event.target.name] = event.target.value
        this.setState({ investment: investment })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label><strong>Usuário</strong></label>
                            <input type="text" className="form-control"
                                name="id_user"
                                value={this.state.investment.id_user}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o ID do usuário" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label><strong>Valor a ser investido</strong> </label>
                            <input type="text" className="form-control"
                                name="value"
                                value={this.state.investment.value}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o investimento em Reais" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label><strong>Tempo do investimento</strong></label>
                            <input type="text" className="form-control"
                                name="investment_time"
                                value={this.state.investment.investment_time}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o tempo do investimento em anos" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label><strong>Taxa % de CDI</strong></label>
                            <input type="text" className="form-control"
                                name="rate_cdi_percent"
                                value={this.state.investment.rate_cdi_percent}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a taxa atual do CDI em %" />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(investment) {
        this.setState({ investment })
    }

    remove(investment) {
        axios.delete(`${baseUrlInvestment}/${investment.id}`).then(resp => {
            const list = this.getUpdatedList(investment, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Investimento Inicial</th>
                        <th>Rendimento na Poupança</th>
                        <th>Rendimento no CDB</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(investment => {
            return (
                <tr key={investment.id_user}>
                    <td>{investment.id_user}</td>
                    <td>{investment.value}</td>
                    <td>{investment.profitability_poupanca}</td>
                    <td>{investment.profitability_cdb}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(investment)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(investment)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}