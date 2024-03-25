## Command to run:

<li>
Start the Vite Project:

    npm create vite@latest

</li>

<li>
Go to the project folder:

    cd {folderName}

</li>

<li>
Install the package.json file:
    
    npm install

</li>

<li>
Install tailwind:

    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p

</li>

<li>
Go to index.css file and paste it:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

</li>

<li>
Go to tailwind.config.js file and replace content with this:

    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

],

</li>

<li>
Install redux dependencies:
    
    npm install @reduxjs/toolkit

    npm install react-redux

</li>
