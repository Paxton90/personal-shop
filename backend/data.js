import bcrypt from 'bcrypt'


export const stocks = [
    {
        "brand": "Guerlain",
        "name": "法國嬌蘭傳奇之夜 Guerlain Les Légendaires Vol De Nuit",
        "imageUrls": ["/images/01.png", "/images/01-1.jpg"],
        "price": 60,
        "description": "這款香水以迷人的調香組合帶您踏上一段迷人的嗅覺之旅。它以柑橘和檸檬的閃耀清新開場，營造出活潑而充滿活力的氛圍。香水的中調展現了豐富且誘人的花香，融合了玫瑰、茉莉和鳶尾花的馥郁花香。這些細膩迷人的花香賦予了香水浪漫和魅惑的氛圍。\n\n隨著香水的發展，它揭示了更深邃和神秘的層面。溫暖而性感的基調浮現出來，包括香根草、檀香木和香草。這些香調營造出柔滑而令人安心的氛圍，讓您沉浸在一種優雅和性感的氛圍中。",
        "countInStock": 0
    },
    {
        "brand": "brand02",
        "name": "名稱02",
        "imageUrls": ["/images/02.png"],
        "price": 90,
        "description": "test02",
        "countInStock": 3
    },
    {
        "brand": "brand03",
        "name": "名稱03",
        "imageUrls": ["/images/03.png"],
        "price": 70,
        "description": "test03",
        "countInStock": 0
    },
    {
        "brand": "brand04",
        "name": "名稱04",
        "imageUrls": ["/images/04.png"],
        "price": 120,
        "description": "test04",
        "countInStock": 20
    },
    {
        "brand": "brand05",
        "name": "名稱05",
        "imageUrls": ["/images/05.png"],
        "price": 360,
        "description": "test05",
        "countInStock": 120
    },
    {
        "brand": "brand06",
        "name": "名稱06",
        "imageUrls": ["/images/06.png"],
        "price": 560,
        "description": "test06",
        "countInStock": 330
    }
]

export const users = [
    {
        name: "Test Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("aA22537743", 10),
        isAdmin: true
    },
    {
        name: "Test User",
        email: "user@example.com",
        password: bcrypt.hashSync("aA22537743", 10),
        isAdmin: false
    }
]