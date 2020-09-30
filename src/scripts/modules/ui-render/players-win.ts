import { html } from 'lighterhtml';

export const winGame = function winGame (state:any) {
    return html`
        <div class="configure-game-wrapper">
            <div class="configure-game you-win">
                <h2>You win!</h2>
                <hr>
                <p class="paragraph">You've won! add +1 to your level for the next time you play. Each player may choose one of the following options as a reward:
                    <ul>
                        <li>Add 1 common card to your deck</li>
                        <li>Add 1 uncommon card chosen at random and 5 lands to your deck</li>
                        <li>Add 1 rare card chosen at random and 10 lands to your deck</li>
                        <li>Add up to 5 lands and/or remove up to 5 cards from your deck</li>
                        <li>Start you next game with 2 lands in play</li>
                        <li>Start you next game with +5 life</li>
                        <li>Start you next game with two 0/1 green plant tokens on the battlefield</li>
                        <li>Start you next game with 2 extra mulligans</li>
                    </ul>
                    For random card selection choose from a pool of at least 50 cards.
                </p>
                <button onclick=${()=>{window.location.reload();}}>Play a new round</button>
            </div>
        </div>
    `;
}