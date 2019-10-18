import React from 'react'
import Result from './Result'

// Generates list of results
function List(props) {
	if (props.loading) return (<h2>Loading...</h2>); // Display loading indicator

	const results = props.books.map((item, index) => {
		const book = {
			title: item.volumeInfo.title,
			subtitle: item.volumeInfo.subtitle,
			thumb: '',
			author: item.volumeInfo.authors,
			year: item.volumeInfo.publishedDate,
			blurb: '',
			link: item.volumeInfo.previewLink
		}
		if (item.volumeInfo.imageLinks) book.thumb = item.volumeInfo.imageLinks.thumbnail;
		if (item.searchInfo) book.blurb = item.searchInfo.textSnippet;

		return( <Result
			key={`res-${index}`}
			title={book.title}
			subtitle={book.subtitle}
			thumb={book.thumb}
			author={book.author}
			year={book.year}
			blurb={book.blurb}
			link={book.link}
		/>);
	});

	return (
		<ul className='resultList'>
			{results}
		</ul>
	);
}

export default List;