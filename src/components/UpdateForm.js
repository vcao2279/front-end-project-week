import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateNote } from '../actions';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 2.7rem;
    padding-right: 3rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  letter-spacing: 0.65px;
  width: 190px;
  height: 43px;
  font-size: 1.4rem;
  font-family: 'Raleway', sans-serif;
  margin-top: 2.1rem;
  color: white;
  background: #24b8bd;
  border: 1px solid rgb(163, 170, 171);
`;

const TextArea = styled.textarea`
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 20px;
  margin-top: .25rem;
  resize: none;
`;

const Input = styled.input`
  width: 357px;
  margin-bottom: .25rem;
  height: 42px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;
`;

const Heading = styled.h2`
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
    padding: 0;     
    font-size: 1.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing: .8px;
`;

const Warning = styled.p`
    align-text: center;
    font-size: 24px;
    font-weight: bold;
    color: #E63946;
    margin: auto;
    transition-delay: 0.5s;
    font-family: 'Lora', Serif;
`;

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true
    }
  }

  submitHandler = e => {
    e.preventDefault();
    const id = this.props.match.params.id;

    if (!(this.editTitle.value && this.editContent.value)) {
      this.setState({ isValid: false })
    } else {
      this.props.updateNote(id, {
        title: this.editTitle.value,
        content: this.editContent.value
      })
      this.props.history.push(`/notes/${id}`);
    }

  }

  render() {
    const warning = this.state.isValid
      ? null
      :
      <Warning>
        ERROR: Please provide both title and content for note.
      </Warning>;

    return (
      <Content>
        <Heading>Edit Note: </Heading>
        <Form onSubmit={this.submitHandler}>
          <Input
            placeholder="Note Title"
            type="text"
            name="title"
            innerRef={node => this.editTitle = node}
          />
          <TextArea
            placeholder="Note Content"
            type="text"
            name="body"
            cols="30"
            rows="13"
            innerRef={node => this.editContent = node}
          />
          <Button type='submit'>Update</Button>
        </Form>
        {warning}
      </Content>
    );
  }
}

export default connect(null, { updateNote })(UpdateForm);
