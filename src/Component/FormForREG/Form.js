// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import "./Form.css"

// function FormComponentRGS() {
//   return (
//     <div className="FormControllForEditing container p-5 m-5">
//     <Form >
//       <Row className="mb-3 ">
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" controlId="formGridAddress1">
//         <Form.Label>Address</Form.Label>
//         <Form.Control placeholder="1234 Main St" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formGridAddress2">
//         <Form.Label>Address 2</Form.Label>
//         <Form.Control placeholder="Apartment, studio, or floor" />
//       </Form.Group>

//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>State</Form.Label>
//           <Form.Select defaultValue="Choose...">
//             <option>Choose...</option>
//             <option>...</option>
//           </Form.Select>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" id="formGridCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//   );
// }

// export default FormComponentRGS;
import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../InstanceAxios/FireBase/firebase';
 
const FormComponentRGS = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/main")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main className='p-5'>        
        <section>
            <div>
                <div>                  
                    <h1> FocusApp </h1>                                                                            
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default FormComponentRGS
