import { List } from "immutable";
import { figures, range, shuffle  } from '../containers/utils';
import { ICard } from '../models/game/Card';

export function genereateCards(size: number, figure: string = "tomster"): List<ICard> {
    const amountOfCards = size * size / 2;
    const amountOfFigures = figures[figure];
    const cards = shuffle(range(1, amountOfFigures))
        .slice(0, amountOfCards)
        .map((n: number, i: number) => ({
            boardPosition: i,
            cardId: String(n),
            figure,
            show: false,
            size
        }))
    return cards.concat(
        cards.map((card: ICard) => ({
            ...card,
            boardPosition: card.boardPosition + amountOfCards
        }))
    ).toList();
}