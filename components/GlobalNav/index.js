import Link from 'next/link';
import Links from '../../utils/nav';
import styles from './Nav.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import cx from 'classnames';
import React from 'react';
import { colorGreen } from '../../styles/colors.module.scss';
import { FiX, FiMenu } from 'react-icons/fi';
const LinkComponent = React.forwardRef(
	(
		{ as, children, href, replace, scroll, shadow, passHref, ...rest },
		ref
	) => (
		<Link as={as} href={href} passHref={passHref} replace={replace}>
			<a {...rest} ref={ref}>
				{children}
			</a>
		</Link>
	)
);

const GlobalNav = () => {
	const [scrolled, setScrolled] = useState(null);
	const [scrolling, isScrolling] = useState(false);
	const [mobileNavOpened, setMobileNavOpened] = useState(false);
	console.log(colorGreen);
	const handleIsScrolling = () => {};
	console.log(`mobileNavOpened`, mobileNavOpened);
	const handleScrollEvent = () => {
		const offset = window.scrollY;
		if (offset > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	const router = useRouter();
	const activeRoute = router.asPath;

	useEffect(() => {
		window.addEventListener('scroll', handleScrollEvent);
		return () => window.removeEventListener('scroll', handleScrollEvent);
	}, [handleScrollEvent]);
	useEffect(() => {
		setMobileNavOpened(false);
	}, [activeRoute]);

	return (
		<>
			<nav
				className={
					scrolled ? cx(styles.nav, styles.navScrolling) : styles.nav
				}>
				<div className={styles.nav__content}>
					<LinkComponent
						href='/'
						className={styles.nav__logo}
						passHref>
						james&tina
					</LinkComponent>

					<ul
						className={cx(
							styles.nav__items,
							mobileNavOpened ? styles.nav__itemsOpen : ''
						)}
						// style={
						// 	mobileNavOpened
						// 		? {
						// 				'--position': 'fixed',
						// 				'--menu-display': 'flex',
						// 		  }
						// 		: {
						// 				'--position': 'static',
						// 				'--menu-display': 'none',
						// 		  }
						// }
					>
						{Links.map((link, i) => {
							return (
								<li
									key={i}
									className={
										router.asPath === link.path
											? cx(
													styles.nav__item,
													styles.nav__itemActive
											  )
											: styles.nav__item
									}>
									<Link href={link.path}>{link.name}</Link>
								</li>
							);
						})}
					</ul>
					<button
						style={{ fontSize: '1.4rem' }}
						onClick={() => setMobileNavOpened(!mobileNavOpened)}
						className={styles.nav__toggle}>
						{mobileNavOpened ? (
							<FiX color={colorGreen} />
						) : (
							<FiMenu color={colorGreen} />
						)}
					</button>
				</div>
			</nav>
		</>
	);
};

export default GlobalNav;
