import classes from './hero.module.css';
import Image from 'next/image'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/varun.jpg" alt="An image showing varun" width={300} height={300} />
            </div>
            <h1>Hi, I'm Varun</h1>
            <p>I blog about anythign that is new and amzing</p>
        </section>
        );
}

export default Hero;