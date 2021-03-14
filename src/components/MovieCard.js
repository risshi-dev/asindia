import React from 'react'
import '../css/moviecard.css'
import Comments from './Comments'
import RatingComp from './RatingComp'
function MovieCard({data}) {


    return (
					<div>
						<div className="movieCard">
							<img className="movieimg" src={data.image} />
							<div className="movieDetails">
								<div className="movieTitle">{data.title}</div>
								<div className="desc">{data.description}</div>
							</div>
							<div className="rating">
								Rating ({data.rating} Star)
								<RatingComp rating={data.rating} />
								<Comments comments={data.comments} />
								<form className="add" onSubmit={(e) => e.preventDefault()}>
									<input
										type="text"
										placeholder="Type Here..."
										className="InputText"
									></input>
									<input
										type="submit"
										value="Add a Comment"
										className="commentsButton inputSubmit"
									></input>
								</form>
							</div>
						</div>
					</div>
				);
}

export default MovieCard
