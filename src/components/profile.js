import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import PostList from './postlist';


const Profile = () => {

    const [state, setState] = useState({
        title: '',
        userId: null
    });

    const {title, body, userId} = state

    const handleOnChange = (e, key) => {
        setState({
            [key]: e.target.value
        });
    }

    const handleOnClick = (e) => {
        const data = fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: "New Post",
                body: "Body of post",
                userID: 1,
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json())
        if(data){
            setState({
                ...state,
                userId: Math.random(),
                // userId: data?.userID,
                email: '',
                name: ''
            })
        }
    }

    return (
        <>
            <InputGroup className="mb-1">
                <FormControl
                    value={title}
                    placeholder="title"
                    aria-label="title"
                    aria-describedby="basic-addon1"
                    onChange={(e) => handleOnChange(e, 'title')}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <FormControl
                    value={body}
                    placeholder="body"
                    aria-label="body"
                    aria-describedby="basic-addon1"
                    onChange={(e) => handleOnChange(e, 'body')}/>
            </InputGroup>
            <Button as="div" onClick={handleOnClick}>
                Click Me
            </Button>
            <PostList id={userId}/>
        </>
        
    )
}

export default Profile;
