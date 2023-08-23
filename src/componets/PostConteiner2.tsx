

import React from 'react'
import {postApi} from '../services/PostService'
import PostItem from './PostItem'


const PostConteiner2:React.FC = () => {
    const {data : posts, error, isLoading} = postApi.useFetchAllPostsQuery(5)
  return (
    <div>
        <div className='post__list'>
            {isLoading && <h1>...идет загрузка</h1>}
            {error && <h1>ошибка загрузки</h1>}
            {/* {posts?.map(post => <PostItem post={post} />
            )} */}
        </div>
      
    </div>
  )
}

export default PostConteiner2
