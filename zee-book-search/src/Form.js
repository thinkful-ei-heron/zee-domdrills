import React from 'react'
import './form.css'

function Form(props) {
		return(
			<form onSubmit={e => {props.handleSearch(e)}}>
				<div className='form-row1'>
					<label htmlFor='search'>Search:</label>
					<input type='text' id='search' name='search' required
						value={props.query}
						onChange={e => {props.searchChanged(e.target.value)}}
					/>
					<input type='submit' value='Submit' />
				</div>
				<div className='form-row2'>
					<label htmlFor='printType'>Print Type:</label>
					<select id='printType'
						value={props.printType}
						onChange={e => {props.printChanged(e.target.value)}}>
							<option value='all'>All</option>
							<option value='books'>Books</option>
							<option value='magazines'>Magazines</option>
					</select>
					<label htmlFor='bookType'> Book Type:</label>
					<select id='bookType'
						value={props.bookType}
						onChange={e => {props.bookChanged(e.target.value)}}>
							<option value='all'>All</option>
							<option value='ebooks'>eBooks</option>
							<option value='free-ebooks'>Free eBooks</option>
							<option value='paid-ebooks'>Paid eBooks</option>
							<option value='full'>Full text</option>
							<option value='partial'>Partial text</option>
					</select>
				</div>
			</form>
		);
}

export default Form;