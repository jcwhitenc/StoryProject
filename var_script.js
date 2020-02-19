//Local Variables
let explanations = {
  "music": {
    "description": "Music in Movies",
    "categories": [
      "Use of Themes: There are no Themes used in the film - The Themes are distinct but blend together in a complex harmony throughout the film.",
      "Tone: The music is boring and doesn’t add much to the scene, maybe even distracts from it - The music sets the Tone of the scene and helps convey the emotion of what’s happening on screen.",
      "Recognizability: Most people feel like they’ve never heard the music before - Most people know exactly what movie the music is from, maybe even which scene.",
      "Popularity: Nobody listens to the music or cares about it - Most people can hum a few bars from the music if you ask them about the movie."
    ]
  },
  "movies": {
    "description": "Mainstream Movies",
    "categories": [
      "Characters: Most of the characters are easily forgotten, don’t add anything to the story, and are one-note - The characters are relatable and complex and add to the plot.",
      "Dialogue: The dialogue is boring, often explaining what is going on, or meaningless - The dialogue is full of subtext and has multiple purposes. ",
      "Imagery: The shots from the movie seem awkward, unnatural, devoid of meaning, and not thought out - The are multiple examples where the images from the movie have deep meaning or symbolism and stay with the audience.",
      "Plot/Plots: The plot has been done countless times in a similar way and is boring - The plots are realistic, compelling, and seem fresh.",
      "Popularity: No one has heard of this movie - Nearly everyone has an opinion about this movie."
    ]
  },
  "books": {
    "description": "Books",
    "categories": [
      "Characters: The characters are one-note and create no response from the reader - The reader has a deep connection with the main characters and the side characters have distinct purposes.",
      "Dialogue: The Dialogue is boring and reveals little about the character and the plot - The Dialogue stretches the reader’s perspective and is deep.",
      "Plot Devices: There is little use of plot devices and they don’t help move the plot that well - The plot devices are used purposefully but are also used in natural ways.",
      "Popularity: No one has heard about this book - Most people have at least opened the book if not finished it or listened to the Audio Book."
    ]
  }
}

let musicCells = [
  ["Theme",
    "Tone",
    "Recognizability",
    "Popularity"
  ], {
    "title": "Inception",
    "imagePath": "images/Inception.jpg",
    "Theme": 8,
    "Tone": 8,
    "Recognizability": 6,
    "Popularity": 6
  }, {
    "title": "Shrek",
    "imagePath": "images/Shrek.jpg",
    "Theme": 7,
    "Tone": 7,
    "Recognizability": 8,
    "Popularity": 8
  }, {
    "title": "Tarzan",
    "imagePath": "images/Tarzan.jpg",
    "Theme": 2,
    "Tone": 3,
    "Recognizability": 8,
    "Popularity": 6
  }, {
    "title": "Black Panther",
    "imagePath": "images/Black_Panther.jpg",
    "Theme": 7,
    "Tone": 8,
    "Recognizability": 9,
    "Popularity": 9
  }, {
    "title": "Lord of The Rings(Trilogy)",
    "imagePath": "images/Fellowship.jpg",
    "Theme": 8,
    "Tone": 9,
    "Recognizability": 9,
    "Popularity": 9
  }, {
    "title": "Guardians of the Galaxy",
    "imagePath": "images/Guardians.jpg",
    "Theme": 6,
    "Tone": 7,
    "Recognizability": 7,
    "Popularity": 9
  }, {
    "title": "The Holiday",
    "imagePath": "images/The_Holiday.jpg",
    "Theme": 9,
    "Tone": 9,
    "Recognizability": 4,
    "Popularity": 4
  }, {
    "title": "Frozen",
    "imagePath": "images/Frozen.jpg",
    "Theme": 4,
    "Tone": 8,
    "Recognizability": 10,
    "Popularity": 10
  }, {
    "title": "Pirates of the Carribean(Trilogy)",
    "imagePath": "images/Curse_of_the_Black_Pearl.png",
    "Theme": 9,
    "Tone": 9,
    "Recognizability": 10,
    "Popularity": 9
  }, {
    "title": "Brother Bear",
    "imagePath": "images/Brother_Bear.png ",
    "Theme": 8,
    "Tone": 6,
    "Recognizability": 4,
    "Popularity": 2
  }
]

let movieCells = [
  ["Characters",
    "Dialogue",
    "Imagery",
    "Plot/Plots",
    "Popularity"
  ], {
    "title": "Star Wars: The Last Jedi",
    "imagePath": "images/The_Last_Jedi.jpg",
    "Characters": 8,
    "Dialogue": 5,
    "Imagery": 7,
    "Plot/Plots": 5,
    "Popularity": 8
  }, {
    "title": "Inception",
    "imagePath": "images/Inception.jpg",
    "Characters": 9,
    "Dialogue": 8,
    "Imagery": 7,
    "Plot/Plots": 5,
    "Popularity": 8
  }, {
    "title": "Good Will Hunting",
    "imagePath": "images/Good_Will_Hunting.png",
    "Characters": 8,
    "Dialogue": 8,
    "Imagery": 6,
    "Plot/Plots": 7,
    "Popularity": 7
  }, {
    "title": "Suicide Squad",
    "imagePath": "images/Suicide_Squad.png",
    "Characters": 6,
    "Dialogue": 4,
    "Imagery": 4,
    "Plot/Plots": 4,
    "Popularity": 5
  }, {
    "title": "The Matrix",
    "imagePath": "images/The_Matrix.jpg",
    "Characters": 8,
    "Dialogue": 7,
    "Imagery": 10,
    "Plot/Plots": 9,
    "Popularity": 10
  }, {
    "title": "The Ten Commandments",
    "imagePath": "images/10_Commandments.jpg",
    "Characters": 6,
    "Dialogue": 6,
    "Imagery": 8,
    "Plot/Plots": 5,
    "Popularity": 4
  }, {
    "title": "Pirates of the Carribean: The Curse of the Black Pearl",
    "imagePath": "images/Curse_of_the_Black_Pearl.png",
    "Characters": 9,
    "Dialogue": 8,
    "Imagery": 9,
    "Plot/Plots": 7,
    "Popularity": 10
  }, {
    "title": "Pirates of the Carribean: At World's End",
    "imagePath": "images/At_Worlds_End.jpg",
    "Characters": 6,
    "Dialogue": 7,
    "Imagery": 7,
    "Plot/Plots": 4,
    "Popularity": 8
  }, {
    "title": "Wild Wild West",
    "imagePath": "images/Wild_West.jpg",
    "Characters": 6,
    "Dialogue": 5,
    "Imagery": 4,
    "Plot/Plots": 4,
    "Popularity": 4
  }
];

let bookCells = [
  ["Characters",
    "Dialogue",
    "Plot Devices",
    "Popularity"
  ],
  {
    "title": "Emma",
    "imagePath": "images/Emma.jpg",
    "Characters": 8,
    "Dialogue": 8,
    "Plot Devices": 8,
    "Popularity": 7,
  }, {
    "title": "Harry Potter and the Half Blood Prince",
    "imagePath": "images/Half_Blood.png",
    "Characters": 8,
    "Dialogue": 7,
    "Plot Devices": 9,
    "Popularity": 0,
  }, {
    "title": "Ender's Game",
    "imagePath": "images/Enders_Game.jpg",
    "Characters": 9,
    "Dialogue": 7,
    "Plot Devices": 9,
    "Popularity": 6,
  }, {
    "title": "The Giver",
    "imagePath": "images/The_Giver.jpg",
    "Characters": 7,
    "Dialogue": 7,
    "Plot Devices": 5,
    "Popularity": 5,
  }, {
    "title": "The Hunger Games",
    "imagePath": "images/Hunger_Games.jpg",
    "Characters": 3,
    "Dialogue": 3,
    "Plot Devices": 3,
    "Popularity": 10,
  }, {
    "title": "Robinson Crusoe",
    "imagePath": "images/Robinson_Crusoe.jpg",
    "Characters": 2,
    "Dialogue": 2,
    "Plot Devices": 2,
    "Popularity": 2,
  }, {
    "title": "The Count Of Monte Cristo",
    "imagePath": "images/Monte_Cristo.jpg",
    "Characters": 10,
    "Dialogue": 9,
    "Plot Devices": 9,
    "Popularity": 5,
  }, {
    "title": "Ella Enchanted",
    "imagePath": "images/Ella_Enchanted.jpg",
    "Characters": 8,
    "Dialogue": 7,
    "Plot Devices": 8,
    "Popularity": 4,
  }, {
    "title": "Gulliver's Travel",
    "imagePath": "images/Gullivers_travels.jpg",
    "Characters": 1,
    "Dialogue": 3,
    "Plot Devices": 2,
    "Popularity": 2,
  }, {
    "title": "The Scarlet Pimpernel",
    "imagePath": "images/The_Scarlet_Pimpernel.jpg",
    "Characters": 9,
    "Dialogue": 9,
    "Plot Devices": 8,
    "Popularity": 5,
  }
];

let rankCells = {
  "music": musicCells,
  "movies": movieCells,
  "books": bookCells
}
