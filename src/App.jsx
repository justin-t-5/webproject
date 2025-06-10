import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="container">
      <h1>Welcome to Our Community</h1>
      <div className="card-grid">
        <Card title="Community Yoga" description="Join our weekly yoga class at the park." />
        <Card title="Food Drive" description="Donate food this Saturday at the center." />
        <Card title="Coding for Teens" description="Free beginner coding workshop." />
        <Card title="Art Show" description="Local artists display their work downtown." />
        <Card title="Job Fair" description="Meet employers who are hiring now." />
        <Card title="Health Clinic" description="Free health screenings for residents." />
        <Card title="Book Club" description="Join us monthly for book discussions." />
        <Card title="Park Cleanup" description="Volunteer to clean up the local park." />
        <Card title="Gardening Tips" description="Learn how to grow vegetables at home." />
        <Card title="Dance Night" description="Live music and dancing at the rec center." />
      </div>
    </div>
  );
}

export default App;