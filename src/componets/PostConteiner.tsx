

import React, { useEffect, useState } from 'react'
import {postApi} from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPost'


const PostConteiner:React.FC = () => {
    const [limit, setLimit] = useState(100)
    const {data : posts, error, isLoading} = postApi.useFetchAllPostsQuery(limit)
    const [createPost,{}] = postApi.useCreatePostMutation()
    const [updatePost,{}] = postApi.useUpdatePostMutation()
    const [deletePost,{}] = postApi.useDeletePostMutation()

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3)
    //     },1000)
    // },[])

    const handleCreate = async () => {
        const title = prompt('Введите заголовок')
        await createPost({title, body : title} as IPost)
    }

    const handleUpdate = async (post : IPost) => {
        await updatePost(post)
    }

    const handleDelete = async(post : IPost) => {
        await deletePost(post)
    }

  return (
    <div>
        <div className='post__list'>
            <button onClick={handleCreate}>Add post</button>
            {isLoading && <h1>...идет загрузка</h1>}
            {error && <h1>ошибка загрузки</h1>}
            {posts?.map(post => 
                <PostItem 
                    post={post} 
                    update={handleUpdate}
                    remove={handleDelete}
                />
            )}
        </div>
      
    </div>
  )
}

export default PostConteiner
