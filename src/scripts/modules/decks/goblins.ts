import { card } from "../data/data-cards"
import {
    goblinTokenData,
    goblinCommonSpellData,
    goblinUncommonSpellData,
    goblinRareSpellData
} from "../data/goblin-data"

export const goblinToken = function goblinToken () {
    const goblinToken = {...card, ...goblinTokenData}
    return goblinToken;
}

export const goblinCommonSpell = function goblinCommonSpell () {
    const spellsArr = goblinCommonSpellData;

    const goblinSpell = {...card, ...spellsArr[Math.floor(Math.random() * spellsArr.length)]}
    return goblinSpell;
}

export const goblinUncommonSpell = function goblinUncommonSpell () {
    const spellsArr = goblinUncommonSpellData;

    const goblinSpell = {...card, ...spellsArr[Math.floor(Math.random() * spellsArr.length)]}
    return goblinSpell;
}

export const goblinRareSpell = function goblinRareSpell () {
    const spellsArr = goblinRareSpellData;

    const goblinSpell = {...card, ...spellsArr[Math.floor(Math.random() * spellsArr.length)]}
    return goblinSpell;
}