//-perguntar as entradas, saídas e % de impostos.
var income = prompt("Qual é o valor da entrada?");

var costs = prompt("Qual é o valor das saídas?");

var taxPercent = prompt("Qual é a porcentagem dos impostos?");

//calcular a renda bruta
var grossProfit = income - costs;

//obtendo o valor dos impostos
var tax = grossProfit*taxPercent/100

//renda líquida
var netIncome = grossProfit - tax;

//mostrar na página web
document.write("Sua renda líquida é de $ "+ netIncome);