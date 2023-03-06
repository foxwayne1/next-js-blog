import Image from 'next/image'
import classes from './hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/profile.jpg' alt='' width={200} height={200} />
      </div>
      <h1>Hi, I'm Wayne</h1>
      <p
        style={{ fontSize: '1rem', paddingBottom: '20px', marginTop: '-20px' }}
      >
        Im the shaggy dog looking one.
      </p>
      <hr style={{ maxWidth: '200px' }} />

      <p>
        I blog about web development - especially frontend frameworks like
        Reactjs and NextJS.
      </p>
    </section>
  )
}

export default Hero
