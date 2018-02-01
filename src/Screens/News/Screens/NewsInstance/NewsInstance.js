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
import ImageViewer from 'react-native-image-zoom-viewer';
import { ImageTile } from "./ImageTile/ImageTile";
import { processTitleLength } from "../../../../tools/tools";

export class NewsInstance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageModalVisible: false,
            pressedImageId: 0
        }
    }
    componentDidMount() {
        this.props.requestNewsInstance();
    }

    openImageModal = (imageId) => {
        this.setState({
            imageModalVisible: true,
            pressedImageId: imageId
        })
    };

    closeImageModal = () => {
        this.setState({
            imageModalVisible: false
        })
    };

    renderImageModal() {
        return (
            <Modal
                visible={this.state.imageModalVisible}
                onRequestClose={this.closeImageModal}
            >
                <ImageViewer
                    imageUrls={
                        this.props.newsPiece.images.map(
                            image => { return {url: image.source} }
                        )
                    }
                    index={this.state.pressedImageId}
                    flipThreshold={100}
                    loadingRender={() =>
                        <ActivityIndicator
                            color='#003399'
                            size='large'
                        />
                    }
                    saveToLocalByLongPress={false}
                />
            </Modal>
        );
    }

    renderImageTile(thumbUrl, id) {
        return (
            <View
                style={styles.thumbContainer}
                key={id}
            >
                <ImageTile
                    onPress={this.openImageModal}
                    id={id}
                    image={
                        <Image
                            source={{uri: thumbUrl}}
                            style={{width: 110, height: 110}}
                        />
                    }
                />
            </View>
        );
    }

    render() {
        if(this.props.newsPiece)
            if(!this.props.newsPiece.images.length)
                return(
                    <View style={styles.container}>
                        <ScreenHeader
                            backButton={true}
                            onLeftButtonPress={this.props.goBack}
                            title={processTitleLength(this.props.title, 35)}
                        />
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.text}>
                                    {this.props.newsPiece.text}
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                );
            else return(
                <View style={styles.container}>
                    <ScreenHeader
                        backButton={true}
                        onLeftButtonPress={this.props.goBack}
                        title={processTitleLength(this.props.title, 35)}
                    />
                    {this.renderImageModal()}
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.text}>
                                {this.props.newsPiece.text}
                            </Text>
                            <View style={styles.imageContainer}>
                                {this.props.newsPiece.images.map(
                                    (image, i) => this.renderImageTile(image.thumb, i)
                                )}
                            </View>
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
        flex: 1,
    },
    scrollView: {

    },
    contentContainer: {
        flex: 1,
        padding: 15
    },
    text: {
        fontSize: 17,
    },
    imageContainer: {
        marginTop: 25,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    thumbContainer: {
        margin: 5,
    },
    activityIndicatorContainer: {
        flexDirection: 'column',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});