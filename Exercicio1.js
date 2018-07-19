var Veiculo = function(nome, cor, modelo) {
	var cor = cor;
	var nome = nome;
	var modelo = modelo;

	this.getCor = () => cor;
	this.getNome = () => nome;
	this.getModelo = () => modelo;
}

var CaminhaoCegonha = function(nome, cor, modelo) {
	Veiculo.call(this, nome, cor, modelo);

	this.listaVeiculos = [];

	this.getVeiculos = () => listaVeiculos.map( (v) => `${v.getNome()} ${v.getCor()} ${v.getModelo()}` ).join(', ');

	this.addVeiculo = (veiculo) => listaVeiculos.push(veiculo);
	this.removeVeiculo = () => listaVeiculos.pop();
}

var a = new Veiculo('Moto', 'branca', 2018);
var b = new Veiculo('Carro', 'preto', 2016);
var c = new Veiculo('Van', 'azul', 2007);

var cegonha = new CaminhaoCegonha('Caminhão Cegonha', 'verde', 2005);

cegonha.addVeiculo(a);
cegonha.addVeiculo(b);
cegonha.addVeiculo(c);

cegonha.getVeiculos();
