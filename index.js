const question = document.getElementsByClassName("question")[0];
const answersBox = document.getElementsByClassName("answers-box")[0];
const replyBox = document.getElementsByClassName("reply-box")[0];
const nextButton = document.getElementsByClassName("button")[0];
const copyRight = document.getElementsByClassName("copy-right")[0];
const container = document.getElementsByClassName("container")[0];

let curentIndex = 0;
let curentAnswer = [];

let lastAnswer = {};
let total = {
	S: 0,
	A: 0,
	D: 0,
	total: 0,
};
let finalResultPhaseTwo = {
	S: "",
	A: "",
	D: "",
};

const nextQuestion = () => {
	question.textContent = QuestionPhaseOne[curentIndex].question;
	answersBox.innerHTML = "";
	for (
		let index = 0;
		index < QuestionPhaseOne[curentIndex].answers.length;
		index++
	) {
		const element = document.createElement("div", {});
		element.className = `box`;
		element.innerHTML = getCard(
			QuestionPhaseOne[curentIndex].answers[index].content
		);
		element.addEventListener("click", (e) => {
			e.preventDefault();
			curentAnswer.push(e.target.textContent);
			showReply(QuestionPhaseOne[curentIndex].answers[index]);
			// nextQuestion();
		});
		answersBox.appendChild(element);
	}
};

const moveToResult = () => {
	question.style.fontSize = "50px";
	question.style.textAlign = "center";
	question.textContent =
		"Sau đây là bài trắc nghiệm DASS 21. Bài test (trắc nghiệm) DASS 21 (gồm 21 câu hỏi) là thang đo chẩn đoán khá phổ biến, chính xác và nhanh chóng về mức độ rối loạn lo âu – trầm cảm - stress mà bạn đọc có thể tự làm trong vài phút";
	nextButton.innerHTML = "Tiếp Tục";
	nextButton.classList.remove("hide");
	nextButton.removeEventListener("click", clickPhaseOne);
	nextButton.addEventListener("click", moveToHowToCalc);
};

const moveToHowToCalc = () => {
	question.textContent = "";
	answersBox.innerHTML = ResultTable;
	nextButton.innerHTML = "Bắt đầu";
	nextButton.classList.remove("hide");
	nextButton.removeEventListener("click", moveToHowToCalc);
	nextButton.addEventListener("click", clickStartPhaseTwo);
};

const clickStartPhaseTwo = (e) => {
	e.preventDefault();
	curentIndex = 0;
	question.style.fontSize = "36px";

	nextButton.classList.add("hide");
	copyRight.classList.remove("hide");
	nextQuestionTwo();

	nextButton.removeEventListener("click", clickStartPhaseTwo);
};

const nextQuestionTwo = () => {
	question.textContent = QuestionPhaseTwo[curentIndex].question;
	answersBox.innerHTML = "";
	for (let index = 0; index < AnswersPhaseTwo.length; index++) {
		const element = document.createElement("div", {});
		element.className = `box`;
		element.innerHTML = getCard(AnswersPhaseTwo[index].answer);
		element.addEventListener("click", (e) => {
			e.preventDefault();
			total[QuestionPhaseTwo[curentIndex].type] =
				total[QuestionPhaseTwo[curentIndex].type] +
				AnswersPhaseTwo[index].point;
			total.total = total.total + AnswersPhaseTwo[index].point;
			curentIndex++;
			if (curentIndex >= QuestionPhaseTwo.length) {
				moveToFinalResult();
			} else {
				nextQuestionTwo();
			}
		});
		answersBox.appendChild(element);
	}
};

const moveToFinalResult = () => {
	total.A = total.A * 2;
	let initialValue = "";
	finalResultPhaseTwo.A = ResultTablePhaseTwo.A.reduce(
		(currentType, value) => {
			if (total.A >= value.min) {
				return value.type;
			}
			return currentType;
		},
		initialValue
	);
	total.D = total.D * 2;
	finalResultPhaseTwo.D = ResultTablePhaseTwo.D.reduce(
		(currentType, value) => {
			if (total.D >= value.min) {
				return value.type;
			}
			return currentType;
		},
		""
	);
	total.S = total.S * 2;
	finalResultPhaseTwo.S = ResultTablePhaseTwo.S.reduce(
		(currentType, value) => {
			if (total.S >= value.min) {
				return value.type;
			}
			return currentType;
		},
		""
	);
	question.textContent = "Kết quả: ";
	question.style.fontSize = "50px";
	answersBox.style.fontSize = "36px";
	nextButton.classList.remove("hide");
	nextButton.textContent = "Tiếp tục";
	nextButton.removeEventListener("click", nextQuestionTwo);
	nextButton.addEventListener("click", showEndpage);
	answersBox.innerHTML = getResult(
		finalResultPhaseTwo.S,
		finalResultPhaseTwo.A,
		finalResultPhaseTwo.D
	);
};

const showEndpage = () => {
	container.innerHTML = EndPage;
};

const clickPhaseTwo = (e) => {
	e.preventDefault();
	curentIndex++;
	nextQuestionTwo();
};

const clickPhaseOne = (e) => {
	e.preventDefault();
	curentIndex++;
	nextButton.classList.add("hide");
	if (curentIndex >= QuestionPhaseOne.length) {
		moveToResult();
	} else {
		nextQuestion();
	}
};

const showReply = (value) => {
	// curentIndex++;
	answersBox.innerHTML = "";
	question.textContent = value.reply;
	nextButton.classList.remove("hide");
	// answersBox.innerHTML = "ban bi khung";
};

const getCard = (question) => {
	let number = getRandomInt();
	return `
    <div class='img center img-${number}'>
    <div class='text'>
    <p>${question}</p>
    </div>
    </div>`;
};
const getResult = (S, A, D) => {
	var quotes = Quotes[Math.floor(Math.random() * Quotes.length)];
	return `
    <div class='result-box'>
		<div class='result-warper'>
			<div class='result-card'>
				Stress: ${S}
			</div>
			<div class='result-card'>
				Lo âu: ${A}
			</div>
			<div class='result-card'>
				Trầm cảm: ${D}
			</div>
		</div>
		<div class='quotes-warper'>
			${quotes}
		</div>
    </div>
	
	`;
};
function getRandomInt() {
	return Math.floor(Math.random() * 4) + 1;
}
const oninit = () => {
	// question.innerHTML = `<div class="web-name-background">Rêveur</div>`;
	question.innerHTML = `<div class="web-name-background"><div class="web-name">Rêveur</div></div>`;
	answersBox.textContent = `Bạn có đang ổn không? Hãy để chúng mình ôm bạn vào lòng nhé`;
	nextButton.classList.remove("hide");
	// question.style.fontSize = "36px";
	answersBox.style.fontSize = "30px";
	answersBox.style.padding = "10px";
	answersBox.style.textAlign = "center";
	nextButton.innerHTML = "Bắt đầu";
	nextButton.addEventListener("click", onStart);
};

const onStart = () => {
	nextButton.classList.add("hide");
	nextButton.innerHTML = "Tiếp tục";
	question.style.fontSize = "";
	answersBox.style.padding = "";
	answersBox.style.textAlign = "";
	nextQuestion();
	nextButton.removeEventListener("click", onStart);
	nextButton.addEventListener("click", clickPhaseOne);
};
oninit();
// nextQuestion();
