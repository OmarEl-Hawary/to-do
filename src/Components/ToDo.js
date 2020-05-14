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

class ToDo extends Component {
  render() {
    const { match, todos } = this.props;
    const id = Number(match.params.id);
    const todo = todos.find((todo) => todo.id === id);
    const index = this.props.todos.findIndex((todo) => todo.id === id);
    return (
      <Content>
        <PageHeader pageheader={todo.name}></PageHeader>
        <Content todo={todo} {...this.props} index={index}>
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
        </Content>{' '}
      </Content>
    );
  }
}

export default ToDo;
