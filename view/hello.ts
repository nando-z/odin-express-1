function hello(arg: any) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello ${arg}</title>
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
<body class="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-6">
    <nav class="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 mb-12 shadow-lg animate-fade-in">
        <div class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Logo
            </a>
            <ul class="flex space-x-8">
                <li><a href="/" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a></li>
                <li><a href="/about" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a></li>
                <li><a href="/contact" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a></li>
            </ul>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-12 backdrop-blur-sm bg-opacity-95 animate-fade-in">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Hello, ${arg}! 👋
                </h1>
                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                    Welcome to our platform. We're excited to have you here! Explore our features and discover what we have to offer.
                </p>
                
                <div class="grid md:grid-cols-2 gap-6 mt-12">
                    <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3">Getting Started</h3>
                        <p class="text-gray-600">Learn the basics and get up to speed with our platform features.</p>
                    </div>
                    <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3">Documentation</h3>
                        <p class="text-gray-600">Access detailed guides and API documentation.</p>
                    </div>
                </div>

                <div class="mt-12 flex justify-center gap-4">
                    <a href="/about" 
                       class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <a href="/contact" 
                       class="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
    `;}

export default hello;
