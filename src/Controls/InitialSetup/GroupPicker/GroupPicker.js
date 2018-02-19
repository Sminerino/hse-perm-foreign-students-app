import React from 'react';
import { View, Picker, Text, StyleSheet, Button } from 'react-native'
import studyPrograms from "../../../settings/studyPrograms/studyPrograms";

const _getYearsArray = () => {
    let currentYear = new Date().getFullYear();
    let yearArr = [];
    for (let i = currentYear - 4; i < currentYear + 4; i++)
        yearArr.push(i);
    return yearArr;
};

export class GroupPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            program: 'businessInformatics',
            year: 2015,
            group: 1,
        }
    }

    render() {
        const programs = this._getProgramsArray();
        const relevantYears = _getYearsArray();
        return(
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.props.translation.GROUP.GROUP_TITLE}
                    </Text>
                </View>
                <View style={styles.pickersContainer}>
                    <Picker
                        selectedValue={
                            this.state.program
                        }
                        onValueChange={this._setStudyProgram}
                        style={styles.programPicker}
                        itemStyle={styles.itemStyle}
                    >
                        {programs.map(program =>
                            <Picker.Item
                                value={program.value}
                                label={program.label}
                                key={program.value}
                            />
                        )}
                    </Picker>

                    <Picker
                        selectedValue={
                            this.state.year
                        }
                        onValueChange={this._setYear}
                        style={styles.picker}
                    >
                        {relevantYears.map(year =>
                            <Picker.Item
                                value={year}
                                label={(year-2000).toString()}
                                key={year}
                            />
                        )}
                    </Picker>

                    <Picker
                        selectedValue={
                            this.state.group
                        }
                        onValueChange={this._setGroup}
                        style={styles.picker}
                    >
                        <Picker.Item value={1} label='1'/>
                        <Picker.Item value={2} label='2'/>
                        <Picker.Item value={3} label='3'/>
                        <Picker.Item value={4} label='4'/>
                    </Picker>
                    <Button onPress={this.goBack}
                            title={this.props.translation.INITIAL_SETUP.BACK} />

                    <Button onPress={this.endSetup}
                            title={this.props.translation.INITIAL_SETUP.END}/>
                </View>
            </View>
        );
    }
    goBack() {
        this.props.navigation.goBack();
    }

    _getProgramsArray() {
        let programArr = [];
        studyPrograms.forEach(program => {
            programArr.push({
                value: program,
                label: this.props.translation.GROUP.PROGRAMS[program].LONG
            })
        });
        return programArr;
    }

    _setStudyProgram = (_program) => {
        this.setState({
            program: _program,
            changed: true
        });
    };
    _setYear = (_year) => {
        this.setState({
            year: _year,
            changed: true
        });
    };
    _setGroup = (_group) => {
        this.setState({
            group: _group,
            changed: true
        });
    };

    endSetup = () => {
        this.props.setGroup({
            program: this.state.program,
            year: this.state.year,
            group: this.state.group
        });
        this.props.endInitialSetup();
    }

}

const styles = StyleSheet.create({

});