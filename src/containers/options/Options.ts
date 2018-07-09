import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { FORM_NAME, IOptionsProps, Options as OptionsComponent } from '../../components/options';

const selector = formValueSelector(FORM_NAME);

const mapStateToProps: (state: any) => IOptionsProps =
state => {
    const {
        character,
        grid,
        music,
        sound
    } = selector(state, 'character', 'grid', 'music', 'sound')
    return {
        initialValues: {
            character: 'tomster',
            grid: '8',
            music: true,
            sound: true
        },
        options: {character, grid, music, sound}
    }
};

export const Options = connect(
    mapStateToProps
)(OptionsComponent);