
import "./Card.css";
const QuoteCard = ({ quote, author, jobTitle, company, profileImage }) => (
	<div className='quote-card'>
		<img
			className='profile-image'
			src={profileImage}
			alt={`${author}'s profile`}
		/>
		<p className='quote-text'>{quote}</p>
		<p className='quote-author'>
			{author}, <span className='job-title'>{jobTitle}</span> at{" "}
			<span className='company'>{company}</span>
		</p>
	</div>
);

export default QuoteCard;
