import React from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps{
    post : IPost;
    update : (post : IPost) => void;
    remove : (post : IPost) => void
}

const PostItem:React.FC<PostItemProps> = ({post, remove, update}) => {

    const handleRemove = (event : React.MouseEvent) => {
        event.stopPropagation();
        remove(post)
    }

    const handleUpdate = (event : React.MouseEvent) => {
        event.stopPropagation();
        const title = prompt('Измените заголовок поста') || ''
        update({...post,title});
    }

  return (
    <div onClick={handleUpdate} className='post' key={post.id}>
        <h2>{post.id} {post.title}</h2>                    
        <button onClick={handleRemove}>Delete</button>                          
    </div>
  )
}

export default PostItem
