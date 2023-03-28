function Header() {
    return (
    <>
        <header>
            <h1 className='nav--h1'>Welcome to my website!</h1>
                <nav>
                    <ul className='nav--ul'> 
                        <li className='nav--li'><a href="#">Home</a></li>
                        <li className='nav--li'><a href="#">About</a></li>
                        <li className='nav--li'><a href="#">Services</a></li>
                        <li className='nav--li'><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </header>
    </>
)
}

export default Header