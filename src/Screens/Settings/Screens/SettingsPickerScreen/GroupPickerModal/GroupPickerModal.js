import React from 'react';
import {
    View, Text, Modal, Picker,
    TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';
import GroupPickerModalStyles from './GroupPickerModalStyles';
import studyPrograms from './../../../../../settings/studyPrograms/studyPrograms';

export class GroupPickerModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changed: false,
        }
    }

    render() {
        return (
            <Modal
                onRequestClose={this.props.onRequestClose}
                visible={this.props.visible}
                transparent={true}
                mode='dialog'
            >
                {this._renderModalContent()}
            </Modal>
        );
    }
    _renderModalContent() {
        const programs = this._getProgramsArray();
        const relevantYears = this._getYearsArray();
        return(
            <View style={GroupPickerModalStyles.container}>
                {this._renderOutsideWindow('vertical')}
                <View style={GroupPickerModalStyles.outsideWindowContainer}>
                    {this._renderOutsideWindow('horizontal')}
                    <View style={GroupPickerModalStyles.window}>
                        <View style={GroupPickerModalStyles.titleContainer}>
                            <Text style={GroupPickerModalStyles.title}>
                                {this.props.translation.GROUP.GROUP_TITLE}
                            </Text>
                        </View>
                        <View style={GroupPickerModalStyles.pickersContainer}>
                            <Picker
                                selectedValue={
                                    this.state.program || this.props.group.program
                                }
                                onValueChange={this._setStudyProgram}
                                style={GroupPickerModalStyles.programPicker}
                                itemStyle={GroupPickerModalStyles.itemStyle}
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
                                    this.state.year || this.props.group.year
                                }
                                onValueChange={this._setYear}
                                style={GroupPickerModalStyles.picker}
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
                                    this.state.group || this.props.group.group
                                }
                                onValueChange={this._setGroup}
                                style={GroupPickerModalStyles.picker}
                            >
                                <Picker.Item value={1} label='1'/>
                                <Picker.Item value={2} label='2'/>
                                <Picker.Item value={3} label='3'/>
                                <Picker.Item value={4} label='4'/>
                            </Picker>


                        </View>
                        {this._renderButtons()}
                    </View>
                    {this._renderOutsideWindow('horizontal')}
                </View>
                {this._renderOutsideWindow('vertical')}
            </View>
        );
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
    _getYearsArray() {
        let currentYear = new Date().getFullYear();
        let yearArr = [];
        for (let i = currentYear - 4; i < currentYear + 4; i++)
            yearArr.push(i);
        return yearArr;
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

    _renderOutsideWindow(orientation) {
        return(
            <TouchableWithoutFeedback
                onPress={this.props.onRequestClose}
            >
                <View style={
                    orientation === 'vertical'
                        ? GroupPickerModalStyles.outsideWindowVertical
                        : GroupPickerModalStyles.outsideWindowHorizontal
                } />
            </TouchableWithoutFeedback>
        );
    }
    _renderButtons() {
        return(
            <View style={GroupPickerModalStyles.buttonsContainer}>
                <TouchableNativeFeedback
                    onPress={this._submitState}
                >
                    <View style={GroupPickerModalStyles.button}>
                        <Text style={GroupPickerModalStyles.buttonText}>
                            {this.props.translation.INTERFACE.APPLY}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={GroupPickerModalStyles.buttonSeparator} />
                <TouchableNativeFeedback
                    onPress={this.props.onRequestClose}
                >
                    <View style={GroupPickerModalStyles.button}>
                        <Text style={GroupPickerModalStyles.buttonText}>
                            {this.props.translation.INTERFACE.CANCEL}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    _submitState = () => {
        if(this.state.changed)
            this.props.onSubmit({
                program:
                    this.state.program || this.props.group.program,
                year:
                    this.state.year || this.props.group.year,
                group:
                    this.state.group || this.props.group.group
            });
        this.props.onRequestClose();
    };
}