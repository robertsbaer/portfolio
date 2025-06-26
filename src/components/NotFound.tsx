import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-sky-500">404</h1>
        <p className="text-2xl md:text-3xl font-light mt-4">Page Not Found</p>
        <p className="mt-4 mb-8 text-gray-400">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-sky-600 border border-transparent rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;