import React, { useEffect, useState } from 'react';
import {useNavigate, useOutletContext, useParams} from "react-router";
import Input from "./form/Input";
const EditMovie = () => {
    const navigate = useNavigate();
    const {jwtToken} = useOutletContext()
    const [error , setError] = useState(null)
    const [errors,setErrors] = useState([])

    const hasError = (key) => {
        return errors.indexOf(key) !== -1;
    }

    const [movie,setMovie] = useState({
        id: 0,
        title: "",
        release_date: "",
        mpaa_rating: "",
        description: "",
    })

    let {id} = useParams();

    useEffect(() => {
        if (jwtToken ===""){
            navigate("/login")
            return
        }

    },[jwtToken,navigate])

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = () => (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setMovie({
            ...movie,
            [name]: value,
        })
    }

    return (
        <div>
            <h2>Add/Edit Movie</h2>
            <p>Update the details of the movie.</p>
            <hr />
            <pre>{JSON.stringify(movie,null,3)}</pre>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name='id' value={EditMovie.id} id='id' />

                <Input
                    title={"Title"}
                    className={"form-control"}
                    type={"text"}
                    name={"title"}
                    value={movie.title}
                    onChange={handleChange("title")}
                    errorDiv={hasError("title") ? "text-danger" : "d-none"}
                    errorMsg = {"please enter title "}
                    />
            </form>
        </div>
    );
}

export default EditMovie;
