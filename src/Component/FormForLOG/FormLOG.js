// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import "./ForLOG.css";
// function FormComponentLOG() {
//   return ( 
//       <Form className='FormControllForEditing container p-5 m-5'>
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={2}>
//           Email
//         </Form.Label>
//         <Col sm={10}>
//           <Form.Control type="email" placeholder="Email" />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
//         <Form.Label column sm={2}>
//           Password
//         </Form.Label>
//         <Col sm={10}>
//           <Form.Control type="password" placeholder="Password" />
//         </Col>
//       </Form.Group>
       
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <Form.Check label="Remember me" />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <Button type="submit">Sign in</Button>
//         </Col>
//       </Form.Group>
//     </Form> 
//   );
// }

// export default FormComponentLOG;
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth'; 
import { NavLink, useNavigate } from 'react-router-dom' ;
import { auth } from '../../InstanceAxios/FireBase/firebase';
 
const FormComponentLOG = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/main")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main className='p-5' >        
                <section>
                    <div>                                            
                        <p> FocusApp </p>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default FormComponentLOG