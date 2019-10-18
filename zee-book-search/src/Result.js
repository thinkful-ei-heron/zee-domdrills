import React from 'react'
import './Result.css'

function Result(props) {
	const blurb = `${props.blurb}`;

	return (
		<li>
			<img src={props.thumb} alt={`${props.title} thumbnail`} className='thumbnail' />
			<div className='titleBlock'>
				<a href={props.link}><h3>{props.title}</h3></a>
				{(props.subtitle) && <h4>{props.subtitle}</h4>}
				<p className='authorLine'><i>
					{(props.author) && <span>{props.author}, </span>}
					<span>{props.year}</span></i></p>
				{(props.blurb) && <p className='blurb' dangerouslySetInnerHTML={{__html: blurb}}></p>}
			</div>
		</li>
	);
}

export default Result;