import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import classTiming from './../res/classTiming';
import { ClassTilesContainerStyles } from './ClassTilesContainerStyles';

class ClassTilesContainer extends React.Component {
    static propTypes = {
        classes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            room: PropTypes.number,
            building: PropTypes.number,
            teacher: PropTypes.string,
        }))
    };

    render() {
        return(
            <View style={ClassTilesContainerStyles.container}>
                <FlatList
                    data={this.props.classes}
                    renderItem={ ({item}) => ClassTilesContainer._renderTile(item) }
                />
            </View>
        );
    }

   static _renderTile(_item) {
        return(
            <View style={ClassTilesContainerStyles.tile}>
                <View style={ClassTilesContainerStyles.timeContainer}>
                    <Text style={ClassTilesContainerStyles.text}>
                        {classTiming[_item.id].start} - {classTiming[_item.id].end}
                    </Text>
                </View>

                <View style={ClassTilesContainerStyles.titleTeacherContainer}>
                    <Text style={ClassTilesContainerStyles.text}>
                        {_item.title}
                    </Text>

                    <Text style={ClassTilesContainerStyles.textSmall}>
                        {_item.teacher}
                    </Text>
                </View>

                <View style={ClassTilesContainerStyles.locationContainer}>
                    <Text style={ClassTilesContainerStyles.text}>
                        {_item.room}[{_item.building}]
                    </Text>
                </View>
            </View>
        )
    }
}

export { ClassTilesContainer };