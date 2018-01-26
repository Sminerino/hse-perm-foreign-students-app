import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { ScreenHeader } from "../../../../Controls/ScreenHeader/ScreenHeader";
import { NewsTile } from './NewsTile/NewsTile';

export class AllNews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mockButtonVisible: true
        }
    }
    ___addMockNews = () => {
        this.props.addNews([
            {
                id: 0,
                title: 'Ярмарка вакансий "HSE Career Day"',
                picture: null,
                date: 'Понедельник 19.01.18'
            },
            {
                id: 1,
                title: 'Пермская вышка примет участие в выставке "Образование и карьера"',
                picture: null,
                date: 'Воскресенье 18.01.18'
            },
            {
                id: 2,
                title: 'Группа "Т Плюс" и НИУ ВШЭ-Пермь подписали соглашение...',
                picture: null,
                date: 'Четверг 15.01.18'
            },
            {
                id: 3,
                title: 'Победа на IV конкурсе "Права человека"',
                picture: null,
                date: 'Четверг 15.01.18'
            },
            {
                id: 4,
                title: 'Testing news5',
                picture: null,
                date: '11.11.15'
            },
            {
                id: 5,
                title: 'Testing news6',
                picture: null,
                date: '11.11.16'
            }
        ]);
        this.setState({
            mockButtonVisible: false
        })
    };

    keyExtractor = (item) => item.id;

    renderItem = ({item}) =>
        <NewsTile
            id={item.id}
            picture={item.picture}
            title={item.title}
            date={item.date}
            onPress={this.handleItemPress}
        />;

    handleItemPress = (itemId, title) => {
        this.props.navigation.navigate('NewsInstance', {newsId: itemId, title});
    };

    render() {
        return(
            <View style={{flex: 1}}>
                <ScreenHeader
                    title={this.props.translation.TITLE}
                    onLeftButtonPress={this.props.toggleDrawer}
                />
                <View style={{display: this.state.mockButtonVisible ? 'flex' : 'none'}}>
                    <Button
                        onPress={this.___addMockNews}
                        title='Add mock news'
                    />
                </View>
                <FlatList
                    data={this.props.news}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    refreshing={false}
                    onRefresh={()=>{}}
                />
            </View>
        );
    }
}