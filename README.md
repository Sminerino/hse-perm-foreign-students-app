### Installing
```
npm i
```
### Running
```
npm run start
```
created with:
1. react-native
2. create-react-native-app
3. expo
4. react-navigation
5. redux, redux-thunk
6. love

[UI](https://www.figma.com/file/CDfDwdsUmxpJW0r2XWMUogEt/Untitled?node-id=11%3A42)

###### What works:
19.01.18:
1. settings including changing language and group
2. drawer (not search in it though)
3. timetable screen ui and some of its logic
4. a little bit of news screen

###### Notes:
19.01.18:
1. in order to make app work you need to have object 'translation_english' and 'translation_russian' in AsyncStorage
which contain translations (can be found in src/settings/lang), later they will be pushed to AsyncStorage during initial setup
