export default function abort404() {
    return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-9xl font-bold text-gray-800">404</h1>
        <p class="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
        <p class="text-gray-500 mt-2">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" class="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Go Back Home
        </a>
    </div>
</body>

</html>
`;
}