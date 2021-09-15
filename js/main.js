const data = {
	"cards": [
		{
			"id": 0,
			"img": "img00",
			"title": "Arroz",
			"yes": "Feliz aniversário de namoro lindona. Nesses 2 anos de namoro eu confesso que não esperava que fosse namorar tanto tempo e tão pouco tempo depois de sair de um relacionamento. Além disso, eu nunca esperaria que fosse conhecer uma pessoa com você pelo Tinder e, depois desses dois anos, com uma grande ajuda rs, resolvi criar de novo um Tinder pra celebrar mostrando várias pessoas que eu me apaixonei.",
			"no": "text",
		},
		{
			"id": 1,
			"img": "img01",
			"title": "Arroz1",
			"yes": "As várias pessoas que eu me apaixonei obviamente são todas as nuances suas, principalmente aquela que ama dormir HEUHEUHE que quando está comigo só quer saber de deitar, cochilar e pedir carinho no meu sofá que suga todas suas energias e que eu sempre tiro foto dormindo porque não posso te deixar 5 min sozinha no meu sofá que você já vai sonhar que cortou o cabelo, ficou ruim e ficou parecendo o beiçola",
			"no": "Nesse momento você já deve estar brava por causa do Tinder e pela foto HEUHUEHE. O fato é que eu me apaixonei por várias faces da Isa e, uma delas é claro é a que ama dormir e quando está comigo sente uma vontade inexplicável de ficar no meu sofá faça chuva ou faça sol",
		},
		{
			"id": 2,
			"img": "img02",
			"yes": "E posso afirmar com certeza que na mesma intensidade que você gosta de dormir, você gosta de comer doce. Principalmente quando sou eu que faço ou peço pra alimentar a minha draga que fica nervosa quando não é alimentada e quando sente fome é porque, na verdade, está sem fome e só tá com lumbriga de doce",
			"no": "Eu sei que é aniversário de namoro e era pra ser super romântico mas você sabe que eu não consigo ser assim e, até porque você mesma fala que eu sou parecido com o Phil. Assim como ele eu não posso deixar nunca de te fazer feliz sempre te enchendo te doce quando eu posso e alimentando minha draga lumbriguenta até porque senão ela fica nervosa e começa a pistolar de fome",
		},
		{
			"id": 3,
			"img": "img03",
			"yes": "E que depois de comer tem que tirar outro cochilo pra comida descer e fazer a digestão HEUHEUHEUHE até porque 50% do tempo de vida é dormindo pra recuperar as forças de ser uma TREMENDA GOSTOSA",
			"no": "E que depois de comer tem que tirar outro cochilo pra comida descer e fazer a digestão HEUHEUHEUHE até porque 50% do tempo de vida é dormindo pra recuperar as forças de ser uma TREMENDA GOSTOSA",
		},
		{
			"id": 4,
			"img": "img04",
			"yes": "Logo depois de acordar do seu sono de beleza, ela levanta plenamente e com sorriso no rosto de buchin chei e alimentada com agora um novo objetivo único e claro na mente: Fazer eu rir de nervoso até pifar",
			"no": "Logo depois de acordar do seu sono de beleza, ela levanta plenamente e com sorriso no rosto de buchin chei e alimentada com agora um novo objetivo único e claro na mente: Fazer eu rir de nervoso até pifar",
		},
		{
			"id": 5,
			"img": "img05",
			"yes": "Nesse momento você já deve estar se sentindo desse jeito (e com o mesmo sorrisinho no rosto) mas a verdade como você já percebeu é que eu te amo muito com todos os seus defeitos (que somam um total de 0) e suas qualidades que são infinitas. Namoro há dois anos com você e me sinto preparado nesse momento pra mais quantos anos forem. Feliz aniversário, lindona TE AMO MUITO!!!",
			"no": "Nesse momento você já deve estar se sentindo desse jeito (e com o mesmo sorrisinho no rosto) mas a verdade como você já percebeu é que eu te amo muito com todos os seus defeitos (que somam um total de 0) e suas qualidades que são infinitas. Namoro há dois anos com você e me sinto preparado nesse momento pra mais quantos anos forem. Feliz aniversário, lindona TE AMO MUITO!!!",
		},
		{
			"id": 6,
			"img": "img06",
			"yes": "E AMO MUITO TAMBÉM A JADE GIGI QUE É PARTE MAIS QUE CONFIRMADA DO NOSSO RELACIONAMENTO ATÉ PORQUE EU SOU PAI DELA",
			"no": "E AMO MUITO TAMBÉM A JADE GIGI QUE É PARTE MAIS QUE CONFIRMADA DO NOSSO RELACIONAMENTO ATÉ PORQUE EU SOU PAI DELA",
		},
	],
}




const photoAndActions = document.querySelector('.photo-and-actions');
photoAndActions.innerHTML = `
	<div class="card" id="0">
		<div class="photo-text">
			<div class="photo-title">
				<h2></h2>
			</div>
			<div class="bio">
				Feliz aniversário de namoro lindona. Nesses 2 anos de namoro eu confesso que
				não esperava que fosse namorar tanto tempo e tão pouco tempo depois de sair
				de um relacionamento. Além disso, eu nunca esperaria que fosse conhecer uma
				pessoa com você pelo Tinder e, depois desses dois anos, com uma grande ajuda rs,
				resolvi criar de novo um Tinder pra celebrar mostrando várias pessoas que eu me apaixonei.
			</div>
		</div>
	</div>

	<div class="actions">
		<div class="action dislike" onclick="likeDislike('no')">
			<i class="fas fa-times"></i>
		</div>

		<div class="action like" onclick="likeDislike('yes')">
			<i class="fas fa-heart"></i>
		</div>
	</div>
`

const card = document.querySelector('.card');
card.style.backgroundImage = `url(./img00.jpeg)`;

const like = document.querySelector('.like');
const dislike = document.querySelector('.dislike');



function likeDislike(state) {
	const newCardId = Number(document.querySelector('.card').id) + 1;
	const newData = data.cards[newCardId];
	console.log(state);

	const card = document.querySelector('.card');
	card.id = newCardId;
	console.log(newData.img);
	card.style.backgroundImage = `url(./${newData.img}.jpeg)`;

	// const photoTitle = document.querySelector('h2');
	// photoTitle.innerHTML = newData.title;

	const bio = document.querySelector('.bio');
	state === 'yes' ? bio.innerHTML = newData.yes : bio.innerHTML = newData.no;
}