export default function home() {
    return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nando</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body
    class="h-screen flex flex-col items-center justify-center w-full bg-gray-100"
  >
    <div class="text-center max-w-xl p-4">
      <h1 class="text-4xl font-bold text-gray-800">Welcome to Nando's!</h1>
      <p class="text-2xl mt-3 text-gray-600">
        This is a simple Node.js server for Odin Project .
      </p>
      <div class="px-2 text-start mt-8">
        <h2 class="text-2xl mt-3 underline text-gray-800">
          Explore our Website
        </h2>
        <p class="mt-2 text-gray-600">
          Learn more about who we are and what we do.
        </p>
      </div>
      <div class="mt-4 flex flex-col gap-2">

        <p class="text-xl text-gray-800">
          Explore other parts of this website:
        </p>
        <ul class="flex flex-col gap-2">
          <li class="text-blue-500 hover:text-blue-700">
            <a href="/about">About</a>
            
          </li>
          <li class="text-blue-500 hover:text-blue-700">
            <a href="/contact">Contact</a>
          </li>
          <li class="text-blue-500 hover:text-blue-700">
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>

    `;
}
