import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Board as BoardComponent, IBoardComponentProps } from '../../components/game/Board';
import { FORM_NAME } from '../../components/options';

const selector = formValueSelector(FORM_NAME);

const mapStateToProps: (state: any) => IBoardComponentProps =
state => ({
    size: selector(state, 'grid')
})

export const Board = connect(
    mapStateToProps
)(BoardComponent)