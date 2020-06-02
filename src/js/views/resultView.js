import {elements} from './base';

export const showSingleReading = (cardsData) => {
    const markup = `
    <div class="single__spread">
			<div class="container-fluid resultTopPanel">
				<img class="resultCardPanel open" src="img/${cardsData.nameShort}.jpg" alt="${cardsData.name}" style="vertical-align: middle">
			</div>
			<div class="container-fluid resultTextPanel" >
				<p class="single__meaning resultText"> 
					<h2 class="resultText" >${cardsData.name}</h2>
					<p class="resultText">
						<br>
						<br>
						Summary:
						<br>
						${cardsData.summary}
						<br>
						<br>
						Attributes:
						<br>
						${cardsData.meaningUp}
					</p>
				</p>
			</div>
        </div>
    `;

    elements.resultpanel.insertAdjacentHTML('beforeend', markup);
}


export const showThreeReading = (cardsData) => {
    console.log('three reading result');
}