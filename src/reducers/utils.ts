import { List } from "immutable";
import { figures, range, shuffle  } from '../containers/utils';
import { ICard } from '../models/game/Card';

export function genereateCards(size: number, figure: string = "tomster"): List<ICard> {
    const amountOFFigures = figures[figure];

    const cards = shuffle(range(1, amountOFFigures))
        .map(n => ({
            cardId: String(n),
            figure,
            show: false,
            size
        }))
    return cards.concat(cards).toList();
}