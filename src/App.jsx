import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="container">
      <h1>Welcome to Our Community</h1>
      <div className="card-grid">
      <Card title="Community Yoga" description="Join us every week for a relaxing outdoor yoga session in the park, open to all experience levels." />
      <Card title="Food Drive" description="Support your community by donating non-perishable food items this Saturday at the local community center." />
      <Card title="Coding for Teens" description="Teens are invited to a free beginner workshop where they’ll learn the basics of computer programming." />
      <Card title="Art Show" description="Explore creative works by local artists and connect with the community at our downtown gallery exhibition." />
      <Card title="Job Fair" description="Discover career opportunities and meet with local employers who are actively seeking new talent." />
      <Card title="Health Clinic" description="Visit our free clinic offering health screenings and wellness consultations for all residents." />
      <Card title="Book Club" description="Share your thoughts and enjoy engaging discussions at our monthly book club gathering." />
      <Card title="Park Cleanup" description="Make a difference by volunteering your time to help clean and beautify our neighborhood park." />
      <Card title="Gardening Tips" description="Learn hands-on techniques and expert advice on growing fresh vegetables in your own garden." />
      <Card title="Dance Night" description="Enjoy an exciting evening of live music, social dancing, and community fun at the rec center." />
      </div>
    </div>
  );
}

export default App;