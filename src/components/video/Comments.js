import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendComment } from './../../redux/actions/CommentActions';
import user from './resources/user.png';
import write from './resources/write.png';
import './resources/comments.css';

export default function Comments(props) {
  const [comment, setComment] = useState();
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const prevComments = useRef(props.video.comments);

  useEffect(() => {
    console.log(prevComments, props);
    if (props && prevComments.current.length !== props.video.comments.length) {
      console.log("FRISSCOMMNET");
      setComment("");
    }
  }, [props]);
  console.log(props.video);

  const sendNewComment = () => {
    sendComment(props.video.id, comment, dispatch);
  };

  return <div className='text-light'>
    
    {/* CÍMSOR */}
    <h4>Kommentek</h4>

    {/* KOMMENTEK */}
    {props.video.comments.map(comment => (
      <div className="media border mb-3">
        <img src={user} alt={comment.user.username + ' profilképe'} className='comment-icon m-2' />
        
        <div className='media-body'>
          <h5 className='mt-2'>{comment.user.username}</h5>
          {comment.comment}
        </div>
      </div>
    ))}

    {/* KOMMENT ÍRÁS  */}
    <div className="media border mb-3">
      <img src={write} alt={'komment írása'} className='comment-icon m-2' />
      
      {token.fetched && "jwt" in token.token 
      ? (
        <div className='media-body'>
          <h5 className='mt-2'>Írj kommentet!</h5>
          <textarea className='form-control mb-2' onChange={(e) => setComment(e.target.value)} value={comment} ></textarea>
          <button className='btn btn-info mb-2' onClick={sendNewComment}>Írás</button>
        </div>  
      ) 
      : (
        <div className='media-body'>
          <h5 className='mt-2'>Kommenteléshez jelentkezz be!</h5>
        </div>
      )}
      
    </div>
    
    
  </div>;
}

