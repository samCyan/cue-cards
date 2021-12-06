import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Cue Card Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="cue-card-question">Question</Label>
              <Input
                type="text"
                id="cue-card-question"
                name="question"
                value={this.state.activeItem.question}
                onChange={this.handleChange}
                placeholder="Enter Cue Card Question"
              />
            </FormGroup>
            <FormGroup>
              <Label for="cue-card-answer">Answer</Label>
              <Input
                type="text"
                id="cue-card-answer"
                name="answer"
                value={this.state.activeItem.answer}
                onChange={this.handleChange}
                placeholder="Enter Cue Card Answer"
              />
            </FormGroup>
            <FormGroup>
              <Label for="cue-card-category">Category</Label>
              <Input
                type="text"
                id="cue-card-cateogry"
                name="category"
                value={this.state.activeItem.category}
                onChange={this.handleChange}
                placeholder="Choose category"
              />
            </FormGroup>

            <FormGroup>
              <Label for="cue-card-views">Revisits</Label>
              <Input
                type="text"
                id="cue-card-views"
                name="views"
                value={this.state.activeItem.views}
                onChange={this.handleChange}
                placeholder="0"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}