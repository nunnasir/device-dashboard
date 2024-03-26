/* eslint-disable react/prop-types */
export default function Header({ onLogOut }) {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button onClick={onLogOut} className="hover:text-gray-300">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
