import React,{Component} from 'react';
import {Field , reduxForm} from 'redux-form';
class PostNew extends Component{
renderField(field){
  return(
    <div className="form-group">
    {field.label}
    <input className="form-control" type='text'
      {...field.input}
      />
      {field.meta.error}
    </div>
  )
}
onSubmit(values){
  console.log(values)
}
    render(){
      const {handleSubmit} = this.props
      return(
      <div>

          <h3> Post New</h3>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
              label="Title for Post"
              name="title"
              component={this.renderField}
               />
               <Field
               label="Categories"
               name="categories"
               component={this.renderField}
                />
                <Field
                label="Content for Post"
                name="content"
                component={this.renderField}
                 />
                 <button className="btn btn-primary" type="submit">Submit</button>
          </form>
      </div>
      )
    }
}
function validate(values){
const error={};
if(!values.title) {
 	error.title="Enter Title"
}
if(!values.categories) {
 	error.categories="Enter Categories"
}
if(!values.content) {
 	error.content="Enter Content"
}
 return error;

}
export default reduxForm({
  validate,
  form:'PostNewForm'
})(PostNew);
