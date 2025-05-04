export default function home() {
    return `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
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
        .hero-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
    </style>
</head>

<body class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 hero-pattern">
    <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto animate-fade-in">
            <div class="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
                <div class="text-center mb-12">
                    <h1 class="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Welcome Home
                    </h1>
                    <p class="text-2xl text-gray-600 font-light">
                        Your gateway to modern web development
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 mt-12">
                    <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <span class="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
                            Features
                        </h2>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-center">
                                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Modern Design
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Responsive Layout
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Clean Code
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <span class="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
                            Quick Links
                        </h2>
                        <div class="space-y-4">
                            <a href="/about" class="block p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-gray-200">
                                <h3 class="font-medium text-gray-800">About</h3>
                                <p class="text-sm text-gray-600">Learn more about us</p>
                            </a>
                            <a href="/contact" class="block p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-gray-200">
                                <h3 class="font-medium text-gray-800">Contact</h3>
                                <p class="text-sm text-gray-600">Get in touch</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <a href="/about" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        Get Started
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `
}
