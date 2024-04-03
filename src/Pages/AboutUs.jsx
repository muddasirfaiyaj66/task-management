import Container from "../Components/Container";



const AboutUs = () => {
  return (
  <div className="min-h-screen p-8 bg-cover bg-[url('/wave.png')] bg-opacity-60  object-cover bg-no-repeat bg-center shadow-2xl overflow-hidden rounded-xl ">
    <Container>

    <div className="container mx-auto px-8 py-8 bg-white bg-opacity-95 rounded-xl shadow-2xl mt-5 ">
      <h1 className="text-3xl font-bold mb-4">About Our Task Management Website</h1>
      <p className="text-lg mb-2">Welcome to our task management website! We aim to provide an efficient and user-friendly platform for organizing your tasks and improving your productivity.</p>
      <p className="text-lg mb-2">Key features of our website include:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Creating tasks with deadlines and priorities</li>
        <li>Organizing tasks into categories or projects</li>
        <li>Marking tasks as complete and tracking progress</li>
        <li>Collaborating with team members on shared tasks</li>
      </ul>
      <p className="text-lg mb-4">Our mission is to help individuals and teams manage their workload effectively and achieve their goals. Whether you're a student, professional, or business owner, our task management website is designed to simplify your task management process.</p>
      <p className="text-lg">Thank you for choosing our platform!</p>
    </div>
    </Container>

  </div>
  );
};

export default AboutUs;
