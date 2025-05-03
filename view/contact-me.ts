export default function contect(){
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Me</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="h-screen flex items-center justify-center w-full bg-gray-100">
    <div class="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-4">Contact Me</h1>
      <form class="flex flex-col gap-4">
        <div>
          <label for="name" class="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
        >
          Send Message
        </button>
      </form>
      <div class="mt-4 text-gray-600 text-center">
        <p>Don't hesitate to reach out! I'm always eager to connect.</p>
      </div>
    </div>
    <footer
      class="fixed bottom-0 left-0 w-full text-gray-500 space-x-3 p-4 text-center"
    >
      <a href="/about">About</a>
      <a href="/">Home</a>
      <a href="/login">404 Page</a>
    </footer>
  </body>
</html>
    `
}