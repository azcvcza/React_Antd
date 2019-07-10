import React, {Component} from 'react';
import {Card} from 'antd';

export default class PuzzleCardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardList: [
				{
					id: 1,
					setup: 'did you hear the people sing',
					punchline: 'laurm ispum laurm ispum'
				},
				{
					id: 2,
					setup: 'did you hear the empire sing',
					punchline: 'laurm ispum laurm ispum'
				}
			]
		}
	}
	render() {
		return (
		  <div>
			{
			  this.state.cardList.map(card => {
				return (
				  <Card key={card.id}>
					<div>Q: {card.setup}</div>
					<div>
					  <strong>A: {card.punchline}</strong>
					</div>
				  </Card>
				);
			  })
			}
		  </div>
		);
	  }
}
