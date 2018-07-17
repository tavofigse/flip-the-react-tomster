import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Board as BoardComponent, IBoardComponentProps } from '../../components/game/Board';
import { FORM_NAME } from '../../components/options';
import { figures, range, shuffle } from '../utils';

const selector = formValueSelector(FORM_NAME);
  
function genereateCards(size: number, figure: string = "tomster"): string[] {
    const amountOfCards = size * size / 2;
    const amountOFFigures = figures[figure];
    const cards = shuffle(range(1, amountOFFigures))
        .slice(0, amountOfCards)
        .map(n => String(n));
    return [...cards].concat(cards);
}

const mapStateToProps: (state: any) => IBoardComponentProps =
state => ({
    cards: genereateCards(Number(selector(state, 'grid')) || 4, selector(state, 'character')),
    figure: selector(state, 'character'),
    size: selector(state, 'grid')
})

export const Board = connect(
    mapStateToProps
)(BoardComponent)