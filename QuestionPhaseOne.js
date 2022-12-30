const goodAnwser = "Rất tốt. Bạn cứ tiếp tục phát huy nhé";
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
				content: "Trầm cảm ",
				reply: "Bạn nên chú ý sức khỏe của bản thân hơn và bạn nên đến gặp bác sĩ, chuyên gia để có lời khuyên tốt nhất",
			},
		],
	},
	{
		question: "Dạo này, bạn có ăn uống đầy đủ không?",
		answers: [
			{
				content: "Ăn uống ngày đủ 3 bữa ",
				reply: goodAnwser,
			},
			{
				content: "Thích thì ăn không thì thôi ",
				reply: "Bạn nên chú ý ăn đầy đủ bữa hơn để cơ thể hoạt động bình thường",
			},
			{
				content: "Chả muốn ăn uống gì cả ",
				reply: "Bạn nên chú ý đến sức khỏe của bạn thân hơn. Bạn phải ăn uống đầy đủ để có sức khỏe và cơ thể khỏe mạnh",
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
				reply: "Bạn nên chú ý sức khỏe và ngủ sớm hơn để có cơ thể khỏe mạnh",
			},
			{
				content: "Bạn ngủ vào buổi sáng và thức đêm làm việc ",
				reply: "Nếu bạn là một Night Owl, làm việc hiệu quả vào ban đêm thì bạn nên sắp xếp thời gian nghỉ ngơi và làm việc hợp lý nha",
			},
			{
				content: "Bị mất ngủ nhiều ngày ",
				reply: "Bạn nên chú ý sức khỏe của bản thân mình và ngủ đủ giấc hơn, mình khuyên bạn nên đến gặp bác sĩ để có lời khuyên tốt nhất",
			},
		],
	},
	{
		question: "Khi bị Overthinking bạn có hay sử dụng social media không?",
		answers: [
			{
				content: "Có. Luôn luôn.",
				reply: pleaseStop,
			},
			{
				content: "Có. Thỉnh thoảng ",
				reply: pleaseStop,
			},
			{
				content: "Không",
				reply: "Rất tốt. Ít ai làm được như bạn. Mỗi khi bị ovtk, mình hay hít thở sâu, uống một ly nước ấm, thiền, chơi thể thao, tụ tập với bạn bè để bình tâm lại tâm trí của chính mình",
			},
			{
				content: "Bị mất ngủ nhiều ngày ",
				reply: "Bạn nên chú ý sức khỏe của bản thân mình và ngủ đủ giấc hơn, mình khuyên bạn nên đến gặp bác sĩ để có lời khuyên tốt nhất",
			},
		],
	},
];
