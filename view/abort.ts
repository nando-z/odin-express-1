export default function abort404() {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
        .floating { animation: float 6s ease-in-out infinite; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
    </style>
</head>

<body class="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center p-6">
    <div class="w-full max-w-4xl animate-fade-in">
        <div class="bg-white rounded-2xl shadow-xl p-12 text-center backdrop-blur-sm bg-opacity-95">
            <div class="floating mb-8">
                <h1 class="text-[150px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none">
                    404
                </h1>
            </div>
            
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p class="text-xl text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved to a different location.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/" 
                   class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                </a>
                <a href="/contact" 
                   class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                </a>
            </div>
        </div>
    </div>
</body>
</html>
`;}