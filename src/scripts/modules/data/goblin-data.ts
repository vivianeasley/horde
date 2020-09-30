export const goblinTokenData = {
    name:"Goblin Token",
    border:"spell.png",
    image:"goblin/monster_goblinrunts.png",
    isToken: true,
    type:"Creature",
    subType:"Goblin",
    flavor: "\"We must not look at goblin men, We must not buy their fruits: Who knows upon what soil they fed Their hungry thirsty roots?\" - Christina Rossetti",
    power:1,
    toughness:1,
    color:"red",
    rarity:"common"
};

export const goblinCommonSpellData = [
    {
        name:"En-biggen",
        border:"spell.png",
        image:"goblin/monster_orcishberserker.png",
        isToken: false,
        type:"Instant",
        subType:"",
        rules: "Choose a goblin at random. It gets +1/+1 until end of turn.",
        color:"red",
        rarity:"common"
    },
    {
        name:"Wild Attack",
        border:"spell.png",
        image:"goblin/monster_orc.png",
        isToken: false,
        type:"Instant",
        subType:"",
        rules: "Choose a goblin at random. Put a +1/+1 counter on it. Sacrifice a goblin at random.",
        color:"red",
        rarity:"common"
    },
    {
        name:"Goblin Assault",
        border:"spell.png",
        image:"goblin/monster_goblinscout.png",
        isToken: false,
        type:"Instant",
        subType:"",
        rules: "Goblins you control get +1/+1 until end of turn. Sacrifice all goblins at the end of turn.",
        color:"red",
        rarity:"common"
    },
    {
        name:"Goblin Epic",
        border:"spell.png",
        image:"goblin/monster_goblin.jpg",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "",
        power:3,
        toughness:2,
        color:"red",
        rarity:"common"
    },
    {
        name:"Goblin Weapon Master",
        border:"spell.png",
        image:"goblin/monster_goblinhermit.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "",
        power:3,
        toughness:1,
        color:"red",
        rarity:"common"
    },
    {
        name:"Goblin Face Eater",
        border:"spell.png",
        image:"goblin/monster_ghoul.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "Menace",
        power:2,
        toughness:1,
        color:"red",
        rarity:"common"
    },
    {
        name:"Goblin Boomer",
        border:"spell.png",
        image:"goblin/monster_goblinboomer.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature becomes blocked it deals 3 damage to each player (including the horde).",
        power:1,
        toughness:1,
        color:"red",
        rarity:"common"
    },
    {
        name:"Goblin Lockpick",
        border:"spell.png",
        image:"goblin/monster_goblinscout.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "This creature cannot be blocked by creatures with defender.",
        power:2,
        toughness:1,
        color:"red",
        rarity:"common"
    }
];

// Uncommon Spells

export const goblinUncommonSpellData = [
    {
        name:"Goblin Dogpile",
        border:"spell.png",
        image:"goblin/monster_goblinscout.png",
        isToken: false,
        type:"Instant",
        subType:"",
        rules: "This card deals damage to a creature, owned by a player, chosen at random, eqaul to the number of goblins controlled by the horde.",
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Avalanche",
        border:"spell.png",
        image:"goblin/monster_orc.png",
        isToken: false,
        type:"Instant",
        subType:"",
        rules: "This card deals damage to a player chosen at random eqaul to the number of goblins controlled by the horde.",
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Intructor",
        border:"spell.png",
        image:"goblin/monster_goblinveteran.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "Creatures the horde controls have menace.",
        power:0,
        toughness:1,
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Beserk",
        border:"spell.png",
        image:"goblin/monster_orcishberserker.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature becomes blocked, it deals 2 damage to each attacking and blocking creature.",
        power:1,
        toughness:1,
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Cadet",
        border:"spell.png",
        image:"goblin/monster_goblin.jpg",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "If this creature deals combat damage it gets a +1/+1 counter and a menace counter.",
        power:3,
        toughness:1,
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Chiefton",
        border:"spell.png",
        image:"goblin/monster_goblinhermit.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature attacks, goblins get +1/+1 until end of turn.",
        power:1,
        toughness:1,
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Terrorizer",
        border:"spell.png",
        image:"goblin/monster_ghoul.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature attacks target creature owned by a player, and chosen at random, cannot block.",
        power:2,
        toughness:1,
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Arsonist",
        border:"spell.png",
        image:"goblin/monster_goblinboomer.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature enters the battlefield it deals 2 damage to a creature owned by a player, and chosen at random. Then it deals 3 damage to the horde.",
        power:1,
        toughness:1,
        color:"red",
        rarity:"uncommon"
    },
    {
        name:"Goblin Bone Slinger",
        border:"spell.png",
        image:"goblin/monster_goblinscout.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "Whenever a goblin is put into the hordes graveyard this card deals 1 damage to target player chosen at random.",
        power:2,
        toughness:2,
        color:"red",
        rarity:"uncommon"
    }
];

// rare spells

export const goblinRareSpellData = [
    {
        name:"Goblin Armageddon",
        border:"spell.png",
        image:"goblin/monster_goblinscout.png",
        isToken: false,
        type:"Instant",
        subType:"",
        rules: "Each player exiles the top 40 cards of their library. Until each players next end step they may play these cards.",
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Warp",
        border:"spell.png",
        image:"goblin/monster_orc.png",
        isToken: false,
        type:"Instant",
        subType:"",
        rules: "Each player (including the horde) shuffles all non-land permanents they own into their library, then reveals that many cards from the top of their library. Each player puts all artifact, creature, and land cards revealed this way onto the battlefield, then does the same for enchantment cards, then puts all cards revealed this way that weren't put onto the battlefield on the bottom of their library.",
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Bomb Intructor",
        border:"spell.png",
        image:"goblin/monster_goblinveteran.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "Whenever a goblin creature becomes blocked sacrifice it and it deals 3 damage to the creature blocking it.",
        power:0,
        toughness:1,
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Landscaper",
        border:"spell.png",
        image:"goblin/monster_orcishberserker.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature enters the battlefield, each player sacrifices a land.",
        power:1,
        toughness:1,
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Captian",
        border:"spell.png",
        image:"goblin/monster_goblin.jpg",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature attacks it get +1/+1 for each other attacking goblin.",
        power:3,
        toughness:1,
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Cheerleader",
        border:"spell.png",
        image:"goblin/monster_goblinhermit.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "All goblin creatures controlled by the horde get a +1/+1.",
        power:1,
        toughness:1,
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Razer",
        border:"spell.png",
        image:"goblin/monster_ghoul.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "All goblin creatures controlled by the horde get +1/+1 and haste.",
        power:1,
        toughness:1,
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Mine Layer",
        border:"spell.png",
        image:"goblin/monster_goblinboomer.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "When this creature enters the battlefield it deals 1 damage to each creature owned by a player",
        power:3,
        toughness:3,
        color:"red",
        rarity:"rare"
    },
    {
        name:"Goblin Pit Trapper",
        border:"spell.png",
        image:"goblin/monster_goblinscout.png",
        isToken: false,
        type:"Creature",
        subType:"Goblin",
        rules: "Whenever a non-token goblin eneters the battlefield each player flips a coin. Each player whose coin comes up tails sacrifices a creature.",
        power:2,
        toughness:1,
        color:"red",
        rarity:"rare"
    }
];