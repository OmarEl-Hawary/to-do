import React, { Component } from 'react';
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
    const name = event.target.elements.taskName.value;
    const description = event.target.elements.taskDescription.value;
    const date = event.target.elements.taskDate.value;
    const todo = {
      id: Number(new Date()),
      name: name,
      description: description,
      date: date,
    };
    if (name) {
      this.props.startAddingToDo(todo);
      this.props.onHistory.push('/');
    }
  }

  render() {
    return (
      <Content>
        <PageHeader pageheader={'Add tasks'}></PageHeader>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup legendText="">
              <TextInput
                id="taskName"
                name="taskName"
                labelText="Task Name"
                placeholder="Enter task name"
                style={{ width: '250px' }}
              />
            </FormGroup>
            <FormGroup legendText="">
              <TextArea
                cols={20}
                id="taskDescription"
                name="taskDescription"
                labelText="Task Description"
                placeholder="Enter task description"
                rows={4}
              />
            </FormGroup>
            <FormGroup legendText="">
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
              <Button type="submit" renderIcon={AddFilled16}>
                Add
              </Button>
            </p>
          </Form>
        </Content>
      </Content>
    );
  }
}

export default AddTask;
