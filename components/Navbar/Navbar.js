import Link from 'next/link';
import NavbarStyles from '../../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={NavbarStyles.navBar}>
			<div className={NavbarStyles.logo}>
				<Link href='/'>
					<p>FakeJobs<span>.</span> </p>
				</Link>
			</div>
			<div>
                <Link href='/postfaker' className='button'>
                <button className="button slide-up">
					Post a FakeJob
                </button>
				</Link>
			
			</div>
		</nav>
	);
};

export default Navbar;
