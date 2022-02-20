import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Header from "./components/Header";
import ListItem from "./components/TasksListItem";
import {useState} from "react";
import InputForm from "./components/InputTaskForm";
import uuid from 'react-native-uuid';

export default function App() {
  const [itemsList, setItemsList] = useState([
      {text: 'купить молоко', key: '1', isDone: false, inProgress: false},
      {text: 'заплатить за интернет', key: '2', isDone: false, inProgress: false},
      {text: 'купить хлеб', key: '3', isDone: false, inProgress: false}
  ])

  const addTaskHandler = (text) => {
      setItemsList((list) => {
          return [

              { text: text, key: uuid.v4(), isDone: false, inProgress: false },
              ...list
          ]
      })
  }

  const deleteTaskHandler = (key) => {
      setItemsList((list) => {
          return list.filter(itemsList => itemsList.key !== key)
      })
  }

  return (
    <Container>
        <Header />
        <Group>
            <InputForm addTaskHandler={addTaskHandler} />
            <GroupTitle>Поточні задачі:</GroupTitle>

            <GroupItem>
                <View>
                    <ItemHeader>опис першої задачі</ItemHeader>
                    <FullName>Владислав Шкіль</FullName>
                </View>
                <ItemAvatar source={{uri:'https://career.softserveinc.com/uploads/avatars/avatar_49144_1705472408.png'}} />
                <GroupDate>12:30</GroupDate>
            </GroupItem>

            <FlatList
                data={itemsList}
                renderItem={({ item }) => (
                <ListItem
                    elem={item}
                    deleteTaskHandler={deleteTaskHandler}
                />
                )}
            />

        </Group>
        <StatusBar style='auto' />
    </Container>
  );
}

//yarn add styled-components

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const Container = styled.View`
    flex: 1;
    // margin-top: 50px;
`;

const Group = styled.View`
    padding: 0 20px;
`;

const GroupTitle = styled.Text`
    font-weight: 800;
    font-size: 22px;
    color: #000000;
`;

const GroupItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 20px;
    border-bottom-Width: 2px;
    border-bottom-Color: #f3f3f3;
`;

const ItemHeader = styled.Text`
    
`;

const ItemAvatar = styled.Image`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: 15px;
    margin-right: 15px;
`;

const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const GroupDate = styled.Text`
    background: #e9f5ff;
    border-radius: 18px;
    font-weight: 600;
    color: #4294ff;
    font-size: 14px;
    width: 70px;
    height; 35px;
    text-align: center;
`;
