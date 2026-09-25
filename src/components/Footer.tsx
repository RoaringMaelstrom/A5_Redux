import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-[12px] text-gray-500 px-16 py-10">
        <aside>
            <img src={Logo} alt="Site-Logo-Small"/>
            <p>
            Curated tools, technologies, and resource for developers building
            <br />
            modern software.
            </p>
            <div className='flex py-4 gap-x-4 text-gray-700 font-semibold'>
                <a href="">Github</a>
                <a href="">Twitter</a>
                <a href="">LinkedIn</a>
            </div>
        </aside>
        <nav>
            <h6 className="font-bold text-gray-800">PRODUCT</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Technologies</a>
            <a className="link link-hover">Projects</a>
        </nav>
        <nav>
            <h6 className="font-bold text-gray-800">COMPANY</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
        </nav>
        <nav>
            <h6 className="font-bold text-gray-800">LEGAL</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
        </nav>
        </footer>
    );
};

export default Footer;