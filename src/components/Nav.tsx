import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <div className="navbar sticky top-0 z-5 bg-base-100 shadow-sm">
            <div className="navbar-start pl-32">
                <img src={Logo} alt='Site-Logo Small'/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-pink-500'><a>Home</a></li>
                    <li><a>Technologies</a></li>
                    <li><a>Projects</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4 pr-32">
                <button className="btn rounded-full btn-ghost">Sign In</button>
                <button className="btn rounded-full btn-active btn-secondary">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;