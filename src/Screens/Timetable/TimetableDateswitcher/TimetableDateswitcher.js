import React from 'react';
import { View, Image, Text, TouchableNativeFeedback} from 'react-native';
import TimetableDateswitcherStyles from './TimetableDateswitcherStyles';

export default class TimetableDateswitcher extends React.Component {
    render() {
        return(
            <View style={TimetableDateswitcherStyles.container}>
                <TouchableNativeFeedback onPress={this.changeDayBack}>
                    <View>
                        <Image
                            source={require('./../../../res/icons/arrowRight.png')}
                            style={TimetableDateswitcherStyles.arrowLeft}
                        />
                    </View>
                </TouchableNativeFeedback>

                <View style={TimetableDateswitcherStyles.dateTitleContainer}>
                    <Text style={TimetableDateswitcherStyles.dateTitle}>
                        {this.getDateString(this.props.date)}
                    </Text>
                </View>

                <TouchableNativeFeedback onPress={this.changeDayForward}>
                    <View>
                        <Image
                            source={require('./../../../res/icons/arrowRight.png')}
                            style={TimetableDateswitcherStyles.arrowRight}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    getDateString(date) {
        return this.props.localizedDayNames[date.getDay()]+ ' ' +
            date.getDate() + '.' +(date.getMonth()+1);
    }

    changeDayBack = () => {
        let newDate=this.props.date;
        newDate.setDate(newDate.getDate() - 1);

        this.props.onDateChange(newDate);
    };
    changeDayForward = () => {
        let newDate=this.props.date;
        newDate.setDate(newDate.getDate() + 1);

        this.props.onDateChange(newDate);
    };
}