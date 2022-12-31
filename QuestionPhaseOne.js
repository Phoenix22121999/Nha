const goodAnwser = "Tốt. Cứ tiếp tục phát huy nhé";
const pleaseStop =
	"Please stop!!! Làm như vậy sẽ chỉ tổ khiến bạn mất thời gian và hại sức khỏe của bạn thôi. Mỗi khi bị ovtk, mình hay hít thở sâu, uống một ly nước ấm, thiền, chơi thể thao, tụ tập với bạn bè để bình tâm lại tâm trí của chính mình";
const QuestionPhaseOne = [
	{
		question: "Hiện tại bạn cảm thấy như thế nào?",
		answers: [
			{
				content: "Ổn",
				reply: goodAnwser,
			},
			{
				content: "Không ổn",
				reply: "Bạn hãy chú ý sức khỏe thể chất lẫn tinh thần của bản thân. Nếu có vấn đề gì nghiêm trọng thì nên đến gặp bác sĩ nhé",
			},
		],
	},

	{
		question: "Gần đây bạn thường ngủ vào mấy giờ?",
		answers: [
			{
				content: "8-11 giờ đêm",
				reply: goodAnwser,
			},
			{
				content: "Sau 12 giờ đêm ",
				reply: "Ngủ muộn rất có hại cho sức khỏe, khiến cơ thể thiếu năng lượng, mệt mỏi và giảm sức đề kháng. Vì vậy, hãy sắp xếp thời gian ngủ sớm hơn nhé",
			},
			{
				content: "Bạn ngủ vào buổi sáng và thức đêm làm việc ",
				reply: "Nếu bạn là cú đêm thì nhớ dành thời gian để nghỉ vào buổi sáng nhé",
			},
			{
				content: "Bị mất ngủ nhiều ngày ",
				reply: "Hãy tìm nguyên nhân và giải quyết nó. Bạn nên chú ý sức khỏe của bản thân mình. Nếu vẫn không khả quan, bạn nên đến gặp chuyên gia để có lời khuyên tốt nhất",
			},
		],
	},
	{
		question: "Khi bị Overthinking bạn có hay sử dụng mạng xã hội không",
		answers: [
			{
				content: "Có.",
				reply: "Dừng lại ngay! Nó chỉ khiến bạn mệt mỏi và nặng nề hơn mà thôi. Thay vào đó, bạn hãy hít thở sâu, uống một ly nước, thiền định tâm trí của mình",
			},
			{
				content: "Không",
				reply: "Rất tốt. Mỗi khi bị overthiking, bạn hãy hít thở sâu, uống một ly nước, thiền, chơi thể thao, tụ tập với bạn bè để bình tâm lại tâm trí của chính mình",
			},
		],
	},
	{
		question: "Dạo này, bạn có ăn uống đầy đủ không?",
		answers: [
			{
				content: "Ăn uống ngày đủ 3 bữa ",
				reply: "Rất tốt. Tiếp tục phát huy nhé!",
			},
			{
				content: "Bữa ăn, bữa nhịn",
				reply: "Bạn nên chú ý ăn đầy đủ để có cơ thể khỏe mạnh",
			},
			{
				content: "Chả muốn ăn uống gì cả ",
				reply: "Bạn nên chú ý đến sức khỏe của bạn thân. Bạn phải ăn uống đầy đủ để có sức khỏe và cơ thể khỏe mạnh",
			},
		],
	},
	{
		question: "Bạn có cảm thấy như cả thế giới đang chống lại mình không?",
		answers: [
			{
				content: "Có",
				reply: "Bạn hãy xem nó là một phần tất yếu cuộc sống. Mỗi khi buồn bạn có thể hít thở sâu, tâm sự với bạn bè hoặc đi chơi chẳng hạn",
			},
			{
				content: "Không",
				reply: "Tốt. Tiếp tục phát huy nhé!",
			},
		],
	},
	{
		question:
			"Gần đây, bạn có cảm thấy mệt mỏi, kiệt sức khi làm việc không?",
		answers: [
			{
				content: "Có",
				reply: "Bạn nên chú ý sức khỏe và chia thời gian nghỉ ngơi hợp lý thì mới có sức khỏe tốt để làm việc",
			},
			{
				content: "Không",
				reply: "Tuyệt. Bạn nhớ giữ gìn sức khỏe bản thân mình nhé",
			},
		],
	},
	{
		question:
			"Bạn có tâm sự gì giữ trong lòng nhưng không muốn nói ra không?",
		answers: [
			{
				content: "Có",
				reply: "Bạn chia sẻ vấn đề bạn gặp phải thay vì cứ giữ kín trong lòng. Vì việc nói ra những điều chất chứa trong lòng giúp ta giải tỏa cảm xúc, tháo gỡ mọi khúc mắc và suy nghĩ lạc quan hơn",
			},
			{
				content: "Không có",
				reply: "Tốt. Tiếp tục phát huy nhé",
			},
		],
	},
];
