import Card from './Card'

const homeMenu = [
  {
    title: '🔗 Home & About transition (Link)',
    destination: '/about',
    linkLabel: 'About',
  },
  {
    title: '🧑‍🍳 Recipe app (useParams) ',
    destination: '/recipe',
    linkLabel: 'Recipe app',
  },
  {
    title: '🔐 SingUp (useNavigation) ',
    destination: '/signup',
    linkLabel: 'Signup',
  },
  {
    title: '🔐 Login (redirect) ',
    destination: '/login',
    linkLabel: 'Login',
  },
  {
    title: '🛒 Shopping website (Nested Routes)',
    destination: '/shopping',
    linkLabel: 'Go shopping',
  },
]

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl">🏠 Welcome to Sample website</h1>

      <div className="h-10" />

      <div className="grid grid-cols-3 gap-4">
        {homeMenu.map((menu, i) => (
          <Card key={i} title={menu.title} linkLabel={menu.linkLabel} destination={menu.destination} />
        ))}
      </div>
    </div>
  )
}

export default Home
