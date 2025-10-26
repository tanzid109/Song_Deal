import React from "react";

const FAQ: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container max-w-4xl px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
                    Frequently asked questions
                </h1>

                <div className="mt-12 space-y-8">
                    {/* Question 1 */}
                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 dark:text-white">
                                How can I pay for my appointment?
                            </h1>

                            <span className="text-gray-400 bg-gray-200 rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M18 12H6"
                                    />
                                </svg>
                            </span>
                        </button>

                        <hr className="border-gray-200 dark:border-gray-700" />

                        <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
                            eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                            laboriosam recusandae facere dolorum veniam quia pariatur
                            obcaecati illo ducimus?
                        </p>
                    </div>

                    {/* Question 2 */}
                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 dark:text-white">
                                Is the cost of the appointment covered by private health
                                insurance?
                            </h1>

                            <span className="text-white bg-blue-500 rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Question 3 */}
                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 dark:text-white">
                                Do I need a referral?
                            </h1>

                            <span className="text-white bg-blue-500 rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Question 4 */}
                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 dark:text-white">
                                What are your opening hours?
                            </h1>

                            <span className="text-white bg-blue-500 rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Question 5 */}
                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button className="flex items-center justify-between w-full p-8">
                            <h1 className="font-semibold text-gray-700 dark:text-white">
                                What can I expect at my first consultation?
                            </h1>

                            <span className="text-white bg-blue-500 rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
