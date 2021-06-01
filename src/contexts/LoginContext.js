import React, { useState, createContext } from 'react'

export const LoginContext = createContext()

const LoginContextProvider = (props) => {

    const [data, setData] = useState('')

    const resetData = () => {
        setData('')
    }

    const changeData = (token, id, title, username, email, designation, contact, photoURL) =>
        setData({
            token: token,
            id: id,
            username: username,
            email: email,
            title: title,
            designation: designation,
            contact: contact,
            photoURL: photoURL
        });

    function signInGoogle() {
        window.open("http://localhost:5000/user/google", "_self");
        // fetch('http://localhost:5000/user/google', {
        //     method: 'GET',
        //     credentials: "include",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }
        //     // body: JSON.stringify({
        //     //     email: email,
        //     //     password: password
        //     // })
        // })
    }

    function signInLocal(email, password) {
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            // .then(Json => console.log(Json))
            .then(data => {
                if (data.status === 0) {
                    alert(data.message)
                }
                else {


                    // Update Login Context Data
                    changeData(data.token, data.id, data.title, data.username, data.email, data.designation, data.contact, '')

                }
            })
            .catch(err => console.log(err))
    }


    return (
        <LoginContext.Provider value={{ data, changeData, signInLocal, signInGoogle, resetData }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider