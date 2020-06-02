import {elements} from './base';

export const showSingleReading = async (cardsData) => {

    const markup = `
    <div id="single__spread__result">
			<div class="container-fluid resultTopPanel">
				<img class="resultCardPanel open" src="img/${cardsData.nameShort}.jpg" alt="${cardsData.name}" style="vertical-align: middle">
			</div>
			<div class="container-fluid resultTextPanel" >
				<p class="single__meaning resultText"> 
					<h2 class="resultText" >${cardsData.name}</h2>
					<p class="resultText">
						<b>Summary:</b>
						<br>
						${cardsData.summary}
						<br>
						<br>
						<b>Attributes:</b>
						<br>
						${cardsData.meaningUp}
					</p>
				</p>
			</div>
        </div>
    `;

    elements.resultPanel.insertAdjacentHTML('beforeend', markup);
}


export const showThreeReading = (pastData, presentData ,futureData) => {
	const markup = `

	<div id="three__spread__result">
		<div class="row">
			<div class="col-md-4 resultTopPanel container-fluid ">
				<h2 class="resultText">Past</h2>
				<img class="resultCardPanel open" src="img/${pastData.nameShort}.jpg" alt="${pastData.name}" >                  
			</div>
			<div class="col-md-4 resultTopPanel container-fluid ">
				<h2 class="resultText">Present</h2>
				<img class="resultCardPanel open" src="img/${presentData.nameShort}.jpg" alt="${presentData.name}" >  
			</div>
			<div class="col-md-4 resultTopPanel container-fluid ">
				<h2 class="resultText">Future</h2>
				<img class="resultCardPanel open" src="img/${futureData.nameShort}.jpg" alt="${futureData.name}" ">  
			</div>
		</div>
		<div class=" row bottomPanel" >
			<div class="col-md-4 resultTextPanel">
				<p class="past__meaning resultText">
					<p class="single__meaning resultText"> 
						<h2 class="resultText" >${pastData.name}</h2>
						<p class="resultText">
							<b>Summary:</b>
							<br>
							${pastData.summary}
							<br>
							<br>
							<b>Attributes:</b>
							<br>
							${pastData.meaningUp}
						</p>
					</p>
				</p>
			</div>
			<div class="col-md-4 resultTextPanel">
				<p class="present__meaning resultText">
					<p class="single__meaning resultText"> 
						<h2 class="resultText" >${presentData.name}</h2>
						<p class="resultText">
							<b>Summary:</b>
							<br>
							${presentData.summary}
							<br>
							<br>
							<b>Attributes:</b>
							<br>
							${presentData.meaningUp}
						</p>
					</p>
				</p>
			</div>
			<div class="col-md-4 resultTextPanel">
				<p class="future__meaning resultText">
					<p class="single__meaning resultText"> 
						<h2 class="resultText" >${futureData.name}</h2>
						<p class="resultText">
							<b>Summary:</b>
							<br>
							${futureData.summary}
							<br>
							<br>
							<b>Attributes:</b>
							<br>
							${futureData.meaningUp}
						</p>
					</p>
				</p>
			</div>
		</div>
	</div>
	`;

    elements.resultPanel.insertAdjacentHTML('beforeend', markup);


}

export const clearReading = () => {
	var singleReadingElement = document.getElementById("single__spread__result");

	var threeReadingElement = document.getElementById("three__spread__result");

	if( singleReadingElement) singleReadingElement.remove();

	if( threeReadingElement) threeReadingElement.remove();
}