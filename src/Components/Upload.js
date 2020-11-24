import { render } from '@testing-library/react'
import React from 'react'
import { Input } from 'semantic-ui-react'
import { Button} from 'semantic-ui-react'



//start from uploading url, and post/get request from db
//future: author, description, and everything else once this is done
//add upload button

class ContentUpload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content:  "photo link being uploaded"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            content: event.target});
        console.log(this.state + ' is submitted')    
      }

    handleSubmit(event) {
        // alert(this.state + ' is submitted');
        event.preventDefault();
      }

//function when upload content is submitted

render(){
    return(
    <div id="upload"> 
        {/* the field */}
       <Input  size='large' label='http://' placeholder='yourphotohere.com' onChange={this.handleChange} />
        
        {/* submit button */}
             <Button
              onSubmit={this.handleSubmit}
              content='submit'
            />
          
    </div> 
    )

    }
}
  
export default ContentUpload;

//upload button
// function Upload() {
//     function submit() {
//       console.log("idk write something to submit");
//     }
  
//     return (
      
//         <button onClick={submit}>Upload</button>
   
//     );
//   }
  

// class UploadButton extends Component {
//     buttonRef = createRef()
//     handleClick = () => this.buttonRef.current.focus()
  
//     render() {
//       return (
//         <Grid>
//           <Grid.Column width={8}>
//             <Button
//               content='A button that can be focused'
//               primary
//               ref={this.buttonRef}
//             />
//           </Grid.Column>
//           <Grid.Column width={8}>
      
//             <Button content='Set focused' onClick={this.handleClick} />
//           </Grid.Column>
//         </Grid>
//       )
//     }
//   }
  
//   export default UploadButton;