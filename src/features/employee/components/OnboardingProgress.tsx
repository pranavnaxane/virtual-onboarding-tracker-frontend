import React from "react";
import type { OnboardingProgressProps } from "../types/employee.types";

export const OnboardingProgress: React.FC<OnboardingProgressProps> = ({
  progress,
  employee,
}) => {
  const onboardingSteps = [
    {
      id: 1,
      title: "Welcome & Introduction",
      description: "Complete welcome orientation and company overview",
      completed: progress >= 20,
    },
    {
      id: 2,
      title: "IT Setup & Security",
      description: "Set up accounts, devices, and complete security training",
      completed: progress >= 40,
    },
    {
      id: 3,
      title: "Department Introduction",
      description: "Meet your team and understand department processes",
      completed: progress >= 60,
    },
    {
      id: 4,
      title: "Role-Specific Training",
      description: "Complete job-specific training and certifications",
      completed: progress >= 80,
    },
    {
      id: 5,
      title: "Final Review",
      description: "Complete onboarding assessment and feedback",
      completed: progress >= 100,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getProgressColor = () => {
    if (progress >= 80) return "text-green-600";
    if (progress >= 60) return "text-blue-600";
    if (progress >= 40) return "text-yellow-600";
    return "text-orange-600";
  };

  const getProgressGradient = () => {
    if (progress >= 80) return "from-green-500 to-green-600";
    if (progress >= 60) return "from-blue-500 to-blue-600";
    if (progress >= 40) return "from-yellow-500 to-yellow-600";
    return "from-orange-500 to-orange-600";
  };

  return (
    <div className="theme-card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Onboarding Progress</h2>
          <p className="text-gray-600 text-sm mt-1">Track your journey to becoming fully onboarded</p>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-bold ${getProgressColor()}`}>
            {progress}%
          </div>
          <p className="text-sm text-gray-500">Complete</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <span className="font-medium">Overall Progress</span>
          <span>Started: {formatDate(employee.startDate)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-4 rounded-full transition-all duration-700 bg-gradient-to-r ${getProgressGradient()}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Onboarding Checklist</h3>
        {onboardingSteps.map((step) => (
          <div key={step.id} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              {step.completed ? (
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-sm">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white">
                  <span className="text-sm text-gray-500 font-medium">{step.id}</span>
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4
                  className={`font-semibold text-lg ${
                    step.completed ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {step.title}
                </h4>
                <div className="flex-shrink-0">
                  {step.completed ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Pending
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mt-2 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {progress < 100 && (
        <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                {progress < 20 && "Start with the welcome orientation to begin your onboarding journey."}
                {progress >= 20 && progress < 40 && "Complete your IT setup and security training."}
                {progress >= 40 && progress < 60 && "Meet with your team and learn about department processes."}
                {progress >= 60 && progress < 80 && "Focus on role-specific training and certifications."}
                {progress >= 80 && progress < 100 && "Complete your final onboarding assessment."}
              </p>
            </div>
          </div>
        </div>
      )}

      {progress >= 100 && (
        <div className="mt-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">🎉 Onboarding Complete!</h4>
              <p className="text-sm text-green-700 leading-relaxed">
                Congratulations! You have successfully completed your onboarding process. 
                Welcome to the team!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
