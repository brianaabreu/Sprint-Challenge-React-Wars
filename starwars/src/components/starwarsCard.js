import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
	margin: 0px auto;
	width: 100%;
	border-top: 1px lightblue dashed;
	border-bottom: 1px lightblue dashed;
`

const Card = styled.div`
  width: 100%;
	align-items: center;
	color: lightblue;
	margin: 25px 0px;
	padding: 15px 0px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const StarwarsCard = (props) => {

	return(
		<Space>
			<Card>
				<h1>Name: {props.data.name}</h1>

				<h3>Birth Year: {props.data.birth_year}</h3>
				<h3>Eye Color: {props.data.eye_color}</h3>
        <h3>Skin Color: {props.data.skin_color}</h3>
        <h3>Height: {props.data.height}</h3>

				<h4>This character has appeared in {props.data.films.length} film(s)</h4>
			</Card>
		</Space>
	)

}

export default StarwarsCard; 
