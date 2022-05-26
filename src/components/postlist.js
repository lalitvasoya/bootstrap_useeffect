import React, {useEffect, useState} from "react";
import {Table, Spinner} from 'react-bootstrap';


const PostList = ({id}) => {

    const [state, setState] = useState({
        isLoading: true,
        userList: []
    });

    const {isLoading, userList} = state;

    useEffect(()=>{
        fetchPostList();
    }, [id]);

    const fetchPostList = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(response => response.json())
        console.log(data);
        if(data.length){
            setState({
                ...state,
                userList: data,
                isLoading: false
            });
        }
    }

    return (
        <Table>
            <thead>
                <th>#</th>
                <th>User id</th>
                <th>Title</th>
                <th>Body</th>
            </thead>
            <tbody>
                {isLoading?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>:
                    userList.map((ele, index)=>{
                        return <tr>
                            <td>{ele?.id}</td>
                            <td>{ele?.userId}</td>
                            <td>{ele?.title}</td>
                            <td>{ele?.body}</td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    )
}
 
export default PostList;
