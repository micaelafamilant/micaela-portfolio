function Header() {
    
    return (
      <header className="bg-cream text-charcoal py-4 px-6 shadow-sm">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-charcoal font-serif hover:cursor-pointer" href="#" >Micaela Familant</h1>


            <ul className="flex space-x-6 font-sans text-charcoal font-medium">
                <li href="#" className="hover:text-softGreen cursor-pointer">Home</li>
                <li href="#" className="hover:text-softGreen cursor-pointer">About</li>
                <li href="#" className="hover:text-softGreen cursor-pointer">Projects</li>
                <li href="#" className="hover:text-softGreen cursor-pointer">How I Work</li>
                <li href="#" className="hover:text-softGreen cursor-pointer">Contact</li>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  