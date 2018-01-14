import React from 'react';
import { View, TextInput} from 'react-native';
import DrawerSearchStyles from './DrawerSearchStyles';

export default class DrawerSearch extends React.Component {

    render() {
        return (
            <View style={ DrawerSearchStyles.container }>
                <TextInput
                    style={ DrawerSearchStyles.input }
                    placeholder={this.props.lang.DRAWER.SEARCH}
                    underlineColorAndroid='transparent'
                    selectionColor= '#D9E0F0'
                />
            </View>
        );
    }
}