import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList'

let mockTweets = [
	{
		  name: 'Ryan Walsh'
		, body: 'My #FirstTweet'
	}
	, {
		  name: 'Ryan Walsh'
		, body: 'My #SecondTweet'
	}
	, {
		  name: 'Ryan Walsh'
		, body: 'My #ThirdTweet'
	}
];

class Main extends React.Component {
	render() {
		return (
			<div className="container">
				<TweetBox />
				<TweetsList tweets={ mockTweets }/>
			</div>
		);
	};
}

let documentReady = () => {
	ReactDOM.render(
		<Main />,
		document.getElementById('react')
	);
};

$(documentReady);