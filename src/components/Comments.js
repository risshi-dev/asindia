import React from 'react'
import '../css/comments.css'
function Comments({comments}) {
    return (
					<div>
						<div>Comments</div>
						{ <div className="commentsContainer">
							{comments.map(c => <div className="commentsDiv">
								<div className="commentsUser">{c.user}</div>
								<div>{c.comment}</div>
							</div>)}
						</div> }
					</div>
				);
}

export default Comments
