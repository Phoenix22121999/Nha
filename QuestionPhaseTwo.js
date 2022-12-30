const QuestionPhaseTwo = [
	{ question: "Tôi thấy khó mà thoải mái được", type: "S" },
	{ question: "Tôi bị khô miệng", type: "A" },
	{ question: "Tôi không thấy có chút cảm xúc tích cực nào", type: "D" },
	{
		question:
			"Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)",
		type: "A",
	},
	{ question: "Tôi thấy khó bắt tay vào công việc", type: "D" },
	{
		question: "Tôi đã phản ứng thái quá khi có những sự việc xảy ra",
		type: "S",
	},
	{ question: "Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay...)", type: "A" },
	{ question: "Tôi thấy mình đang suy nghĩ quá nhiều", type: "S" },
	{
		question:
			"Tôi lo lắng về những tình huống có thể khiến tôi hoảng sợ hoặc biến tôi thành trò cười",
		type: "A",
	},
	{ question: "Tôi thấy mình chẳng có gì để mong đợi cả", type: "D" },
	{ question: "Tôi thấy bản thân dễ bị kích động", type: "S" },
	{ question: "Tôi thấy khó thư giãn được", type: "S" },
	{ question: "Tôi cảm thấy chán nản, thất vọng", type: "D" },
	{
		question:
			"Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm",
		type: "S",
	},
	{ question: "Tôi thấy mình gần như hoảng loạn", type: "A" },
	{ question: "Tôi không thấy hăng hái với bất kỳ việc gì nữa", type: "D" },
	{ question: "Tôi cảm thấy mình chẳng đáng làm người", type: "D" },
	{ question: "Tôi thấy mình khá dễ phật ý, tự ái", type: "S" },
	{
		question:
			"Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp)",
		type: "A",
	},
	{ question: "Tôi hay sợ vô cớ", type: "A" },
	{ question: "Tôi thấy cuộc sống vô nghĩa", type: "D" },
];

const AnswersPhaseTwo = [
	{ answer: "Không đúng với tôi chút nào cả", point: 0 },
	{ answer: "Đúng với tôi phần nào, hoặc thỉnh thoảng mới đúng", point: 1 },
	{
		answer: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
		point: 2,
	},
	{
		answer: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
		point: 3,
	},
];

const ResultTablePhaseTwo = {
	D: [
		{
			type: "Bình Thường",
			min: 0,
		},
		{
			type: "Nhẹ",
			min: 10,
		},
		{
			type: "Vừa",
			min: 14,
		},
		{
			type: "Nặng",
			min: 21,
		},
		{
			type: "Rất Nặng",
			min: 28,
		},
	],
	A: [
		{
			type: "Bình Thường",
			min: 0,
		},
		{
			type: "Nhẹ",
			min: 8,
		},
		{
			type: "Vừa",
			min: 10,
		},
		{
			type: "Nặng",
			min: 15,
		},
		{
			type: "Rất Nặng",
			min: 20,
		},
	],
	S: [
		{
			type: "Bình Thường",
			min: 0,
		},
		{
			type: "Nhẹ",
			min: 15,
		},
		{
			type: "Vừa",
			min: 19,
		},
		{
			type: "Nặng",
			min: 26,
		},
		{
			type: "Rất Nặng",
			min: 34,
		},
	],
};
