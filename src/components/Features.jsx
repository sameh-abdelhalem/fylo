import accessAnywhereIcon from "../assets/icon-access-anywhere.svg";
import securityIcon from "../assets/icon-security.svg";
import collaborationIcon from "../assets/icon-collaboration.svg";
import anyFileIcon from "../assets/icon-any-file.svg";
const Features = () => {
  return (
    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      {/* Features Container */}
      <div className="container mx-auto px-6 pb-32">
        {/* first row */}
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <img src={accessAnywhereIcon} alt="" />
            </div>
            <h3 className="text-xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <img src={securityIcon} alt="" />
            </div>
            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
        {/* Second row */}
        <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item 3 */}
          <div className=" flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <img src={collaborationIcon} alt="" />
            </div>
            <h3 className="text-xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <img src={anyFileIcon} alt="" />
            </div>
            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
