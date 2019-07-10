import React, {Component} from 'react';
import {Card,Button} from 'antd';

export default class PuzzleCardPage extends Component {
	constructor(props) {
		super(props);
		this.counter = 100;
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
	addNewCards = () => {
		this.setState(prevState => {
			const prevCardList = prevState.cardList;
			this.counter += 1;
			const card = {
				id: this.counter,
				setup: 'Lorem ipsum dolor sit amet',
				punchline: 'sed do eiusmod tempor'
			};
			return {
				cardList: prevCardList.concat(card),
			}
		})
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
				<div>
					<Button onClick={this.addNewCards}>add card</Button>
				</div>
			</div>
		);
	}
}
