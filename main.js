$(document).ready(function(){
const form = document.getElementById('formulario');
const nomeTarefa = document.getElementById('nome-tarefa')
const listaTarefa = []


        let allTarefas = []


form.addEventListener('submit', function(e) {
    e.preventDefault();

    addTarefa();
    atualizaTarefa();

})

    function addTarefa(){

        if(listaTarefa.includes(nomeTarefa.value)){
            alert(`a tarefa ${nomeTarefa.value} já foi inserida`);
            
        }else{
            listaTarefa.push(nomeTarefa.value);

            let tarefas = '<li>';
            tarefas += `<li>${nomeTarefa.value}<li>`
            allTarefas += tarefas
        }

        nomeTarefa.value=' ';
    }

    function atualizaTarefa(){
        const listTarefas = document.querySelector('li');
        listTarefas.innerHTML = allTarefas;
    }

    $('ol li').click(function(){
        $('ol li').css('text-decoration', 'line-through')
    })

    })

