import styles from './WiseWords.module.scss';
// import formStyles from '../../styles/accept.module.scss';
import Blank from '../../components/Layouts/Blank';
const WiseWords = () => {
	return (
		<div className={styles.wrapper}>
			<h2>Wise Words</h2>
			<p>
				Please send us some wise words of love, you can allways teach an
				old dog, one more trick
			</p>
			<form className={''}>
				<div className='form__group'>
					<label htmlFor='words'>Wise Words</label>
					<textarea
						className='input'
						name='words'
						id='words'
						cols='30'
						rows='10'></textarea>
				</div>
			</form>
		</div>
	);
};

export default WiseWords;

WiseWords.getLayout = function getLayout(page) {
	return <Blank>{page}</Blank>;
};
