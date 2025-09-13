const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl text-primary tracking-wider">
            JD.
          </div>

          <p className="mt-4 text-center text-gray-500 text-sm lg:mt-0 lg:text-right dark:text-gray-400">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
