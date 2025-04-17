function removerSelecao() {
    document.getElementById("btn_sem_sensor").classList.remove("btn_selecionado");
    document.getElementById("btn_com_sensor").classList.remove("btn_selecionado");
}

function calculo_com_sensor(){
    //Adicionando classe de seleção
    document.getElementById("btn_com_sensor").addEventListener("click", function(event) {
        removerSelecao();
        event.target.classList.add("btn_selecionado");
    });

    
}

function calculo_sem_sensor(){
    //Adicionando classe de seleção
    document.getElementById("btn_sem_sensor").addEventListener("click", function(event) {
        removerSelecao();
        event.target.classList.add("btn_selecionado");
    });
}