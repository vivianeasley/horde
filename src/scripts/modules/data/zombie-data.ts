export const zombieTokenData = {
    name:"Zombie Token",
    border:"spell.png",
    image:"zombie/monster_zombie.jpg",
    isToken: true,
    type:"Creature",
    subType:"Zombie",
    rules: "This creature enters the battlefield with an inanimate counter. (Creatures with inanimate counters can't untap)",
    power:2,
    toughness:2,
    color:"black",
    rarity:"common",
    cantUntap: true
};

export const zombieCommonSpellData = [
    {
        name:"Dead Raiser Demon",
        border:"spell.png",
        image:"zombie/monster_devilkin.png",
        isToken: false,
        type:"Creature",
        subType:"Demon",
        rules: "When this creature enters the battlefield remove an inanimate counter from a zombie token chosen at random.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Lich Duke",
        border:"spell.png",
        image:"zombie/boss_witchking.png",
        isToken: false,
        type:"Creature",
        subType:"Zombie Wizard",
        rules: "When this creature enters the battlefield the horde sacrifices a zombie token with an inanimate counter on it then if the horde controls a zombie token without an inanimate counter put two +1/+1 counters on that creature.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Lich Lord",
        border:"spell.png",
        image:"zombie/boss_lich.jpg",
        isToken: false,
        type:"Creature",
        subType:"Zombie Wizard",
        rules: "When this creature enters the battlefield remove two inanimate counters from zombie tokens chosen at random.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Skeleton Striker",
        border:"spell.png",
        image:"zombie/monster_draugr.jpg",
        isToken: false,
        type:"Creature",
        subType:"Skeleton Warrior",
        rules: "First Strike",
        power:2,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Plague Zombie",
        border:"spell.png",
        image:"zombie/monster_plaguezombie.png",
        isToken: false,
        type:"Creature",
        subType:"Zombie",
        rules: "Deathtouch",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Rebuilding Skeleton",
        border:"spell.png",
        image:"zombie/monster_skeleton.png",
        isToken: false,
        type:"Creature",
        subType:"Skeleton",
        rules: "If this creature would be destroyed, regenerate it. Any player may tap a creature they control to prevent this creature from regenerating this turn.",
        power:2,
        toughness:1,
        color:"black",
        rarity:"common"
    }
];

// Uncommon Spells

export const zombieUncommonSpellData = [
    {
        name:"Necronomicon Demon",
        border:"spell.png",
        image:"zombie/monster_devilkin.png",
        isToken: false,
        type:"Creature",
        subType:"Demon",
        rules: "When this creature enters the battlefield remove an inanimate counter from a zombie token chosen at random then return a creature chosen at random from the horde's graveyard to the horde's battlefield.",
        power:2,
        toughness:3,
        color:"black",
        rarity:"common"
    },
    {
        name:"Lich Duke Ferdinand",
        border:"spell.png",
        image:"zombie/boss_witchking.png",
        isToken: false,
        type:"Creature",
        subType:"Zombie Wizard",
        rules: "When this creature enters the battlefield remove an inanimate counter from a zombie token chosen at random. When this creature enters the battlefield each player (including the horde) sacrifices a creature.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Lich High Lord",
        border:"spell.png",
        image:"zombie/boss_lich.jpg",
        isToken: false,
        type:"Creature",
        subType:"Zombie Wizard",
        rules: "When this creature enters the battlefield remove three inanimate counters from zombie tokens that entered the battlefield this turn chosen at random.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Skeleton Drainer",
        border:"spell.png",
        image:"zombie/monster_draugr.jpg",
        isToken: false,
        type:"Creature",
        subType:"Skeleton Warrior",
        rules: "When this creature enters the battlefield a player, chosen at random, loses life eqaul to the number of zombies in play.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Plague Spreader Zombie",
        border:"spell.png",
        image:"zombie/monster_plaguezombie.png",
        isToken: false,
        type:"Creature",
        subType:"Zombie",
        rules: "When this creature enters the battlefield the horde sacrifices a zombie token. This creature gets +1/+1 for each creature card in the hordes graveyard.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Bone Shards Skeleton",
        border:"spell.png",
        image:"zombie/monster_skeleton.png",
        isToken: false,
        type:"Creature",
        subType:"Skeleton",
        rules: "Whenever a skeleton enters the battlefield each non-skeleton, non-zombie creature gets -1/-1 until end of turn.",
        power:2,
        toughness:1,
        color:"black",
        rarity:"common"
    }
];

// rare spells

export const zombieRareSpellData = [
    {
        name:"Apocolypse Demon",
        border:"spell.png",
        image:"zombie/monster_devilkin.png",
        isToken: false,
        type:"Creature",
        subType:"Demon",
        rules: "When this creature enters the battlefield remove all inanimate counters from all cards in play then return all creature cards from the horde's graveyard to the horde's battlefield.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Reanimator Lich",
        border:"spell.png",
        image:"zombie/boss_witchking.png",
        isToken: false,
        type:"Creature",
        subType:"Zombie Wizard",
        rules: "When this creature enters the battlefield remove all inanimate counters from all cards in play.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Plague Lich",
        border:"spell.png",
        image:"zombie/boss_lich.jpg",
        isToken: false,
        type:"Creature",
        subType:"Zombie Wizard",
        rules: "When this creature enters the battlefield remove all inanimate counters from all cards in play. Zombies and Skeletons the horde controls have deathtouch.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Skeleton General",
        border:"spell.png",
        image:"zombie/monster_draugr.jpg",
        isToken: false,
        type:"Creature",
        subType:"Skeleton Warrior",
        rules: "Zombies and skeletons the horde controls get +1/+1 and have menace.",
        power:1,
        toughness:1,
        color:"black",
        rarity:"common"
    },
    {
        name:"Plague Epidemic Zombie",
        border:"spell.png",
        image:"zombie/monster_plaguezombie.png",
        isToken: false,
        type:"Creature",
        subType:"Zombie",
        rules: "Skeletons the horde controls have wither",
        power:2,
        toughness:4,
        color:"black",
        rarity:"common"
    },
    {
        name:"Unending Skeleton",
        border:"spell.png",
        image:"zombie/monster_skeleton.png",
        isToken: false,
        type:"Creature",
        subType:"Skeleton",
        rules: "When this card is put into the graveyard return it to the battlefield tapped.",
        power:3,
        toughness:1,
        color:"black",
        rarity:"common"
    }
];