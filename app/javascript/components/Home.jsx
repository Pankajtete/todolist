import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [todo, setTodo] = useState([]);
    const [showStatus, setShowStatus] = useState("all");
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const url = "/api/v1/todo/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setTodo(res))
            .catch(() => navigate("/"));
    }, []);

    const handleShowStatus = (status) => {
        setShowStatus(status);
    };

    const handleSearchTitle = (e) => {
        setSearchTitle(e.target.value);
    };

    const filteredTodo = todo.filter((item) => {
        if (showStatus === "active") {
            return !item.completed;
        } else if (showStatus === "completed") {
            return item.completed;
        } else {
            return true; // show all items
        }
    }).filter((item) =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    return (
        <>
            <div className="main-home container-fluid text-center mb-1">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mainhead">Todo App</h1>
                        <div className="mb-2">
                            <div className="row ">
                            <div className="col-md-8">
                                <div className="search-box text-lg-start">
                                    
                                <button className="btn btn-outline-dark" onClick={() => handleShowStatus("all")}>Show All</button>
                                <button className="btn btn-danger" onClick={() => handleShowStatus("active")}>Show Active</button>
                                <button className="btn btn-success" onClick={() => handleShowStatus("completed")}>Show Completed</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <input
                                        type="text"
                                        value={searchTitle}
                                        onChange={handleSearchTitle}
                                        placeholder="Search by title"
                                    />
                               
                            </div>
                            </div>
                        </div>
                        <div className="container table-responsive py-5">
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTodo.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{item.discription}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={item.completed}
                                                    writeOnly
                                                />
                                            </td>
                                            <td>
                                                <Link to={`/homepage/show/${item.id}`}>
                                                    Show
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center mt-2 mb-2">
                            <Link
                                to="homepage/create"
                                className="btn btn custom-button"
                                role="button"
                            >
                                Create New Todo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Home;
