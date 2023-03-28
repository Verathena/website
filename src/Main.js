function Main() {
    var Country = 'Nigeria';
    return (
        <>       
        <main>
            <section>
                <h2>About Us</h2>
                <p>
                We are a small team of web developers based in {Country}. We
                specialise in creating modern and responsive websites for businesses
                and individuals.
                </p>
            </section>
            <section>
                <h2>Our Services</h2>
                <ul>
                    <li className='section--li'>Web Design</li>
                    <li className='section--li'>Web Development</li>
                    <li className='section--li'>E-commerce Solutions</li>
                    <li className='section--li'>Search Engine Optimization (SEO)</li>
                </ul>
            </section>
        </main>
        </>

    )
}

export default Main;