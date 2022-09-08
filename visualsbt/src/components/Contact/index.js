import React from 'react';
import { Container, 
FormWrap,
Icon,
FormContent,
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text
} from './ContactElements';

const ContactMe = () => {
  return (
      <>
  <Container>
      <FormWrap>
       <Icon to='/' >Back to Home</Icon>
       <FormContent>
           <Form action='#'>
               <FormH1>Contact Me</FormH1>
               {/* Save code for when your books are open again */}
               {/* <FormLabel htmlFor='for'>Email</FormLabel>
               <FormInput type='email' required />
               <FormLabel htmlFor='for'>Password</FormLabel>
               <FormInput type='password' required />
               <FormButton type='submit'>Continue</FormButton> */}
               <Text>BOOKS ARE CLOSED</Text>
           </Form>
       </FormContent>
      </FormWrap>
  </Container>
  </>
  )
}

export default ContactMe