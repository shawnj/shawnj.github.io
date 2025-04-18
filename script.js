// Tarot cards database with meanings
const tarotCards = [
    {
        id: 0,
        name: "The Fool",
        image: "https://www.trustedtarot.com/img/cards/the-fool.png",
        meaning: "New beginnings, spontaneity, innocence, and a free spirit. The Fool represents taking a leap of faith into the unknown."
    },
    {
        id: 1,
        name: "The Magician",
        image: "https://www.trustedtarot.com/img/cards/the-magician.png",
        meaning: "Manifestation, resourcefulness, and inspired action. The Magician represents harnessing one's talents to achieve goals."
    },
    {
        id: 2,
        name: "The High Priestess",
        image: "https://www.trustedtarot.com/img/cards/the-high-priestess.png",
        meaning: "Intuition, sacred knowledge, and divine feminine energy. The High Priestess represents trusting your inner voice."
    },
    {
        id: 3,
        name: "The Empress",
        image: "https://www.trustedtarot.com/img/cards/the-empress.png",
        meaning: "Femininity, nurturing, fertility, and abundance. The Empress represents creation and growth."
    },
    {
        id: 4,
        name: "The Emperor",
        image: "https://www.trustedtarot.com/img/cards/the-emperor.png",
        meaning: "Authority, structure, control, and fatherhood. The Emperor represents leadership and stability."
    },
    {
        id: 5,
        name: "The Hierophant",
        image: "https://www.trustedtarot.com/img/cards/the-hierophant.png",
        meaning: "Tradition, conformity, morality, and ethics. The Hierophant represents following established paths."
    },
    {
        id: 6,
        name: "The Lovers",
        image: "https://www.trustedtarot.com/img/cards/the-lovers.png",
        meaning: "Love, harmony, relationships, and choices. The Lovers represent connection and alignment of values."
    },
    {
        id: 7,
        name: "The Chariot",
        image: "https://www.trustedtarot.com/img/cards/the-chariot.png",
        meaning: "Control, willpower, determination, and success. The Chariot represents overcoming obstacles through focus."
    },
    {
        id: 8,
        name: "Strength",
        image: "https://www.trustedtarot.com/img/cards/strength.png",
        meaning: "Courage, patience, compassion, and inner strength. Strength represents gentle power and resilience."
    },
    {
        id: 9,
        name: "The Hermit",
        image: "https://www.trustedtarot.com/img/cards/the-hermit.png",
        meaning: "Soul-searching, introspection, and inner guidance. The Hermit represents seeking deeper truth in solitude."
    },
    {
        id: 10,
        name: "Wheel of Fortune",
        image: "https://www.trustedtarot.com/img/cards/wheel-of-fortune.png",
        meaning: "Change, cycles, fate, and turning points. The Wheel of Fortune represents life's unpredictable nature."
    },
    {
        id: 11,
        name: "Justice",
        image: "https://www.trustedtarot.com/img/cards/justice.png",
        meaning: "Fairness, truth, cause and effect, and law. Justice represents accountability and balance."
    },
    {
        id: 12,
        name: "The Hanged Man",
        image: "https://www.trustedtarot.com/img/cards/the-hanged-man.png",
        meaning: "Surrender, letting go, new perspectives. The Hanged Man represents seeing from a different angle."
    },
    {
        id: 13,
        name: "Death",
        image: "https://www.trustedtarot.com/img/cards/death.png",
        meaning: "Endings, transformation, and transition. Death represents the end of a cycle and the beginning of something new."
    },
    {
        id: 14,
        name: "Temperance",
        image: "https://www.trustedtarot.com/img/cards/temperance.png",
        meaning: "Balance, moderation, patience, and purpose. Temperance represents finding middle ground and harmony."
    },
    {
        id: 15,
        name: "The Devil",
        image: "https://www.trustedtarot.com/img/cards/the-devil.png",
        meaning: "Addiction, materialism, playfulness, and restriction. The Devil represents being chained to desires."
    },
    {
        id: 16,
        name: "The Tower",
        image: "https://www.trustedtarot.com/img/cards/the-tower.png",
        meaning: "Sudden upheaval, revelation, and awakening. The Tower represents breaking down false structures."
    },
    {
        id: 17,
        name: "The Star",
        image: "https://www.trustedtarot.com/img/cards/the-star.png",
        meaning: "Hope, faith, rejuvenation, and serenity. The Star represents inspiration and optimism."
    },
    {
        id: 18,
        name: "The Moon",
        image: "https://www.trustedtarot.com/img/cards/the-moon.png",
        meaning: "Illusion, fear, subconscious, and uncertainty. The Moon represents navigating through the unknown."
    },
    {
        id: 19,
        name: "The Sun",
        image: "https://www.trustedtarot.com/img/cards/the-sun.png",
        meaning: "Joy, success, celebration, and positivity. The Sun represents the warmth of accomplishment and happiness."
    },
    {
        id: 20,
        name: "Judgement",
        image: "https://www.trustedtarot.com/img/cards/judgement.png",
        meaning: "Reflection, reckoning, awakening, and rebirth. Judgement represents evaluation and spiritual growth."
    },
    {
        id: 21,
        name: "The World",
        image: "https://www.trustedtarot.com/img/cards/the-world.png",
        meaning: "Completion, integration, accomplishment, and travel. The World represents fulfillment and harmony."
    }
];

// Songs database with meanings matching tarot themes
const songs = [
    // The Fool
    {
        cardId: 0,
        songs: [
            {
                name: "Jump",
                artist: "Van Halen",
                reason: "Embodies the spirit of taking a leap of faith and embracing new beginnings.",
                link: "https://www.youtube.com/watch?v=SwYN7mTi6HM"
            },
            {
                name: "Free Fallin'",
                artist: "Tom Petty",
                reason: "Represents the Fool's carefree attitude and willingness to step into the unknown.",
                link: "https://www.youtube.com/watch?v=1lWJXDG2i0A"
            },
            {
                name: "Don't Stop Me Now",
                artist: "Queen",
                reason: "Captures the Fool's enthusiasm and spontaneous energy as they begin their journey.",
                link: "https://www.youtube.com/watch?v=HgzGwKwLmgM"
            },
            {
                name: "Into the Great Wide Open",
                artist: "Tom Petty",
                reason: "Tells the story of someone embarking on a new adventure with innocent optimism.",
                link: "https://www.youtube.com/watch?v=xqmFxgEGKH0"
            },
            {
                name: "Walking on Sunshine",
                artist: "Katrina and The Waves",
                reason: "Embodies the joyful, carefree energy of The Fool at the beginning of their journey.",
                link: "https://www.youtube.com/watch?v=iPUmE-tne5U"
            },
            {
                name: "Born to Run",
                artist: "Bruce Springsteen",
                reason: "Expresses the desire to break free and chart one's own path, central to The Fool's spirit.",
                link: "https://www.youtube.com/watch?v=IxuThNgl3YA"
            },
            {
                name: "Wild Child",
                artist: "The Doors",
                reason: "Celebrates the untamed innocence and spontaneity embodied by The Fool.",
                link: "https://www.youtube.com/watch?v=K3CHi_9sxj0"
            },
            {
                name: "Life Is A Highway",
                artist: "Tom Cochrane",
                reason: "Represents the Fool's journey as an adventure with unlimited possibilities.",
                link: "https://www.youtube.com/watch?v=U3sMjm9Eloo"
            },
            {
                name: "I'm Free",
                artist: "The Who",
                reason: "Captures the liberating essence of The Fool's unrestrained spirit.",
                link: "https://www.youtube.com/watch?v=uRD_gIoVOmY"
            },
            {
                name: "Learning to Fly",
                artist: "Tom Petty",
                reason: "Reflects The Fool's process of discovering their wings as they venture into the unknown.",
                link: "https://www.youtube.com/watch?v=s5BJXwNeKsQ"
            }
        ]
    },
    // The Magician
    {
        cardId: 1,
        songs: [
            {
                name: "Magic",
                artist: "Coldplay",
                reason: "Reflects the Magician's ability to manifest dreams and transform reality.",
                link: "https://www.youtube.com/watch?v=Qtb11P1FWnc"
            },
            {
                name: "Do You Believe in Magic",
                artist: "The Lovin' Spoonful",
                reason: "Embodies the wonder and power that the Magician represents.",
                link: "https://www.youtube.com/watch?v=JnbfuAcCqpY"
            },
            {
                name: "Pure Imagination",
                artist: "Gene Wilder",
                reason: "Captures the creative manifestation powers of the Magician archetype.",
                link: "https://www.youtube.com/watch?v=SVi3-PrQ0pY"
            },
            {
                name: "Superstition",
                artist: "Stevie Wonder",
                reason: "Explores the mystical forces that The Magician works with and manipulates.",
                link: "https://www.youtube.com/watch?v=0CFuCYNx-1g"
            },
            {
                name: "Black Magic Woman",
                artist: "Santana",
                reason: "Expresses the enchanting and transformative power of The Magician's craft.",
                link: "https://www.youtube.com/watch?v=wyQUCYl-ocs"
            },
            {
                name: "Every Little Thing She Does Is Magic",
                artist: "The Police",
                reason: "Celebrates the magical quality of turning intention into reality.",
                link: "https://www.youtube.com/watch?v=aENX1Sf3fgQ"
            },
            {
                name: "Could You Be Loved",
                artist: "Bob Marley",
                reason: "Reflects the Magician's message about manifesting positivity and transformative energy.",
                link: "https://www.youtube.com/watch?v=r56MxMD6qrY"
            },
            {
                name: "Magic Power",
                artist: "Triumph",
                reason: "Directly addresses the magical ability to transform one's circumstances.",
                link: "https://www.youtube.com/watch?v=p1G6W863ppU"
            },
            {
                name: "You Can Do Magic",
                artist: "America",
                reason: "Embodies the Magician's message that we possess the power to create our reality.",
                link: "https://www.youtube.com/watch?v=jb8Sa0jp7Pw"
            },
            {
                name: "Magical Mystery Tour",
                artist: "The Beatles",
                reason: "Represents the Magician as a guide through transformative experiences.",
                link: "https://www.youtube.com/watch?v=l8WMGBuNaus"
            }
        ]
    },
    // The High Priestess
    {
        cardId: 2,
        songs: [
            {
                name: "Rhiannon",
                artist: "Fleetwood Mac",
                reason: "Evokes the mystical, intuitive energy of the High Priestess.",
                link: "https://www.youtube.com/watch?v=U_aYibUx1B8"
            },
            {
                name: "Intuition",
                artist: "Jewel",
                reason: "Directly speaks to the inner knowing that the High Priestess represents.",
                link: "https://www.youtube.com/watch?v=8Ilh1ewceco"
            },
            {
                name: "Secret",
                artist: "Madonna",
                reason: "Reflects the hidden knowledge and mysteries the High Priestess guards.",
                link: "https://www.youtube.com/watch?v=EPHUZenprKc"
            },
            {
                name: "Dreamweaver",
                artist: "Gary Wright",
                reason: "Captures the High Priestess's connection to the subconscious and dream world.",
                link: "https://www.youtube.com/watch?v=xZKuzwPOefs"
            },
            {
                name: "Wicked Game",
                artist: "Chris Isaak",
                reason: "Evokes the mysterious, veiled nature of the High Priestess's wisdom.",
                link: "https://www.youtube.com/watch?v=dlJew-Dw87I"
            },
            {
                name: "Running Up That Hill",
                artist: "Kate Bush",
                reason: "Explores the deep emotional understanding and spiritual exchange the High Priestess facilitates.",
                link: "https://www.youtube.com/watch?v=wp43OdtAAkM"
            },
            {
                name: "Crystal",
                artist: "Stevie Nicks",
                reason: "References the clarity of vision and intuitive insight of the High Priestess.",
                link: "https://www.youtube.com/watch?v=voYDN8-XlJk"
            },
            {
                name: "Dreams",
                artist: "Fleetwood Mac",
                reason: "Represents the realm between consciousness and the subconscious that the High Priestess navigates.",
                link: "https://www.youtube.com/watch?v=Y3ywicffOj4"
            },
            {
                name: "Moon River",
                artist: "Audrey Hepburn",
                reason: "Symbolizes the flowing current of intuition that the High Priestess channels.",
                link: "https://www.youtube.com/watch?v=QEdPe1SxitI"
            },
            {
                name: "Mystify",
                artist: "INXS",
                reason: "Embodies the enigmatic and alluring qualities of the High Priestess's knowledge.",
                link: "https://www.youtube.com/watch?v=LMvJlZZQ_Po"
            }
        ]
    },
    // The Empress
    {
        cardId: 3,
        songs: [
            {
                name: "Mother",
                artist: "Florence + The Machine",
                reason: "Celebrates the nurturing and creative energy that the Empress embodies.",
                link: "https://www.youtube.com/watch?v=tdVAqxNLXiw"
            },
            {
                name: "Bloom",
                artist: "The Paper Kites",
                reason: "Represents the fertility and growth aspects of the Empress.",
                link: "https://www.youtube.com/watch?v=8inJtTG_DuU"
            },
            {
                name: "Garden",
                artist: "Halsey",
                reason: "Symbolizes the abundant, life-giving nature of the Empress archetype.",
                link: "https://www.youtube.com/watch?v=VlFZVK7wUZI"
            },
            {
                name: "Earth Mother",
                artist: "Enya",
                reason: "Celebrates the nurturing, feminine energy that The Empress embodies.",
                link: "https://www.youtube.com/watch?v=jkLPB4naAaY"
            },
            {
                name: "Circle of Life",
                artist: "Elton John",
                reason: "Represents The Empress's connection to the cycles of creation and nature.",
                link: "https://www.youtube.com/watch?v=GibiNy4d4gc"
            },
            {
                name: "Natural Woman",
                artist: "Aretha Franklin",
                reason: "Expresses the embodiment of divine feminine power that The Empress represents.",
                link: "https://www.youtube.com/watch?v=dEWuAcMWDLY"
            },
            {
                name: "Isn't She Lovely",
                artist: "Stevie Wonder",
                reason: "Captures the joyful creative force and love embodied by The Empress.",
                link: "https://www.youtube.com/watch?v=9-n3Ydy7ras"
            },
            {
                name: "Sweet Child O' Mine",
                artist: "Guns N' Roses",
                reason: "Reflects The Empress's nurturing relationship with all that she creates.",
                link: "https://www.youtube.com/watch?v=1w7OgIMMRc4"
            },
            {
                name: "Mama",
                artist: "Spice Girls",
                reason: "Celebrates the maternal aspects of The Empress as the great nurturer.",
                link: "https://www.youtube.com/watch?v=plbB-RJlndk"
            },
            {
                name: "In Bloom",
                artist: "Nirvana",
                reason: "Symbolizes The Empress's association with growth, flowering, and natural abundance.",
                link: "https://www.youtube.com/watch?v=PbgKEjNBHqM"
            }
        ]
    },
    // The Emperor
    {
        cardId: 4,
        songs: [
            {
                name: "Power",
                artist: "Kanye West",
                reason: "Embodies the authority and control that the Emperor represents.",
                link: "https://www.youtube.com/watch?v=L53gjP-TtGE"
            },
            {
                name: "King of the Mountain",
                artist: "Kate Bush",
                reason: "Explores themes of leadership and dominion like the Emperor card.",
                link: "https://www.youtube.com/watch?v=TsdA9uHzBSk"
            },
            {
                name: "The Leader of the Pack",
                artist: "The Shangri-Las",
                reason: "Reflects the Emperor's role as a figure of authority and structure.",
                link: "https://www.youtube.com/watch?v=Q8UKf65NOzM"
            }
        ]
    },
    // The Hierophant
    {
        cardId: 5,
        songs: [
            {
                name: "Personal Jesus",
                artist: "Depeche Mode",
                reason: "Examines the spiritual guidance aspect of the Hierophant.",
                link: "https://www.youtube.com/watch?v=u1xrNaTO1bI"
            },
            {
                name: "Losing My Religion",
                artist: "R.E.M.",
                reason: "Explores the relationship with traditional belief systems that the Hierophant represents.",
                link: "https://www.youtube.com/watch?v=xwtdhWltSIg"
            },
            {
                name: "Take Me to Church",
                artist: "Hozier",
                reason: "Engages with themes of tradition and institutional spirituality like the Hierophant.",
                link: "https://www.youtube.com/watch?v=PVjiKRfKpPI"
            }
        ]
    },
    // The Lovers
    {
        cardId: 6,
        songs: [
            {
                name: "Love on Top",
                artist: "Beyoncé",
                reason: "Celebrates the joyful union that the Lovers card represents.",
                link: "https://www.youtube.com/watch?v=Ob7vObnFUJc"
            },
            {
                name: "Unchained Melody",
                artist: "The Righteous Brothers",
                reason: "Expresses the deep, soulful connection depicted in the Lovers card.",
                link: "https://www.youtube.com/watch?v=RXARHZmpgvw"
            },
            {
                name: "At Last",
                artist: "Etta James",
                reason: "Echoes the harmonious alignment of values that the Lovers represents.",
                link: "https://www.youtube.com/watch?v=S-cbOl96RFM"
            }
        ]
    },
    // The Chariot
    {
        cardId: 7,
        songs: [
            {
                name: "Born to Run",
                artist: "Bruce Springsteen",
                reason: "Embodies the Chariot's themes of determination and forward movement.",
                link: "https://www.youtube.com/watch?v=IxuThNgl3YA"
            },
            {
                name: "Eye of the Tiger",
                artist: "Survivor",
                reason: "Represents the willpower and triumph over obstacles that the Chariot symbolizes.",
                link: "https://www.youtube.com/watch?v=btPJPFnesV4"
            },
            {
                name: "I Can't Drive 55",
                artist: "Sammy Hagar",
                reason: "Captures the Chariot's energy of breaking through barriers and pushing limits.",
                link: "https://www.youtube.com/watch?v=RvV3nn_de2k"
            }
        ]
    },
    // Strength
    {
        cardId: 8,
        songs: [
            {
                name: "Roar",
                artist: "Katy Perry",
                reason: "Celebrates the inner strength and courage represented by the Strength card.",
                link: "https://www.youtube.com/watch?v=CevxZvSJLk8"
            },
            {
                name: "What Doesn't Kill You (Stronger)",
                artist: "Kelly Clarkson",
                reason: "Embodies resilience and inner power like the Strength archetype.",
                link: "https://www.youtube.com/watch?v=Xn676-fLq7I"
            },
            {
                name: "Fighter",
                artist: "Christina Aguilera",
                reason: "Reflects the Strength card's theme of overcoming challenges through inner fortitude.",
                link: "https://www.youtube.com/watch?v=PstrAfoMKlc"
            }
        ]
    },
    // The Hermit
    {
        cardId: 9,
        songs: [
            {
                name: "Solitude",
                artist: "Billie Holiday",
                reason: "Captures the introspective solitude of the Hermit archetype.",
                link: "https://www.youtube.com/watch?v=GHj3xny4W2Y"
            },
            {
                name: "I Am a Rock",
                artist: "Simon & Garfunkel",
                reason: "Explores the themes of isolation and self-reflection like the Hermit card.",
                link: "https://www.youtube.com/watch?v=JKlSVNxLB-A"
            },
            {
                name: "Into the Mystic",
                artist: "Van Morrison",
                reason: "Embodies the spiritual quest and inner journey that the Hermit represents.",
                link: "https://www.youtube.com/watch?v=_6r2P4W9Yog"
            }
        ]
    },
    // Wheel of Fortune
    {
        cardId: 10,
        songs: [
            {
                name: "The Circle Game",
                artist: "Joni Mitchell",
                reason: "Reflects the cyclical nature of life represented by the Wheel of Fortune.",
                link: "https://www.youtube.com/watch?v=V9VoLCO-d6U"
            },
            {
                name: "Spinning Wheel",
                artist: "Blood, Sweat & Tears",
                reason: "Directly references the turning wheel motif of this card.",
                link: "https://www.youtube.com/watch?v=kK62tfoCmuQ"
            },
            {
                name: "Landslide",
                artist: "Fleetwood Mac",
                reason: "Expresses the theme of inevitable change that the Wheel of Fortune embodies.",
                link: "https://www.youtube.com/watch?v=WM7-PYtXtJM"
            }
        ]
    },
    // Justice
    {
        cardId: 11,
        songs: [
            {
                name: "Karma Police",
                artist: "Radiohead",
                reason: "Explores themes of accountability and cosmic justice.",
                link: "https://www.youtube.com/watch?v=1uYWYWPc9HU"
            },
            {
                name: "Bad Blood",
                artist: "Taylor Swift",
                reason: "Addresses the balance of fairness and consequences represented by Justice.",
                link: "https://www.youtube.com/watch?v=QcIy9NiNbmo"
            },
            {
                name: "I Fought the Law",
                artist: "The Clash",
                reason: "Embodies the Justice card's theme of facing the consequences of one's actions.",
                link: "https://www.youtube.com/watch?v=yhcreVY_qLI"
            }
        ]
    },
    // The Hanged Man
    {
        cardId: 12,
        songs: [
            {
                name: "Bitter Sweet Symphony",
                artist: "The Verve",
                reason: "Captures the suspended state and shift in perspective of the Hanged Man.",
                link: "https://www.youtube.com/watch?v=1lyu1KKwC74"
            },
            {
                name: "Let It Be",
                artist: "The Beatles",
                reason: "Embodies the surrender and acceptance that the Hanged Man represents.",
                link: "https://www.youtube.com/watch?v=QDYfEBY9NM4"
            },
            {
                name: "Suspended in Gaffa",
                artist: "Kate Bush",
                reason: "Reflects the liminal state and altered perspective of the Hanged Man card.",
                link: "https://www.youtube.com/watch?v=V3XAeg3B0To"
            }
        ]
    },
    // Death
    {
        cardId: 13,
        songs: [
            {
                name: "Changes",
                artist: "David Bowie",
                reason: "Reflects the transformation and renewal aspects of the Death card.",
                link: "https://www.youtube.com/watch?v=ch8uybPDEzc"
            },
            {
                name: "The End",
                artist: "The Doors",
                reason: "Explores the finality and transition themes of the Death archetype.",
                link: "https://www.youtube.com/watch?v=VScSEXRwUqQ"
            },
            {
                name: "Goodbye Yellow Brick Road",
                artist: "Elton John",
                reason: "Embodies the leaving behind of one path to start anew, like the Death card represents.",
                link: "https://www.youtube.com/watch?v=RZ3Bb4UsXhU"
            },
            {
                name: "Nothing Else Matters",
                artist: "Metallica",
                reason: "Expresses the profound transformation and stripping away of the superficial that Death represents.",
                link: "https://www.youtube.com/watch?v=tAGnKpE4NCI"
            },
            {
                name: "Dust in the Wind",
                artist: "Kansas",
                reason: "Reflects on impermanence and the transformative cycle represented by the Death card.",
                link: "https://www.youtube.com/watch?v=tH2w6Oxx0kQ"
            },
            {
                name: "The Show Must Go On",
                artist: "Queen",
                reason: "Captures the resilience and continuation after profound change that Death signifies.",
                link: "https://www.youtube.com/watch?v=t99KH0TR-J4"
            },
            {
                name: "Knockin' On Heaven's Door",
                artist: "Bob Dylan",
                reason: "Symbolizes the transition between states of being that the Death card represents.",
                link: "https://www.youtube.com/watch?v=rm9coqlk8fY"
            },
            {
                name: "Don't Fear The Reaper",
                artist: "Blue Öyster Cult",
                reason: "Addresses the transcendence of fear associated with endings that Death teaches.",
                link: "https://www.youtube.com/watch?v=Dy4HA3vUv2c"
            },
            {
                name: "New Beginning",
                artist: "Tracy Chapman",
                reason: "Embraces the fresh start that comes after the transformative process of Death.",
                link: "https://www.youtube.com/watch?v=7z9oCcset1U"
            },
            {
                name: "Live and Let Die",
                artist: "Paul McCartney & Wings",
                reason: "Illustrates the necessary release of the old to make way for new life, central to Death's meaning.",
                link: "https://www.youtube.com/watch?v=e7aGAIWe3uE"
            }
        ]
    },
    // Temperance
    {
        cardId: 14,
        songs: [
            {
                name: "Bridge Over Troubled Water",
                artist: "Simon & Garfunkel",
                reason: "Embodies the harmony and balance that Temperance represents.",
                link: "https://www.youtube.com/watch?v=4G-YQA_bsOU"
            },
            {
                name: "Lean on Me",
                artist: "Bill Withers",
                reason: "Reflects the moderation and support themes of the Temperance card.",
                link: "https://www.youtube.com/watch?v=fOZ-MySzAac"
            },
            {
                name: "Perfect",
                artist: "Ed Sheeran",
                reason: "Captures the balanced harmony and flow that Temperance symbolizes.",
                link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g"
            },
            {
                name: "Balance",
                artist: "Sara Bareilles",
                reason: "Directly addresses the theme of finding equilibrium that Temperance represents.",
                link: "https://www.youtube.com/watch?v=5ShBIYS8-0I"
            },
            {
                name: "Somewhere Only We Know",
                artist: "Keane",
                reason: "Evokes the peaceful middle ground and healing aspects of Temperance.",
                link: "https://www.youtube.com/watch?v=Oextk-If8HQ"
            },
            {
                name: "Hallelujah",
                artist: "Leonard Cohen",
                reason: "Represents the spiritual balance and reconciliation of opposites that Temperance teaches.",
                link: "https://www.youtube.com/watch?v=YrLk4vdY28Q"
            },
            {
                name: "Peaceful Easy Feeling",
                artist: "Eagles",
                reason: "Embodies the serene harmony that comes from Temperance's moderation.",
                link: "https://www.youtube.com/watch?v=NjofshOBV5s"
            },
            {
                name: "Wade in the Water",
                artist: "Eva Cassidy",
                reason: "References the flowing, healing waters often depicted in the Temperance card.",
                link: "https://www.youtube.com/watch?v=fxZ4H-gq_lc"
            },
            {
                name: "Fix You",
                artist: "Coldplay",
                reason: "Captures the healing and restorative nature of Temperance's energy.",
                link: "https://www.youtube.com/watch?v=k4V3Mo61fJM"
            },
            {
                name: "Both Sides Now",
                artist: "Joni Mitchell",
                reason: "Expresses the perspective gained from seeing and integrating both sides, as Temperance teaches.",
                link: "https://www.youtube.com/watch?v=Pbn6a0AFfnM"
            }
        ]
    },
    // The Devil
    {
        cardId: 15,
        songs: [
            {
                name: "Sympathy for the Devil",
                artist: "The Rolling Stones",
                reason: "Directly engages with the Devil archetype and its complex nature.",
                link: "https://www.youtube.com/watch?v=GgnClrx8N2k"
            },
            {
                name: "You Give Love a Bad Name",
                artist: "Bon Jovi",
                reason: "Explores themes of entrapment and desire like the Devil card.",
                link: "https://www.youtube.com/watch?v=KrZHPOeOxQQ"
            },
            {
                name: "Sweet Dreams (Are Made of This)",
                artist: "Eurythmics",
                reason: "Reflects the temptation and materialism represented by the Devil.",
                link: "https://www.youtube.com/watch?v=qeMFqkcPYcg"
            }
        ]
    },
    // The Tower
    {
        cardId: 16,
        songs: [
            {
                name: "Wrecking Ball",
                artist: "Miley Cyrus",
                reason: "Embodies the sudden destruction and breakdown represented by the Tower.",
                link: "https://www.youtube.com/watch?v=My2FRPA3Gf8"
            },
            {
                name: "The Sky is Falling",
                artist: "Queens of the Stone Age",
                reason: "Captures the upheaval and chaos of the Tower card.",
                link: "https://www.youtube.com/watch?v=fwdFUfk6DYs"
            },
            {
                name: "London Calling",
                artist: "The Clash",
                reason: "Reflects the warning of imminent collapse that the Tower represents.",
                link: "https://www.youtube.com/watch?v=EfK-WX2pa8c"
            }
        ]
    },
    // The Star
    {
        cardId: 17,
        songs: [
            {
                name: "Starlight",
                artist: "Muse",
                reason: "Embodies the hope and inspiration of the Star card.",
                link: "https://www.youtube.com/watch?v=Pgum6OT_VH8"
            },
            {
                name: "Reach for the Stars",
                artist: "S Club 7",
                reason: "Captures the optimism and aspiration that the Star represents.",
                link: "https://www.youtube.com/watch?v=HO6pxS1O_qM"
            },
            {
                name: "Twinkle Twinkle Little Star",
                artist: "Traditional",
                reason: "Reflects the universal wonder and guidance symbolized by the Star.",
                link: "https://www.youtube.com/watch?v=yCjJyiqpAuU"
            }
        ]
    },
    // The Moon
    {
        cardId: 18,
        songs: [
            {
                name: "Brain Damage/Eclipse",
                artist: "Pink Floyd",
                reason: "Explores the themes of perception and altered consciousness like the Moon card.",
                link: "https://www.youtube.com/watch?v=DVQ3-Xe_suY"
            },
            {
                name: "Bad Moon Rising",
                artist: "Creedence Clearwater Revival",
                reason: "Captures the foreboding and uncertainty aspects of the Moon.",
                link: "https://www.youtube.com/watch?v=5BmEGm-mraE"
            },
            {
                name: "Howl",
                artist: "Florence + The Machine",
                reason: "Embodies the primal, instinctual energy that the Moon represents.",
                link: "https://www.youtube.com/watch?v=JZweDwbJ_Ic"
            }
        ]
    },
    // The Sun
    {
        cardId: 19,
        songs: [
            {
                name: "Here Comes the Sun",
                artist: "The Beatles",
                reason: "Embodies the joy and renewal that the Sun card represents.",
                link: "https://www.youtube.com/watch?v=KQetemT1sWc"
            },
            {
                name: "Walking on Sunshine",
                artist: "Katrina and the Waves",
                reason: "Captures the unbridled happiness and energy of the Sun archetype.",
                link: "https://www.youtube.com/watch?v=iPUmE-tne5U"
            },
            {
                name: "Good Day Sunshine",
                artist: "The Beatles",
                reason: "Reflects the warmth and positivity symbolized by the Sun card.",
                link: "https://www.youtube.com/watch?v=rFxo12R8xP0"
            }
        ]
    },
    // Judgement
    {
        cardId: 20,
        songs: [
            {
                name: "Man in the Mirror",
                artist: "Michael Jackson",
                reason: "Captures the self-evaluation and awakening of the Judgement card.",
                link: "https://www.youtube.com/watch?v=PivWY9wn5ps"
            },
            {
                name: "Wake Me Up",
                artist: "Avicii",
                reason: "Embodies the spiritual awakening and rebirth themes of Judgement.",
                link: "https://www.youtube.com/watch?v=IcrbM1l_BoI"
            },
            {
                name: "Redemption Song",
                artist: "Bob Marley",
                reason: "Reflects the liberation and spiritual reckoning of the Judgement archetype.",
                link: "https://www.youtube.com/watch?v=QrY9eHkXTa4"
            }
        ]
    },
    // The World
    {
        cardId: 21,
        songs: [
            {
                name: "What a Wonderful World",
                artist: "Louis Armstrong",
                reason: "Celebrates the completion and harmony represented by the World card.",
                link: "https://www.youtube.com/watch?v=VqhCQZaH4Vs"
            },
            {
                name: "We Are the World",
                artist: "USA for Africa",
                reason: "Embodies the unity and wholeness that the World represents.",
                link: "https://www.youtube.com/watch?v=9AjkUyX0rVw"
            },
            {
                name: "Closing Time",
                artist: "Semisonic",
                reason: "Captures the completion of a cycle and new beginnings implied by the World card.",
                link: "https://www.youtube.com/watch?v=xGytDsqkQY8"
            }
        ]
    }
];

// DOM Elements
const drawCardBtn = document.getElementById('draw-card');
const cardDisplay = document.getElementById('card-display');
const initialView = document.getElementById('initial-view');
const cardImage = document.getElementById('card-image');
const cardName = document.getElementById('card-name');
const cardMeaning = document.getElementById('card-meaning');
const songName = document.getElementById('song-name');
const songArtist = document.getElementById('song-artist');
const songReason = document.getElementById('song-reason');
const songLink = document.getElementById('song-link');

// Remove the standalone new song button reference which may no longer exist in the HTML
// const newSongBtn = document.getElementById('new-song');

let currentCard = null;
let currentSongs = null;
let usedSongIndices = [];
let lastSongIndex = -1; // Track the index of the last displayed song

// Event Listeners
drawCardBtn.addEventListener('click', drawCard);

// Add event listener to the reset button after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const resetBtn = document.getElementById('reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAndDrawNewCard);
    }
});

// Functions
function drawCard() {
    // Get random card
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    currentCard = tarotCards[randomIndex];
    
    // Display card info
    setCardImage(currentCard.image, currentCard.name);
    cardName.textContent = currentCard.name;
    cardMeaning.textContent = currentCard.meaning;
    
    // Get matching songs
    currentSongs = songs.find(songGroup => songGroup.cardId === currentCard.id)?.songs || [];
    usedSongIndices = [];
    
    // Display song if available
    if (currentSongs.length > 0) {
        displayRandomSong();
    } else {
        songName.textContent = "No matching songs found";
        songArtist.textContent = "";
        songReason.textContent = "";
        songLink.innerHTML = "";
    }
    
    // Show card display and hide initial view
    cardDisplay.classList.remove('hidden');
    initialView.style.display = 'none';
}

function getNewSong() {
    if (currentSongs && currentSongs.length > 0) {
        // Force a different song selection
        const prevSongIndex = lastSongIndex;
        const newIndex = getRandomSongExcept(prevSongIndex);
        
        // Update the display with the new song
        updateSongDisplay(newIndex);
    }
}

function displayRandomSong(isNewSongRequest = false) {
    // If all songs have been used except the last one, reset the used array
    if (usedSongIndices.length >= currentSongs.length - 1) {
        usedSongIndices = [lastSongIndex]; // Only remember the last song
    }
    
    // Get a random song index that hasn't been used yet
    const songIndex = getRandomSongExcept(lastSongIndex);
    
    // Update the UI with the selected song
    updateSongDisplay(songIndex);
}

// Helper function to get a random song that isn't the specified index
function getRandomSongExcept(excludeIndex) {
    if (!currentSongs || currentSongs.length === 0) return -1;
    
    // If there's only one song, we have to use it
    if (currentSongs.length === 1) {
        lastSongIndex = 0;
        usedSongIndices = [0];
        return 0;
    }
    
    // Find available indices (not used and not excluded)
    const availableIndices = [];
    for (let i = 0; i < currentSongs.length; i++) {
        if (i !== excludeIndex && !usedSongIndices.includes(i)) {
            availableIndices.push(i);
        }
    }
    
    // If we have available indices, pick one randomly
    if (availableIndices.length > 0) {
        const selectedIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        usedSongIndices.push(selectedIndex);
        lastSongIndex = selectedIndex;
        return selectedIndex;
    }
    
    // If all songs have been used or only the excluded one is left
    // reset used songs (except the excluded one) and try again
    usedSongIndices = excludeIndex >= 0 ? [excludeIndex] : [];
    
    // Find a song that isn't the excluded one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * currentSongs.length);
    } while (newIndex === excludeIndex);
    
    usedSongIndices.push(newIndex);
    lastSongIndex = newIndex;
    return newIndex;
}

// Helper function to update the UI with the selected song
function updateSongDisplay(songIndex) {
    if (songIndex < 0 || songIndex >= currentSongs.length) return;
    
    const song = currentSongs[songIndex];
    songName.textContent = song.name;
    songArtist.textContent = `by ${song.artist}`;
    songReason.textContent = song.reason;
    
    // Update to display buttons side by side
    songLink.innerHTML = `
        <div class="button-group">
            <a href="${song.link}" target="_blank" class="listen-button">Listen</a>
            <button id="new-song-inline" class="new-song-button">Get Another Song</button>
        </div>
    `;
}

// New function to reset the application state and draw a new card
function resetAndDrawNewCard() {
    // Add console log for debugging
    console.log("Drawing a new card...");
    
    // Get a new random card directly instead of resetting the display
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    currentCard = tarotCards[randomIndex];
    
    // Display card info
    setCardImage(currentCard.image, currentCard.name);
    cardName.textContent = currentCard.name;
    cardMeaning.textContent = currentCard.meaning;
    
    // Get matching songs
    currentSongs = songs.find(songGroup => songGroup.cardId === currentCard.id)?.songs || [];
    usedSongIndices = [];
    
    // Display song if available
    if (currentSongs.length > 0) {
        displayRandomSong();
    } else {
        songName.textContent = "No matching songs found";
        songArtist.textContent = "";
        songReason.textContent = "";
        songLink.innerHTML = "";
    }
    
    // Apply a subtle animation effect for the transition
    cardDisplay.classList.add('card-transition');
    setTimeout(() => {
        cardDisplay.classList.remove('card-transition');
    }, 600);
}

// Add manual event listeners for dynamically created elements
document.addEventListener('click', function(event) {
    // Check if the clicked element is the reset button
    if (event.target.id === 'reset' || event.target.closest('#reset')) {
        resetAndDrawNewCard();
    }
    
    // Check if the clicked element is the inline "Get Another Song" button
    if (event.target.id === 'new-song-inline' || event.target.closest('#new-song-inline')) {
        event.preventDefault(); // Prevent any default behavior
        getNewSong();
    }
});

// Add error handling for image loading with GitHub Pages path consideration
function setCardImage(url, cardName) {
    cardImage.onerror = function() {
        this.onerror = null;
        
        // For GitHub Pages: Try with repository name prefix if it's a relative URL 
        if (!url.startsWith('http') && !url.startsWith('/')) {
            const repoName = location.pathname.split('/')[1];
            this.src = `/${repoName}/${url}`;
            return;
        }
        
        this.src = 'fallback-card-image.png';
        console.error(`Failed to load image for ${cardName}`);
    };
    cardImage.src = url;
}
