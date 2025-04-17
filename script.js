var hectares = 0
var producao = 0
var custo = 0
var preco = 0

// Sem o Projeto
var rendaBruta = 0;
var rendaLiquida = 0;
var rendaHectareLiquido = 0

// Com o Projeto
var rendaBrutaProjeto = 0
var rendaLiquidaProjeto = 0
var rendaHectareProjeto = 0

var producaoPorHectare = 0
var producaoPorHectareProjeto = 0

var mediaProducao = "";
var mediaProducaoProjeto = "";




function calcular() {
    // Variáveis das inputs
    hectares = Number(input_hectares.value);
    producao = Number(input_producaoColheita.value);
    custo = Number(input_custoProducao.value);
    preco = Number(input_precoKg.value);

    // Sem o Projeto
    rendaBruta = producao * preco;
    rendaLiquida = rendaBruta - custo;
    rendaHectareLiquido = (producao / hectares) * preco - (custo / hectares);

    // Com o Projeto
    rendaBrutaProjeto = (producao * 1.3) * preco;
    rendaLiquidaProjeto = rendaBrutaProjeto - (custo * 0.75);
    rendaHectareProjeto = ((producao * 1.3) / hectares) * preco - ((custo * 0.75) / hectares);

    producaoPorHectare = producao / hectares;
    producaoPorHectareProjeto = (producao * 1.3) / hectares;

    mediaProducao = "";
    mediaProducaoProjeto = "";

    // Classificação da produtividade
    if (producaoPorHectare < 300) {
        mediaProducao = "Produtividade muito baixa na plantação!";
    } else if (producaoPorHectare <= 500) {
        mediaProducao = "Baixa produtividade da plantação!";
    } else if (producaoPorHectare <= 1200) {
        mediaProducao = "Média produtividade da plantação!";
    } else if (producaoPorHectare <= 2500) {
        mediaProducao = "Alta produtividade da plantação!";
    } else {
        mediaProducao = "Altíssima produtividade da plantação!";
    }

    if (producaoPorHectareProjeto < 300) {
        mediaProducaoProjeto = "Produtividade muito baixa na plantação!";
    } else if (producaoPorHectareProjeto <= 500) {
        mediaProducaoProjeto = "Baixa produtividade da plantação!";
    } else if (producaoPorHectareProjeto <= 1200) {
        mediaProducaoProjeto = "Média produtividade da plantação!";
    } else if (producaoPorHectareProjeto <= 2500) {
        mediaProducaoProjeto = "Alta produtividade da plantação!";
    } else {
        mediaProducaoProjeto = "Altíssima produtividade da plantação!";
    }

    if (hectares <= 75) {
        calculo_sem_sensor();
        document.getElementById("btn_sem_sensor").classList.add("btn_selecionado");
    } else {
        removerSelecao();
        div_mensagem.innerHTML = `<p class="semProjeto">Área muito grande para a inserção do nosso sistema!</p>`;
        alert(`Não possuímos um sistema tão avançado para sua plantação!`);
    }
}

function removerSelecao() {
    document.getElementById("btn_sem_sensor").classList.remove("btn_selecionado");
    document.getElementById("btn_com_sensor").classList.remove("btn_selecionado");
}

function calculo_com_sensor() {
    //Adicionando classe de seleção
        removerSelecao();
       document.getElementById("btn_com_sensor").classList.add("btn_selecionado");
        
    div_mensagem.innerHTML = `<p class="comProjeto"><u>Com o projeto:</u></p>

            <p>A produção que era <strong>${producao} Kg</strong> teve um aumento de <strong>30%</strong>, totalizando <strong>${(producao * 1.3).toLocaleString('pt-BR')}</strong> Kg.</p><br>

            <p>O custo da produção que era <strong>R$${custo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> teve uma redução de <strong>25%</strong>, totalizando <strong>R$${(custo * 0.75).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>A renda líquida que era <strong>R$${rendaLiquida.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> foi para <strong>R$${rendaLiquidaProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, aumentando <strong>R$${(rendaLiquidaProjeto - rendaLiquida).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>Antes cada Hectare rendia <strong>R$${rendaHectareLiquido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, com o aumento de <strong>30%</strong> da produção e o decréscimo de <strong>25%</strong> do custo de produção, foi para <strong>R$${rendaHectareProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, tendo a diferença de <strong>R$${(rendaHectareProjeto - rendaHectareLiquido).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>A sua colheita de <strong>${hectares}</strong> hectares rendeu <strong>${(producao * 1.3).toLocaleString('pt-BR')}</strong> Kg e cada Kg foi vendido por <strong>R$${preco}</strong>, totalizando <strong>R$${rendaBrutaProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>Com custo de operação de <strong>R$${(custo * 0.75).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> sua colheita totalizou <strong>R$${rendaLiquidaProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> de renda líquida.</p><br>

            <p>Cada Hectare rendeu <strong>R$${rendaHectareProjeto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p><strong>${mediaProducaoProjeto}</strong></p>`;
}

function calculo_sem_sensor() {
    //Adicionando classe de seleção
    document.getElementById("btn_sem_sensor").addEventListener("click", function (event) {
        removerSelecao();
        event.target.classList.add("btn_selecionado");
    });

    div_mensagem.innerHTML = `
        <p class="semProjeto"><u>Sem o projeto:</u></p>

            <p>A sua colheita de <strong>${hectares}</strong> hectares rendeu <strong>${producao} Kg</strong> e cada Kg foi vendido por <strong>R$${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>, totalizando <strong>R$${rendaBruta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p>Com custo de operação de <strong>R$${custo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> sua colheita totalizou <strong>R$${rendaLiquida.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> de renda líquida.</p><br>

            <p>Cada Hectare rendeu <strong>R$${rendaHectareLiquido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.</p><br>

            <p><strong>${mediaProducao}</strong></p><br><br>`;
}