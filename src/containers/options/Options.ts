import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { FORM_NAME, IOptionsProps, Options as OptionsComponent } from '../../components/options';

const selector = formValueSelector(FORM_NAME);

const mapStateToProps: (state: any) => IOptionsProps =
state => {
    const {
        character,
        grid
    } = selector(state, 'character', 'grid')
    return {
        initialValues: {
            character: 'tomster',
            grid: '8'
        },
        options: {character, grid}
    }
};

export const Options = connect(
    mapStateToProps
)(OptionsComponent);