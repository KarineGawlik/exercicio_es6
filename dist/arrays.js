const alunos = [{
  nome: "Karine",
  nota: 10
}, {
  nome: "Maria",
  nota: 8
}, {
  nome: "João",
  nota: 7
}, {
  nome: "Felipe",
  nota: 5
}, {
  nome: "Mariano",
  nota: 4
}, {
  nome: "Luciane",
  nota: 9
}, {
  nome: "Karoline",
  nota: 6
}, {
  nome: "Carlos",
  nota: 3
}];

//Todos os alunos
console.log("Nota de todos os alunos:");
console.log(alunos);

//função para os alunos aprovados com nota maior que 6
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(aluno => aluno.nota >= 6);
}
const alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos APROVADOS:");
console.log(alunosAprovadosArray);

//função para os alunos reprovados com nota menor que 6 
function alunosReprovados(arrayAlunos) {
  return arrayAlunos.filter(aluno => aluno.nota <= 6);
}
const alunosReprovadosArray = alunosReprovados(alunos);
console.log("Alunos REPROVADOS:");
console.log(alunosReprovadosArray);