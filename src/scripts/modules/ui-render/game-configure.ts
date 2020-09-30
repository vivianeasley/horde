import { html } from 'lighterhtml';
import { generateDeck } from "../deck-gen"

export const configureGame = function configureGame (state:any) {
    return html`
        <div class="configure-game-wrapper">
            <div class="configure-game">
                <h3>Configure Your Game</h3>
                <hr>
                <div>
                    <div>Level (how many creatures you have defeated): <input class="players-level" type="text" value="0"></div>
                    <div>Choose creature to fight:
                        <select name="monster" id="monster">
                            <option value="goblin">Goblins</option>
                            <option value="zombie">Zombies</option>
                        </select>
                    </div>
                    <div>Number of players: <input class="players-number" type="text" value="1"></div>
                    <button class="start-button" onclick=${generateDeck}>Start!</button>
                </div>
                <hr>
                <div>
                    <h3>How to play:</h3>
                    <p class="paragraph">This is a way to play magic the gathering solo or cooperatively with your friends! The game is partly managed by the computer but mostly managed by the players.</p>
                    <div class="spacer"></div>
                    <p class="paragraph">To play enter the number of players and start at level 0. You can choose a monster if you would like. Players take their turn at the same time and share a life total of 20. The game starts and players take their first turn. Then the horde takes it's turn. To go through the Hordes phases click the "Next phase button". Phases are as follows:
                        <div style="max-width: 400px;text-align:left">
                            <ul>
                                <li>Horde Upkeep (Not shown at top of the page)</li>
                                <li>Horde Untap: All horde creatures able to untap do so.</li>
                                <li>Horde Main: Horde Main phase. The Horde draws cards from the top of it's library putting each token onto the battlefield tapped. When the horde draws a non-token card that card goes onto the stack (shown as a blue area) and then is resolved.</li>
                                <li>Horde Attack: The horde declares its attackers.</li>
                                <li>Declare blockers: Players declare blockers. Click on Horde creatures that have been blocked.</li>
                                <li>Resolve Damage: Players take damage from the horde</li>
                                <li>Horde End Step: (Not shown at top of the page)</li>
                            </ul>
                        </div>
                    </p>
                    <div class="spacer"></div>
                    <p class="paragraph">Each time you win a game you increment a level. Horde decks get harder depending on the number of players and your level. Each time you win you may pick from a list of options to augment your deck or give yourself an advantage in the next round. I recommend you start with weak deck of mainly common cards. Keep some random commons, uncommons, and rares to slowly add to your deck over time. if you reach level 30 you win!</p>
                </div>
            </div>
        </div>
    `;
}