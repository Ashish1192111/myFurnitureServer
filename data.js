let products = [
    {
        prodCode: "DS2S245",
        category: "Dining",
        desc: ["Two	seater	Dining	Set", "Built	from	High	quality	wood", "1	year	warranty"],
        img: "https://hometown.gumlet.io/media/product/05/8273/19120/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [
            { ingName: "Dining	Table", qty: 1 },
            { ingName: "Chair", qty: 2 },
        ],
        title: "Two	seater	Dining	Set",
    },
    {
        prodCode: "DS6S761",
        category: "Dining",
        desc: [
            "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
            "Assembly	by	Skilled	Carpenters",
            "Made	from	Teak	wood",
        ],
        img: "https://hometown.gumlet.io/media/product/97/2453/21318/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [
            { ingName: "Dining	Table", qty: 1 },
            { ingName: "Chair", qty: 4 },
            { ingName: "Bench", qty: 1 },
        ],
        title: "Six	Seater	Dining	Set",
    },
    {
        prodCode: "DS4S177",
        category: "Dining",
        desc: [
            "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
            "Knock-down	construction	for	easy	transportation",
        ],
        img: "https://hometown.gumlet.io/media/product/08/2453/47088/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [
            { ingName: "Dining	Table", qty: 1 },
            { ingName: "Chair", qty: 4 },
        ],
        title: "Mild	Steel	Dining	Set",
    },
    {
        prodCode: "DC2S705",
        category: "Dining",
        desc: [
            "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
            "Beautiful	design	carved	on	dining	chair",
            "Dining	chair	seat	upholstered	in	dark	brown	Fabric",
        ],
        img: "https://hometown.gumlet.io/media/product/79/2653/48226/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [{ ingName: "Chair", qty: 2 }],
        title: "Dining	Chair	Set",
    },
    {
        prodCode: "BN1S388",
        category: "Dining",
        desc: [
            "Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
            "Comfortable	bench	for	a	relaxed	dinner",
        ],
        img: "https://hometown.gumlet.io/media/product/89/3063/70951/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
        ingredients: [{ ingName: "Bench", qty: 1 }],
        title: "Dining	Bench",
    },
    {
        prodCode: "SF2S532",
        category: "Drawing",
        desc: [
            "Characteristic	Rising	Track	Arm	Rest	Design",
            "Premium	High	Gloss	Leatherette	Upholstery",
            "Independent	Headrest	And	Lumber	Support",
        ],
        img: "https://hometown.gumlet.io/media/product/93/2463/65420/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [{ ingName: "Sofa", qty: 1 }],
        title: "Two	Seater	Sofa",
    },
    {
        prodCode: "SF2S206",
        category: "Drawing",
        desc: ["Two	Seater	Sofa	in	Blue	Colour", "Assembly	by	Skilled	Carpenters"],
        img: "https://hometown.gumlet.io/media/product/21/3253/45722/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [{ ingName: "Sofa", qty: 1 }],
        title: "Two	Seater	Sofa",
    },
    {
        prodCode: "SFBD311",
        category: "Drawing",
        desc: [
            "Sofa	Cum	bed	in	Brown	Colour",
            "Ply-wood	construction	with	hand	polished	finish",
            "Removable	fabric	cover	on	best	quality	foam	mattress",
            "Throw	cushions	and	bolsters	come	with	the	product",
        ],
        img: "https://hometown.gumlet.io/media/product/05/8273/19120/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [
            { ingName: "Sofa", qty: 1 },
            { ingName: "Cushions", qty: 2 },
        ],
        title: "Sofa	cum	Bed",
    },
    {
        prodCode: "BDQS381",
        category: "Bedroom",

        desc: [
            "Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
            "Box	Storage	included	for	Maximum	space	utilization",
            "Mattress	is	included",
        ],
        img: "https://hometown.gumlet.io/media/product/57/5863/18840/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [
            { ingName: "Bed", qty: 1 },
            { ingName: "Mattress", qty: 2 },
        ],
        title: "King	size	Bed",
    },
    {
        prodCode: "BDQS229",
        category: "Bedroom",
        desc: [
            "Wood	Hydraulic	Storage	Queen	Size	Bed",
            "Half	hydraulic	storage",
            "Superior	E2	grade	MDF	used	with	melamine	finish",
        ],
        img: "https://hometown.gumlet.io/media/product/73/5473/93376/1.jpg?mode=fill&w=335&h=335&dpr=1.3",
        ingredients: [{ ingName: "Bed", qty: 1 }],
        title: "Queen	size	Bed",
    },
    {
        prodCode: "ST1T425",
        category: "Study",
        desc: [
            "Wood	Study	Table	in	Walnut	Colour",
            "Assembly	by	Skilled	Carpenters",
            "Built	from	High	Quality	Wood",
        ],
        img: "https://hometown.gumlet.io/media/product/57/9863/56276/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
        ingredients: [{ ingName: "Study	Table", qty: 1 }],
        title: "Study	Table",
    },
    {
        prodCode: "ST1T588",
        category: "Study",
        desc: [
            "	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
            "Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
            "Superior	quality	MDF	with	stain	resistant	melamine	finish",
        ],
        img: "https://hometown.gumlet.io/media/product/16/4673/96042/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
        ingredients: [{ ingName: "Study	Table", qty: 1 }],
        title: "Study	Table",
    },
];


var users = [
    {
        userId: 1,
        name: "Admin",
        password: "admin1234",
        role: "admin",
        email: "admin@gmail.com",
    },
    {
        userId: 2,
        name: "User",
        password: "user1234",
        role: "user",
        email: "user@gmail.com",
    },
    
];

var carts = []

module.exports = {products, users, carts};