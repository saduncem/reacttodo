import { useInput } from "../hooks/userInput";
import { authenticate } from "../Services/UserService";
import { UserResponse } from "../types";

const Login = () => {

    const [inputs, setInputs] = useInput({ username: "", password: "" });
    const sendLogin =  async ()=>{
        const result:UserResponse = await authenticate(inputs);
        console.log(result);
    }
    return (
        
      <div className='container text-center'>
      <form className="form-signin" style={{maxWidth:330}}>
        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="username" >user name</label>
        <input type="text" name="username" className="form-control" placeholder="user name" value={inputs.username} onChange={setInputs}  />
        <label htmlFor="password" >Password</label>
        <input type="password" name="password" className="form-control" placeholder="Password" value={inputs.password} onChange={setInputs} />
        <button className="btn btn-lg btn-primary btn-block" type="button"  onClick={sendLogin} >Giriş Yap</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
       </form>
       </div>
     
    );
};

export default Login;