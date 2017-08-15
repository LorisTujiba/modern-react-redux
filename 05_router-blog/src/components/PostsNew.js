import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl, Grid, Row, Col, Button, ControlLabel, HelpBlock, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createPost } from '../actions'

class PostsNew extends Component {

  //Field component is in charge for event handling and managing the state
  //up to us to define the element that will be rendered to the screen

  //to wired up the event handling, we just need to put {...field.input}
  //inside the input tags

  //The 3 states of Form
  //pristine : no input touched, user hasent selected it
  //touched : user has selected / focus and focus out
  //invalid : if error exist
  renderField(field){

    //const { meta : { touched, error } } = field; < simplified with this, pull down the meta

    const className = field.meta.error && field.meta.touched
                      ? "error"
                      : !field.meta.error
                        ? "success"
                        : null;

    return(
        <FormGroup validationState={className}>
          <ControlLabel>
            {field.label}
          </ControlLabel>
          <FormControl
            type="text"
            {...field.input}
          />
          <FormControl.Feedback/>
          <HelpBlock>
            {field.meta.touched ? field.meta.error : ''}
          </HelpBlock>
        </FormGroup>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');//callback function to redirect to home
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Grid>
        <Row>
          <Col>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Title"
              name="title"
              component={this.renderField}
            />
            <Field
              label="Categories"
              name="categories"
              component={this.renderField}
            />
            <Field
              label="Post Content"
              name="content"
              component={this.renderField}
            />
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit">Submit</Button>
              <Button href="/" bsStyle="danger">Cancel</Button>
            </ButtonToolbar>
          </form>
          </Col>
        </Row>
      </Grid>
    );
  }

}

function validate(values){
  const errors = {};

  if(!values.title || values.title.length < 3){
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories";
  }
  if(!values.content){
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);
