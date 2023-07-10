import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [completed, setCompleted] = useState(false);
    const handleCheckboxChange = () => {

        setCompleted(!completed);

    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/todo/create";
    
        if (title.length == 0 || discription.length == 0 || completed.length == 0)
          return;
    
        const body = {
          title,
          discription,
          completed
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((response) => navigate("/"))
          .catch((error) => console.log(error.message));
      };
    return (

        <>
            <div className="container mt-5 mb-5 bg-info d-flex justify-content-center">
              {/* <div className="row"> */}
              
                
                <form className="text-center">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={discription} onChange={(e) => setDiscription(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={completed} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Please Cheak if Todo Complete Or not/</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                </form>
            </div>
            {/* </div> */}
        </>
    )
}
export default Create;