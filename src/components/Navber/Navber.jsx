import React, { useState } from "react";
import logo from "../../assets/logo.png";
import dollar from "../../assets/dollar.png";

export default function Navber({ money }) {
      return (
            <div className="backdrop-blur sticky top-0 z-50">
                  <div className="font-Sora flex items-center justify-between w-11/12 md:w-10/12 mx-auto py-4">
                        <div>
                              <img src={logo} alt="logo" />
                        </div>
                        <div className="flex items-center gap-8">
                              <ul className="hidden lg:flex items-center text-gray-800 gap-4">
                                    <li>
                                          <a
                                                className="py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                href="#"
                                          >
                                                Home
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                className="py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                href="#"
                                          >
                                                Players
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                className="py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                href="#"
                                          >
                                                Teams
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                className="py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                href="#"
                                          >
                                                Matches
                                          </a>
                                    </li>
                              </ul>
                              <div className="flex items-center gap-5 lg:gap-0">
                                    <div className="flex items-center gap-2 border-2 border-green-600 rounded-lg py-2 px-4">
                                          <p className="font-semibold ">
                                                {money} <span>Coin</span>
                                          </p>
                                          <img src={dollar} alt="dollar" width={22} height={22} />
                                    </div>
                                    {/* Dropdown menu Icon */}
                                    <details className="dropdown">
                                          <summary className="lg:hidden inline-flex bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-in rounded-lg py-2 px-4">
                                                <i className="fa-solid fa-bars text-lg"></i>
                                          </summary>
                                          {/* Dropdown Menu list */}
                                          <ul className="lg:hidden text-center z-10 menu dropdown-content w-80 -right-4 mt-8 bg-gray-100 rounded-lg p-3 gap-2">
                                                <li>
                                                      <a
                                                            className="py-2 px-3 rounded-lg block text-center hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                            href="#"
                                                      >
                                                            Home
                                                      </a>
                                                </li>
                                                <li>
                                                      <a
                                                            className="py-2 px-3 rounded-lg block text-center hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                            href="#"
                                                      >
                                                            Players
                                                      </a>
                                                </li>
                                                <li>
                                                      <a
                                                            className="py-2 px-3 rounded-lg block text-center hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                            href="#"
                                                      >
                                                            Teams
                                                      </a>
                                                </li>
                                                <li>
                                                      <a
                                                            className="py-2 px-3 rounded-lg block text-center hover:bg-gray-200 transition-all duration-200 ease-in-out font-semibold"
                                                            href="#"
                                                      >
                                                            Matches
                                                      </a>
                                                </li>
                                          </ul>
                                    </details>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
