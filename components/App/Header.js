const Header = ({ title }) => (
  <div className="max-w-7xl mx-auto py-20 px-4 py-8 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-md font-bold text-gray-900 sm:tracking-tight">
        {title}
      </p>
    </div>
  </div>
);

export default Header;
