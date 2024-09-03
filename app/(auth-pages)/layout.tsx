import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default async ({ children }: LayoutProps) => (
  <div className="flex-1 w-full bg-gradient-to-b from-blue-100 to-white flex flex-col justify-center items-center p-4">

    {children}

    <div className="mt-8 text-center text-sm text-gray-600 max-w-md">
      <p className="mb-2">
        Create professional resumes and cover letters with AI-powered suggestions, formatting optimization, and easy
        customization.
      </p>
    </div>
  </div>
);
