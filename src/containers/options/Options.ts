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
        musicVolume,
        sound,
        soundVolume
    } = selector(state, 
        'character',
        'grid', 
        'music',
        'musicVolume',
        'sound',
        'soundVolume'
    )
    return {
        initialValues: {
            character: 'tomster',
            grid: '8',
            music: true,
            musicVolume: '0.5',
            sound: true,
            soundVolume: '0.5'
        },
        options: {character, grid, music, musicVolume, sound, soundVolume}
    }
};

export const Options = connect(
    mapStateToProps
)(OptionsComponent);