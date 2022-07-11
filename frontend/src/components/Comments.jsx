import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar } from '@nextui-org/react';
import { useState, useRef } from 'react';
import commentsAction from '../redux/actions/commentsAction';
import toast from 'react-hot-toast';

function Comments({ data }) {
    const user = useSelector(store => store.usersReducer.user)
    const dispatch = useDispatch()
    const [itinerary, setItinerary] = useState(data.data)
    const [input, setInput] = useState()
    const [modify, setModify] = useState()
    const inputTextElement = useRef(null)

    async function addComment(event) {
        const commentData = {
            itineraryId: data.data._id,
            comment: input,
        }
        const res = await dispatch(commentsAction.addComment(commentData))
        setItinerary(res.response.newComment)
        inputTextElement.current.innerText = ""

        if (res.success) {
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }

    }

    function handleInputText(event) {
        setInput(event.currentTarget.textContent)
    }

    async function modifyComment(event) {

        const commentData = {
            commentID: event.target.id,
            comment: modify,
        }
        const res = await dispatch(commentsAction.modifyComment(commentData))

        setItinerary(res.data.response.newComment)
        setModify(res.data)

        if (res.data.success) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }

    }

    async function deleteComment(event) {
        const res = await dispatch(commentsAction.deleteComment(event.target.id))
        setItinerary(res.data.response.deleteComment)

        if (res.data.success) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }

    }

    return (

        <div className="commentsContainer">
            <h3>Leave your message</h3>
            {itinerary.comments?.map(comment =>
                <div key={comment._id}>
                    {comment.userId?._id !== user?.id ?
                        <div className="commentBox" >
                            <Avatar
                                css={{ size: "1rem", alignSelf: "flex-start", marginRight: "1vw" }}
                                src={comment.userId.image}
                                zoomed
                                bordered
                                color='gradient'
                            />
                            <div
                                className="inputComment"
                                style={{ color: "white" }} >
                                <h5 className='nameComment'>{comment.userId.firstName}</h5>
                                <div className='comment'>{comment.comment}</div>
                            </div>

                        </div>
                        :
                        <div className="commentBox">
                            <Avatar
                                css={{ size: "1rem", alignSelf: "flex-start", marginRight: "1vw" }}
                                src={comment.userId.image}
                                zoomed
                                bordered
                                color='gradient'
                            />
                            <div className="inputComment">
                                <h5 className='nameComment'>{comment.userId.firstName}</h5>

                                <div style={{ color: "black", borderRadius: "15px", borderColor: "grey" }} onInput={(event) => setModify(event.currentTarget.textContent)} suppressContentEditableWarning={true} contentEditable >
                                    <div className='comment'>

                                        {comment.comment}
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                                    <button id={comment._id} onClick={modifyComment} className="button buttonCard buttonComment">
                                        Edit
                                    </button>
                                    <button id={comment._id} onClick={deleteComment} className="button buttonCard buttonComment">
                                        Delete
                                    </button>
                                </div>

                            </div>

                        </div>

                    }
                </div>

            )}

            {user ?
                <div className="commentBox" >

                        <Avatar
                            css={{ size: "1rem", alignSelf: "flex-start", marginRight: "1vw" }}
                            src={user?.image}
                            zoomed
                            bordered
                            color='gradient'
                        />
                        <div className="inputComment" ref={inputTextElement} type="text" style={{ color: "black", backgroundColor: "whitesmoke" }} onInput={handleInputText} suppressContentEditableWarning={true} contentEditable>
                        </div>

                    <button onClick={addComment} className='button buttonCard buttonComment' style={{ marginLeft: "1rem" }}>Cargar</button>
                </div> :
                <p style={{ color: "#83F6E1" }}> You must to be logged in to post a comment</p>
            }
        </div >

    )


}

export default Comments