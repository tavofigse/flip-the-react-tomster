import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { flipCard, initialize } from '../../actions/game';
import { Board as BoardComponent, IBoardComponentProps, IBoardHandlers } from '../../components/game/Board';
import { FORM_NAME } from '../../components/options';
import { IStoreState } from '../../types/index';

const selector = formValueSelector(FORM_NAME);

const mapStateToProps: (state: IStoreState) => IBoardComponentProps =
    state => ({
        cards: state.game.cards,
        figure: selector(state, 'character'),
        size: selector(state, 'grid')
    })

const mapDispatchToProps: (dispatch: any) => IBoardHandlers =
    dispatch => ({
        flipCard: (boardPosition: number) => dispatch(flipCard(boardPosition)),
        initializeBoard: (
            size: string,
            figure: string
        ) => dispatch(initialize(size, figure))
    })

export const Board = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardComponent)
