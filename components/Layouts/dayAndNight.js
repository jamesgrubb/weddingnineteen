import Link from 'next/link';
import Links from '../../utils/nav';
const DayAndNight = ({ children }) => {
	return (
		<>
			<nav className='nav'>
				<ul className='nav__items'>
					{Links.map((link, i) => {
						return (
							<li key={i} className='nav__item'>
								<Link href={link.path}>{link.name}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<main>{children}</main>
		</>
	);
};

export default DayAndNight;
