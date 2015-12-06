import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList'

class Main extends React.Component {
	constructor( props ) {
		super(props);
		this.state = { tweetsList: [] };
	}

	addTweet( tweetToAdd ) {
		$.post('/tweets', { body: tweetToAdd })
			.success( savedTweet => {
				console.log(savedTweet)
				let newTweetsList = this.state.tweetsList;
				newTweetsList.unshift(savedTweet);

				this.setState({
					tweetsList: newTweetsList
				});
			})
			.error( err => console.log(err));
	}

	componentDidMount() {
		$.ajax('/tweets')
			.success( tweets => this.setState({ tweetsList: tweets }))
			.error( err => console.log(err));
	}

	render() {
		return (
			<div className="container">
				<TweetBox sendTweet={ this.addTweet.bind(this) } />
				<TweetsList tweets={ this.state.tweetsList }/>
			</div>
		);
	}
}

let documentReady = () => {
	let reactNode = document.getElementById('react');

	if (reactNode) {
		ReactDOM.render(<Main />, reactNode);
	}
};

$(documentReady);