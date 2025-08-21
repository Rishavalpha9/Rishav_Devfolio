export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 border-t border-indigo-200 dark:border-gray-700">
      <div className="container max-w-4xl mx-auto text-center">
        <p
          className="text-gray-700 dark:text-gray-300 text-base font-semibold select-none
                     hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-default"
        >
          © {new Date().getFullYear()} Rishav Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
