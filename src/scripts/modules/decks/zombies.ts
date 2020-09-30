import { card } from "../data/data-cards"
import {
    zombieTokenData,
    zombieCommonSpellData,
    zombieUncommonSpellData,
    zombieRareSpellData
} from "../data/zombie-data"

export const zombieToken = function zombieToken () {
    const zombieToken = {...card, ...zombieTokenData}
    return zombieToken;
}

export const zombieCommonSpell = function zombieCommonSpell () {
    const spellsArr = zombieCommonSpellData;

    const zombieSpell = {...card, ...spellsArr[Math.floor(Math.random() * spellsArr.length)]}
    return zombieSpell;
}

export const zombieUncommonSpell = function zombieUncommonSpell () {
    const spellsArr = zombieUncommonSpellData;

    const zombieSpell = {...card, ...spellsArr[Math.floor(Math.random() * spellsArr.length)]}
    return zombieSpell;
}

export const zombieRareSpell = function zombieRareSpell () {
    const spellsArr = zombieRareSpellData;

    const zombieSpell = {...card, ...spellsArr[Math.floor(Math.random() * spellsArr.length)]}
    return zombieSpell;
}