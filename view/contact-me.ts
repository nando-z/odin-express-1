function contact() {
    return `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact</title>
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

<body class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
    <div class="max-w-4xl mx-auto animate-fade-in">
        <div class="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Get in Touch
                </h1>
                <p class="text-2xl text-gray-600 font-light">
                    We'd love to hear from you
                </p>
            </div>

            <form class="space-y-6 mt-8">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="name">
                            Name
                        </label>
                        <input type="text" id="name" name="name" 
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Your name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
                            Email
                        </label>
                        <input type="email" id="email" name="email"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="your@email.com">
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" for="subject">
                        Subject
                    </label>
                    <input type="text" id="subject" name="subject"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="What is this about?">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" for="message">
                        Message
                    </label>
                    <textarea id="message" name="message" rows="6"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Your message here..."></textarea>
                </div>

                <div class="flex justify-between items-center">
                    <a href="/" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        ← Back to Home
                    </a>
                    <button type="submit"
                        class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        Send Message
                    </button>
                </div>
            </form>

            <div class="mt-12 pt-8 border-t border-gray-200">
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 class="font-medium text-gray-800">Email</h3>
                        <p class="text-gray-600 mt-1">contact@example.com</p>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-800">Phone</h3>
                        <p class="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-800">Location</h3>
                        <p class="text-gray-600 mt-1">San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `
}

export default contact;