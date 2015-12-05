import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList'

let mockTweets = [
	{
		  name: 'Ryan Walsh'
		, body: 'My #FirstTweet'
		, id: 1
	}
	, {
		  name: 'Ryan Walsh'
		, body: 'My #SecondTweet'
		, id: 2
	}
	, {
		  name: 'Ryan Walsh'
		, body: 'My #ThirdTweet'
		, id: 3
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