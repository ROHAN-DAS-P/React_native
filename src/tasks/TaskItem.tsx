import React from 'react';
import { View, Text } from 'react-native';
import { Task } from '../models/Task';

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  return (
    <View>
      <Text>{task.title}</Text>
      <Text>{task.completed ? 'Completed' : 'Pending'}</Text>
    </View>
  );
};

export default TaskItem;
