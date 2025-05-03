function about() {
    return`
<!doctype html>
<html lang="en">

<head>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="h-screen flex flex-col items-center justify-center w-full bg-gray-100">
    <div class="text-center max-w-xl p-4">
        <h1 class="text-4xl font-bold text-gray-800">About Me Page</h1>
        <p class="text-2xl mt-3 text-gray-600">
            Learn more about who I am and what I do.
        </p>
        <div class="px-2 text-start mt-8">
            <h2 class="text-2xl mt-3 underline text-gray-800">Summary</h2>
            <p class="mt-2 text-gray-600">
                I'm a backend developer with a passion for building robust and
                scalable applications. I specialize in Node.js for backend development
                and am always eager to explore new technologies. This simple page is a
                project for my learning journey, and it serves as a test platform for
                exploring various UI/UX concepts.
            </p>
        </div>
        <div class="mt-4 flex flex-col gap-2">
            <p class="text-xl text-gray-800">
                Explore other parts of this website:
            </p>
            <ul class="flex flex-col gap-2">
                <li class="text-blue-500 hover:text-blue-700">
                    <a href="/">Home</a>
                </li>
                <li class="text-blue-500 hover:text-blue-700">
                    <a href="/contact">Contact</a>
                </li>
                <li class="text-blue-500 hover:text-blue-700">
                    <a href="/login">404 Page</a>
                </li>
            </ul>
        </div>
    </div>
</body>

</html>

`
}


export default about;