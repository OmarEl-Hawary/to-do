import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import PageHeader from './PageHeader';
import {
  Button,
  Content,
  TextInput,
  TextArea,
  FormGroup,
  Form,
  DatePicker,
  DatePickerInput,
} from 'carbon-components-react';
import { AddFilled16 } from '@carbon/icons-react';

class AddTask extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const taskName = event.target.elements.taskName.value;
    const taskDescription = event.target.elements.taskDescription.value;
    const taskDate = event.target.elements.taskDate.value;
    const todo = {
      id: Number(new Date()),
      name: taskName,
      description: taskDescription,
      date: taskDate,
    };
    if (taskName) {
      this.props.addToDo(todo);
      this.props.onHistory.push('/');
    }
  }

  render() {
    return (
      <div>
        <Content>
          <PageHeader pageheader={'Add tasks'}></PageHeader>
          <Content>
            <Form>
              <FormGroup>
                <TextInput
                  id="taskName"
                  name="taskName"
                  labelText="Task Name"
                  placeholder="Enter task name"
                  style={{ width: '250px' }}
                />
              </FormGroup>
              <FormGroup>
                <TextArea
                  cols={20}
                  id="taskDescription"
                  name="taskDescription"
                  labelText="Task Description"
                  placeholder="Enter task description"
                  rows={4}
                />
              </FormGroup>
              <FormGroup>
                <DatePicker dateFormat="m/d/Y" datePickerType="single">
                  <DatePickerInput
                    id="taskDate"
                    name="taskDate"
                    placeholder="mm/dd/yyyy"
                    type="text"
                    labelText=""
                  />
                </DatePicker>
              </FormGroup>
              <p align="left">
                <Button
                  renderIcon={AddFilled16}
                  //FIXME
                  // onClick={() => {
                  //   props.addToDo(props.index);
                  // }}
                >
                  Add
                </Button>
              </p>
            </Form>
          </Content>
        </Content>
      </div>
    );
  }
}

export default AddTask;
