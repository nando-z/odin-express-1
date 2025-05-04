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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
    </style>
</head>

<body class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
    <div class="w-full max-w-2xl animate-fade-in">
        <div class="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
            <h1 class="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                About Me
            </h1>
            <p class="text-2xl mt-4 text-gray-600 font-light leading-relaxed">
                Learn more about who I am and what I do.
            </p>
            
            <div class="mt-10">
                <h2 class="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <span class="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
                    Summary
                </h2>
                <p class="mt-4 text-gray-600 leading-relaxed text-lg">
                    I'm a backend developer with a passion for building robust and
                    scalable applications. I specialize in Node.js for backend development
                    and am always eager to explore new technologies. This simple page is a
                    project for my learning journey, and it serves as a test platform for
                    exploring various UI/UX concepts.
                </p>
            </div>

            <div class="mt-12">
                <p class="text-xl font-medium text-gray-800 mb-4">
                    Explore other sections:
                </p>
                <div class="flex gap-4">
                    <a href="/" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        Home
                    </a>
                    <a href="/contact" class="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                        Contact
                    </a>
                    <a href="/login" class="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                        404 Page
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`
}

export default about;