import React from 'react';
import { ScreenHeader } from "../../../../Controls/ScreenHeader/ScreenHeader";
import {
    Text,
    View,
    ActivityIndicator,
    Image,
    StyleSheet,
    ScrollView,
    Modal
} from 'react-native';
import { processTitleLength } from "../../../../tools/tools";

export class NewsInstance extends React.Component {

    componentDidMount() {
        this.props.requestNewsInstance();
    }

    render() {
        if(this.props.newsPiece)
            if(!this.props.newsPiece.images)
                return(
                    <View style={styles.container}>
                        <ScreenHeader
                            backButton={true}
                            onLeftButtonPress={this.props.goBack}
                            title={processTitleLength(this.props.title, 20)}
                        />
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.text}>
                                {this.props.newsPiece.text}
                            </Text>
                        </ScrollView>
                    </View>
                );
            else return(
                <View style={styles.container}>
                    <ScreenHeader
                        backButton={true}
                        onLeftButtonPress={this.props.goBack}
                        title={processTitleLength(this.props.title, 20)}
                    />
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.text}>
                            {this.props.newsPiece.text}
                        </Text>
                        <View style={styles.imageContainer}>
                            {this.props.newsPiece.images.map(

                            )}
                        </View>
                    </ScrollView>
                </View>
            );
        return (
            <View style={styles.container}>
                <ScreenHeader
                    backButton={true}
                    onLeftButtonPress={this.props.goBack}
                    title={processTitleLength(this.props.title, 35)}
                />
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator color='#003399' size='large'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffafa',
    },
    scrollView: {
        padding: 5,
    },
    text: {

    },
    imageContainer: {

    },
    activityIndicatorContainer: {
        flexDirection: 'column',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});