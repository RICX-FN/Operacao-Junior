const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: false },
  { id: 2, titulo: "Fazer exercício", concluida: false },
  { id: 3, titulo: "Ler um artigo", concluida: true }
];

const tarefasAtualizadas = tarefas.map(item => ({
    ...item,
    concluida: true
}));
console.log(tarefas);
console.log(tarefasAtualizadas);


const dones = tarefas.reduce((count, task) => {
    return task.concluida === true ? count +1 : count;
}, 0);
console.log(dones);


const pendentes  = tarefas.filter((slot) => !slot.concluida);
console.log(pendentes);