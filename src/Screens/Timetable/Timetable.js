import React from 'react'
import { View } from 'react-native';
import { ScreenHeader } from './../../Controls/ScreenHeader/ScreenHeader';
import Datepicker from './TimetableDatepicker/TimetableDatepicker';
import TimetableStyles from './TimetableStyles';
import TimetableDateswitcher from "./TimetableDateswitcher/TimetableDateswitcher";
import { ClassTilesContainer } from "./ClassTilesContainer/ClassTilesContainer";
//import timetable api caller

export class Timetable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
        }
    }
    render() {
        return(
          <View style={TimetableStyles.container}>
              <ScreenHeader
                  title={this.props.translation.TIMETABLE.TITLE}
                  onLeftButtonPress={ () =>
                      this.props.navigation.navigate('DrawerToggle')
                  }
                  rightButton={{
                          onPress: ()=>console.log('pressed calendar'),
                          icon: require('./../../res/icons/calendar.png'),
                      }}
              />

              <TimetableDateswitcher
                  localizedDayNames={this.props.translation.DATE.DAY}
                  date={this.state.currentDate}
                  onDateChange={this.changeDate}
              />

              <ClassTilesContainer
                  classes={[
                      {key: 0,id:0, title: 'Econometrics', teacher: 'Radionova M.V.', room: 301, building:1},
                      {key: 1,id:1, title: 'Econometrics', teacher: 'Radionova M.V.', room: 301, building:1},
                      {key: 2,id:2, title: 'Processes and systems', teacher: 'Zamyatina E.B.', room: 511, building:3}
                  ]}
              />
          </View>
        );
    }

    changeDate = (date) => {
        this.setState({currentDate: date});
    }
}