import { useState } from "react"

export const useInput = (params : any) => {
    const [inputs,setInputs] = useState(params);

    const handleChange =( event :any) => {
        // const { name, value } = event.target;
        // setIputs(inputs => ({
        //     ...inputs,
        //     [name]: value
        // }));
        setInputs({...inputs, [event.target.name]: event.target.value});
        
    }

    return [inputs, handleChange];
}