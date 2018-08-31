import { List } from "immutable";
import { figures, range, shuffle  } from '../containers/utils';
import { ICard } from '../models/game/Card';

export function genereateCards(size: number, figure: string = "tomster"): List<ICard> {
    const amountOfCards = size * size / 2;
    const amountOFFigures = figures[figure];
    const cards = shuffle(range(1, amountOFFigures))
        .slice(0, amountOfCards)
        .map(n => ({
            cardId: String(n),
            figure,
            show: false,
            size
        }))
    return cards.concat(cards).toList();
}