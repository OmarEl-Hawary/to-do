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
  render() {
    return (
      <div>
        <LeftPanel></LeftPanel>
        <PageHeader pageheader={'Add tasks'}></PageHeader>
        <Content>
          <Form>
            <FormGroup>
              <TextInput
                id="taskName"
                labelText="Task Name"
                placeholder="Enter task name"
                style={{ width: '250px' }}
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                cols={20}
                id="taskDescription"
                labelText="Task Description"
                placeholder="Enter task description"
                rows={4}
              />
            </FormGroup>
            <FormGroup>
              <DatePicker dateFormat="m/d/Y" datePickerType="single">
                <DatePickerInput
                  id="taskDate"
                  placeholder="mm/dd/yyyy"
                  type="text"
                  minDate="today"
                />
              </DatePicker>
            </FormGroup>
            <p align="left">
              <Button renderIcon={AddFilled16}>Add</Button>
            </p>
          </Form>
        </Content>
      </div>
    );
  }
}

export default AddTask;
