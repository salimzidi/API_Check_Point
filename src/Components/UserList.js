import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState(null);
    useEffect(() => {
        //method 1
        // function fetchData() {
        //     fetch("https://jsonplaceholder.typicode.com/users")
        //         .then((res) => res.json())
        //         .then((res) => setUser(res))
        //         .catch((err) => setError(err));
        // }
        // fetchData();
        //method2
        // function fetchData() {
        //     axios
        //         .get("https://jsonplaceholder.typicode.com/users")
        //         .then((res) => setUser(res.data))
        //         .catch((err) => setError(err));
        // }
        // fetchData();
        //third method
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUser(data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
    console.log(user);

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {" "}
            {error ? (
                <Spinner animation="grow" />
            ) : (
                user && user.map((el, i) => <UserCard el={el} key={i} />)
            )}
        </div>
    );
};

export default UserList;
