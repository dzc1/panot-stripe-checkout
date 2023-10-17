import { formStore } from "../stores/formStore";

export const Form = () => {
  // Use Zustand's "useStore" hook to access the store
  // Use Zustand's "useStore" hook to access the store
  const { formSteps } = formStore();
  return (
    <div>
      Form
      <p>{formSteps.step}</p>
      <section className="">
        <div className="container mx-auto px-4">
          <div className="pt-16 pb-24 md:max-w-3xl mx-auto bg-white rounded-3xl">
            <div className="md:max-w-md mx-auto">
              <div className="mb-10 text-center"></div>
              <form>
                <div className="flex flex-wrap -m-3">
                  <div className="w-full p-3">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      for="signUpLightReverseInput3-1"
                    >
                      Full Name
                    </label>
                    <input
                      className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none border border-gray-200 focus:ring-4 focus:ring-blue-200 rounded-full"
                      id="signUpLightReverseInput3-1"
                      type="text"
                      placeholder="First and last name"
                    />
                  </div>
                  <div className="w-full p-3">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      for="signUpLightReverseInput3-2"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none border border-gray-200 focus:ring-4 focus:ring-blue-200 rounded-full"
                      id="signUpLightReverseInput3-2"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="w-full p-3">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      for="signUpLightReverseInput3-3"
                    >
                      Password
                    </label>
                    <input
                      className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none border border-gray-200 focus:ring-4 focus:ring-blue-200 rounded-full"
                      id="signUpLightReverseInput3-3"
                      type="password"
                      placeholder="***************"
                    />
                  </div>
                  <div className="w-full p-3">
                    <div className="flex flex-wrap items-center justify-between -m-3">
                      <div className="w-auto p-3">
                        <div className="flex items-center">
                          <input
                            className="opacity-0 absolute h-6 w-6"
                            id="signUpLightReverseCheckbox3-1"
                            type="checkbox"
                          />
                          <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-white border border-gray-200 border-neutral-200 rounded-md">
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <label
                            className="text-gray-500 font-bold"
                            for="signUpLightReverseCheckbox3-1"
                          >
                            <span>By signing up, I agree to the </span>
                            <a
                              className="text-blue-500 hover:text-blue-600"
                              href="#"
                            >
                              Terms &amp; Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-3">
                    <div className="flex flex-wrap md:justify-end -m-2">
                      <div className="w-full p-2">
                        <a
                          className="block px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="#"
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-3">
                    <p className="text-gray-500 text-center font-bold">
                      <span>Already have an account? </span>
                      <a
                        className="text-blue-500 hover:text-blue-600 font-bold"
                        href="#"
                      >
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
