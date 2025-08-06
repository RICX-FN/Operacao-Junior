// Method map()
const numbers = [2, 3, 4];
const potency = numbers.map((n) => n** 2);
console.log(potency);

// Method filter()
const ages = [12, 18, 21, 13];
const maiorIdade = ages.filter((age) => age >= 18);
console.log(maiorIdade);

//Method find()
const names = ['Ana', 'Pedro', 'João', 'Isabel'];
const nameFound = names.find((name) => name.startsWith('A'));
console.log(nameFound);

//Method some()
const notas = [100, 50, 80];
const notaBaixa = notas.some((nota) => nota < 50);
console.log(`Na lista contém notas baixas? R:${notaBaixa}`);


//Method every()
const passwords = ['abc123', '123abc', 'abcbca'];
const minDigit = passwords.every((pass) => pass.length <= 6);
console.log(`Todas as senhas têm no minimo 6 digitos? R:${minDigit}`);

//Method reduce()
const values = [10, 20, 30];
const tot = values.reduce((aculator, atual) => aculator + atual);
console.log(`Somando os valores do array: ${tot}`, 0);

//aplicando map

const tasks = [
  { id: 1, titulo: "Estudar JavaScript", concluida: true },
  { id: 2, titulo: "Fazer exercício", concluida: false },
  { id: 3, titulo: "Revisar HTML", concluida: true },
  { id: 4, titulo: "Criar projeto", concluida: false }
];

const taskDone = tasks.map(task => ({
    ...task,
    concluida: true
}));
console.log(taskDone);

//aplicando o reduce

const totDone = tasks.reduce((count, task) => {
    return task.concluida ? count +1 : count;
}, 0);
console.log(`Tarefas concluídas: ${totDone}`);