import './App.css';
import Cards from './Cards';

function App() {
  return (
    <div className="container">
      <h1>Welcome to Our Community</h1>
      <div className="card-grid">
      <Cards title="Community Yoga" description="Join us every week for a relaxing outdoor yoga session in the park, open to all experience levels." />
      <Cards title="Food Drive" description="Support your community by donating non-perishable food items this Saturday at the local community center." />
      <Cards title="Coding for Teens" description="Teens are invited to a free beginner workshop where they’ll learn the basics of computer programming." />
      <Cards title="Art Show" description="Explore creative works by local artists and connect with the community at our downtown gallery exhibition." />
      <Cards title="Job Fair" description="Discover career opportunities and meet with local employers who are actively seeking new talent." />
      <Cards title="Book Club" description="Share your thoughts and enjoy engaging discussions at our monthly book club gathering." />
      <Cards title="Park Cleanup" description="Make a difference by volunteering your time to help clean and beautify our neighborhood park." />
      <Cards title="Gardening Tips" description="Learn hands-on techniques and expert advice on growing fresh vegetables in your own garden." />
      <Cards title="Dance Night" description="Enjoy an exciting evening of live music, social dancing, and community fun at the rec center." />
      </div>
    </div>
  );
}

export default App;
