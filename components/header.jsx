import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import { ModeToggle } from "./headerclient";

const Header = async () => {
    await checkUser();
    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto px-2 py-2 flex items-center justify-between">
                <Link href="/">
                <div className="flex items-center">
                        <Image
                            src={"/logo-sm.png"} // Mobile logo
                            alt="Welth Logo"
                            width={100}
                            height={30}
                            className="h-8 w-auto object-contain md:hidden" 
                        />
                        <Image
                            src={"/logo (3).png"} // Desktop logo
                            alt="Welth Logo"
                            width={200}
                            height={60}
                            className="h-16 w-auto object-contain hidden md:inline" 
                        />
                    </div>
                </Link>

                {/* Navigation Links - Different for signed in/out users */}
                <div className="hidden md:flex items-center space-x-8">
                    <SignedOut>
                        <a href="/features" className="text-gray-600 hover:text-blue-600 cursor-pointer">
                            Features
                        </a>
                        <a
                            href="/testimonials"
                            className="text-gray-600 hover:text-blue-600 cursor-pointer"
                        >
                            Testimonials
                        </a>
                    </SignedOut>
                </div>


                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <SignedIn>
                {/* <ModeToggle /> */}
                        <Link
                            href="/dashboard"
                            className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                        >
                            <Button variant="outline" className='cursor-pointer'>
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>
                        <a href="/transaction/create">
                            <Button className="flex items-center gap-2 cursor-pointer">
                                <PenBox size={18} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </a>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline" className='cursor-pointer'>Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
};

export default Header;
