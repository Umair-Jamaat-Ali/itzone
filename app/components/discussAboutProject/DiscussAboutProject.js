import React from "react";
import FormSec from "../forms/Forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function DiscussAboutProject() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-red-600">Tell us about your project</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What your immediate business goals?</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <div className="absolute left-1 top-1 h-5 w-5 text-green-500"><FontAwesomeIcon icon={faCheckCircle} /></div>

                                        Digital Transformation / BPO
                                    </dt>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <div className="absolute left-1 top-1 h-5 w-5 text-green-500"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        Modernise Legacy Systems & Technology
                                    </dt>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <div className="absolute left-1 top-1 h-5 w-5 text-green-500"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        Develop Robust Apps & Products
                                    </dt>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <div className="absolute left-1 top-1 h-5 w-5 text-green-500"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        Unlock Value With Data & Analytics
                                    </dt>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <div className="absolute left-1 top-1 h-5 w-5 text-green-500"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        Scale or Build In-house Tech Teams
                                    </dt>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <div className="absolute left-1 top-1 h-5 w-5 text-green-500"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        Create Stunning Digital Experience
                                    </dt>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <FormSec />
                </div>
            </div>
        </div>

    );
}