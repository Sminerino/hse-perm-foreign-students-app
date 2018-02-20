import React from 'react';
import { View, Picker, Text, StyleSheet, Button } from 'react-native'
import studyPrograms from "../../../settings/studyPrograms/studyPrograms";
import { SelectPicker } from 'react-native-select-picker';

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
            year: 2014,
            group: 1,
        }
    }

    render() {
        const programs = this._getProgramsArray();
        const relevantYears = _getYearsArray();
        console.log(this.state);
        return(
            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        {this.props.translation.GROUP.GROUP_TITLE}
                    </Text>
                </View>
                <View style={styles.pickersContainer}>
                    <SelectPicker
                        data={programs.map(
                            program => ({value:program.value, label:program.label})
                        )}
                        onValueChange={this._setStudyProgram}
                        fontColor='#003399'
                        fontSize={15}
                        wrapWidth={250}
                        maskercolor='rgba(255, 255, 255, 0.7)'
                        itemHeight={70}
                        wrapHeight={210}
                    />
                    <SelectPicker
                        data={relevantYears.map(
                            year => ({value:year, label:(year-2000).toString()})
                        )}
                        onValueChange={this._setYear}
                        fontColor='#003399'
                        fontSize={15}
                        wrapWidth={75}
                        maskercolor='rgba(255, 255, 255, 0.7)'
                        itemHeight={70}
                        wrapHeight={210}
                    />
                    <SelectPicker
                        data={[
                            {value: 1, label: 1},
                            {value: 2, label: 2},
                            {value: 3, label: 3},
                            {value: 4, label: 4}
                        ]}
                        onValueChange={this._setGroup}
                        fontColor='#003399'
                        fontSize={15}
                        wrapWidth={75}
                        maskercolor='rgba(255, 255, 255, 0.7)'
                        itemHeight={70}
                        wrapHeight={210}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this.goBack}
                            color='#003399'
                            title={this.props.translation.INITIAL_SETUP.BACK} />

                    <Button onPress={this.endSetup}
                            color='#003399'
                            title={this.props.translation.INITIAL_SETUP.END}/>
                </View>
            </View>
        );
    }
    goBack = () => {
        this.props.navigation.goBack();
    };

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
    buttonContainer: {
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    pickersContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        alignItems: 'center',
        margin: 10
    },
    titleText: {
        color: '#003399',
        fontSize: 25
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between'
    }
});