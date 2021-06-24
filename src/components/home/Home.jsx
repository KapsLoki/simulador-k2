import React from 'react'
import Main from '../template/Main'
import ImgCadastro from '../../assets/imgs/cadastro.png'
import ImgMoney from '../../assets/imgs/money.png'

export default props => 
    <Main title="EQI Investimentos"
        subtitle="Bem Vindo ao Simulador K de Investimentos ">
        <hr />
        <div class="container-fluid">
            <div class='d-flex flex-wrap justify-content-around'>
  
                <div class="card">
                    <div class="card-body">
                        <div><img class="img-fluid center" src={ImgCadastro} /></div>
                        <a href="./users" class="btn btn-1">Cadastrar-se</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                    <div><img class="img-fluid center" src={ImgMoney} /></div>
                        <a href="./investment" class="btn btn-2">Simular Agora!</a>
                    </div>
                </div>
            </div>
        </div>
        <p id="subtitulo"><strong>Entenda as modalidades de investimento antes de fazer a simulação.</strong></p>
        
        <div className="oqueecdi">
            <strong id="titulo-cdi">O que é CDI? </strong>
            <p id="texto-cdi"> O CDI (Certificado de Depósito Interbancário) é um título de curtíssimo prazo emitido pelos bancos. Em algum grau, ele se assemelha ao CDB (Certificado de Depósito Bancário). Isso porque o CDI também é usado pelas instituições para captar recursos. </p>
        </div>
        <div className="poupanca">
            <strong id="titulopoup">Como funciona a Poupança: </strong>
            <p id="textopoup">A poupança é uma aplicação de renda fixa simples e acessível para todo mundo. Existe um gatilho que altera o rendimento conforme o patamar em que se encontra a Selic, a taxa básica de juros da economia brasileira. <br />
        </p>
        </div>
        <div className="requisitos">
            <strong id="tituloreq">Requisitos: </strong>
            <p id="textoreq">
– Necessário <a href='./users'>cadastro</a><br />
– Conhecer a Taxa CDI atual (caso não saiba, <a href="https://blog.magnetis.com.br/cdi/" rel='noreferrel' target="_blank">clique aqui</a>)</p>
        </div>
    </Main> 

        