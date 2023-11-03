import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div>📝 About Page</div>
      <br />
      <Link to={'/'} className="hover:text-sky-300">
        🛫 Home
      </Link>
    </div>
  )
}

export default About
