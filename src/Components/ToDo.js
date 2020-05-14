import React, { Component } from 'react';
import PageHeader from './PageHeader';
import {
  // Button,
  Content,
  TextInput,
  TextArea,
  FormGroup,
  Form,
  DatePicker,
  DatePickerInput,
} from 'carbon-components-react';
// import AddTask from './AddTask';
// import { Checkmark16 } from '@carbon/icons-react';

class ToDo extends Component {
  render() {
    const { match, todos } = this.props;
    const id = Number(match.params.id);
    const todo = todos.find((todo) => todo.id === id);
    const index = this.props.todos.findIndex((todo) => todo.id === id);
    if (this.props.loading === true) {
      return (
        <div>
          <h3>...Loading</h3>
        </div>
      );
    } else if (todo) {
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
                  value={todo.name}
                  style={{ width: '250px' }}
                ></TextInput>
              </FormGroup>
              <FormGroup legendText="">
                <TextArea
                  cols={20}
                  id="taskDescription"
                  name="taskDescription"
                  labelText="Task Description"
                  placeholder="Enter task description"
                  value={todo.description}
                  rows={4}
                ></TextArea>
              </FormGroup>
              <FormGroup legendText="">
                <DatePicker dateFormat="m/d/Y" datePickerType="single">
                  <DatePickerInput
                    id="taskDate"
                    name="taskDate"
                    placeholder="mm/dd/yyyy"
                    value={todo.date}
                    type="text"
                    labelText=""
                  />
                </DatePicker>
              </FormGroup>
            </Form>
          </Content>{' '}
        </Content>
      );
    } else {
      return <h3>...no task found</h3>;
    }
  }
}

export default ToDo;
