import * as React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import {
  EmploymentFormsHeader,
  EmploymentFormsFooter,
  // Livechat,
} from '@/components/layout';

interface EmploymentFormsLayoutProps {
  children: React.ReactNode;
}

const routesWithSteps = [
  '/request-pos',
];

interface LayoutPillarProps {
  className?: string;
}

const LayoutPillar: React.FunctionComponent<LayoutPillarProps> = ({
  className,
}) => {
  return (
    <div
      aria-hidden
      className={clsx(
        'hidden xl:flex xl:flex-col xl:items-center xl:justify-end',
        className,
      )}
    >
      <span className="block h-10 w-10 rounded-full bg-employment-blue-light"></span>
      <span className="block h-[90%] border-l border-employment-blue-light"></span>
    </div>
  );
};

interface LayoutStepsProps {
  pathname: string;
}

const LayoutSteps: React.FunctionComponent<LayoutStepsProps> = ({
  pathname,
}) => {
  return (
    <ul className="relative mx-auto my-12 flex w-full max-w-[974px] justify-between gap-10 px-5 text-center text-employment-blue-light xl:px-0">
      <span className="absolute top-4 left-1/2 -z-10 w-[70%] -translate-x-1/2 border-t border-t-employment-blue-light md:top-7"></span>
      <li className="flex basis-1/3 flex-col items-center">
        <span
          className={clsx(
            'mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-employment-blue-light bg-white font-bold md:h-[54px] md:w-[54px] md:text-2xl',
            pathname.includes('applicant-details') &&
              'bg-employment-blue-light text-white',
          )}
        >
          1
        </span>
        <span className="text-smx md:text-base">Applicant details</span>
      </li>
      <li className="flex basis-1/3 flex-col items-center">
        <span
          className={clsx(
            'mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-employment-blue-light bg-white font-bold md:h-[54px] md:w-[54px] md:text-2xl',
            pathname.includes('bvn-verification') &&
              'bg-employment-blue-light text-white',
          )}
        >
          2
        </span>
        <span className="text-sm md:text-base">BVN verification</span>
      </li>
      <li className="flex basis-1/3 flex-col items-center">
        <span
          className={clsx(
            'mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-employment-blue-light bg-white font-bold md:h-[54px] md:w-[54px] md:text-2xl',
            pathname.includes('documents') &&
              'bg-employment-blue-light text-white',
          )}
        >
          3
        </span>
        <span className="text-sm md:text-base">Documents</span>
      </li>
    </ul>
  );
};

export const EmploymentFormsLayout: React.FunctionComponent<
  EmploymentFormsLayoutProps
> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      {/* <Livechat /> */}
      <EmploymentFormsHeader />

      <div className="h-full xl:flex xl:justify-evenly">
        <LayoutPillar className="mx-auto" />

        <div className="mx-auto w-full max-w-[974px] flex-shrink-0">
          {routesWithSteps.includes(pathname) && (
            <LayoutSteps pathname={pathname} />
          )}

          <div className="mx-auto w-full  bg-[#F9FBFF]">{children}</div>
        </div>

        <LayoutPillar className="mx-auto" />
      </div>

      <EmploymentFormsFooter />
    </>
  );
};
