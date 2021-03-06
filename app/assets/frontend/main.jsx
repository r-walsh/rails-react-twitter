import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList'

class Main extends React.Component {
	constructor( props ) {
		super(props);
		this.state = { tweetsList: [] };
	}

	formattedTweets( tweets ) {
		let formattedList = tweets.map( tweet => {
			tweet.formattedDate = moment(tweet.created_at).fromNow();
			return tweet;
		});
		return {
			tweetsList: formattedList
		}
	}

	addTweet( tweetToAdd ) {
		$.post('/tweets', { body: tweetToAdd })
			.success( savedTweet => {
				let newTweetsList = this.state.tweetsList;
				newTweetsList.unshift(savedTweet);

				this.setState(this.formattedTweets(newTweetsList));
			})
			.error( err => console.log(err));
	}

	componentDidMount() {
		$.ajax('/tweets')
			.success( tweets => this.setState(this.formattedTweets(tweets)))
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