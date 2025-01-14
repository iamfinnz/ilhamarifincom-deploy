import clsx from 'clsx';
import { ReactNode } from 'react';
import { m } from 'framer-motion';
import { ChevronRightIcon } from '@/components/Icons';
import SectionContent from '@/components/sections/SectionContent';
import { Link as LinkMdx } from '@/components/mdx/custom-components/Link';
import Link from 'next/link';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const projects: Array<CardProjectProps> = [
  {
    title: 'Web RS Sansani',
    caption: 'Web Development',
    images: ['bg-rssansani'],
    description:
      'A company profile website for Rumah Sakit Sansani.',
    button: {
      title: 'See detail',
      href: '/projects/rssansani',
      siteUrl: 'https://rssansani.co.id/',
    },
  },
  {
    title: 'Diabet.Check',
    images: ['bg-diabetcheck'],
    caption: 'Mobile Development',
    description:
      'Blood Sugar Management and Education App.',
    button: {
      title: 'See detail',
      href: '/projects/diabetcheck',
      siteUrl: 'https://drive.google.com/file/d/1-W_akNGxGKlc-AZxa4fGb7hw8tNt0pE3/view?usp=sharing',
    },
  },
  {
    title: 'BMS RS Sansani',
    caption: 'Web Development',
    images: ['bg-bms'],
    description:
      'Lorem ipsum dolor sit amet.',
    button: {
      title: 'See detail',
      href: '/projects/bed-rssansani',
      siteUrl: 'https://bed.rssansani.co.id/',
    },
  },
  // {
  //   title: 'SPR PCR App',
  //   caption: 'Mobile Development',
  //   images: ['bg-sprapp'],
  //   description:
  //     'Lorem ipsum dolor sit amet.',
  //   button: {
  //     title: 'See detail',
  //     href: '/projects/sprpcr',
  //     siteUrl: 'https://rssansani.co.id/',
  //   },
  // },
  // {
  //   title: 'SPR PCR Web',
  //   caption: 'Web Development',
  //   images: ['bg-sprweb'],
  //   description:
  //     'Lorem ipsum dolor sit amet.',
  //   button: {
  //     title: 'See detail',
  //     href: '/projects/sprpcr',
  //     siteUrl: 'https://rssansani.co.id/',
  //   },
  // },
  // {
  //   title: 'Acnetect',
  //   caption: 'Mobile Development',
  //   images: ['acnetect'],
  //   description:
  //     'Lorem ipsum dolor sit amet.',
  //   button: {
  //     title: 'See detail',
  //     href: '/projects/acnetect',
  //     siteUrl: 'https://rssansani.co.id/',
  //   },
  // },
];

interface CardProjectProps {
  as?: 'h2' | 'h3';
  title: string;
  caption: string;
  description: string | ReactNode;
  images: Array<string>;
  button?: {
    title: string;
    href: string;
    siteUrl: string;
  } | null;
}

function CardProject({
  as = 'h2',
  title,
  caption,
  description,
  images,
  button = null,
}: CardProjectProps) {
  const Heading = as;

  return (
    <m.div
      variants={animation}
      className={clsx(
        'rounded-lg border p-6 md:p-8 ',
        'border-divider-light bg-white',
        'dark:border-divider-dark dark:bg-slate-900',
        'flex flex-col'
      )}
    >
      <div
        className={clsx(
          'h-40',
          images[0],
          'border-divider-light dark:border-divider-dark border bg-left-top',
          'bg-contain',
          'mb-8 w-full rounded-md'
        )}
      />
      <Heading
        className={clsx(
          'text-accent-600 mb-2 block font-black',
          'lg:>mb-4',
          'dark:text-accent-400'
        )}
      >
        {caption}
      </Heading>
      <p
        className={clsx(
          'mb-4 text-3xl font-black text-slate-700',
          'lg:text-4xl',
          'dark:text-slate-200'
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          'max-w-lg flex-1 text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {description}
      </p>
      {button && (
        <m.div
          initial="hide"
          animate="show"
          transition={{ delayChildren: 0.8, staggerChildren: 0.125 }}
          className={clsx('mt-4', 'md:mt-6', 'space-x-4')}
        >
          <m.span variants={animation}>
            <Link href={button.href} className={clsx('button button--soft')}>
              {button.title}
              <ChevronRightIcon className="mt-0.5 h-3 w-3" />
            </Link>
          </m.span>
          <m.span variants={animation}>
            <LinkMdx href={button.siteUrl}>Visit site</LinkMdx>
          </m.span>
        </m.div>
      )}
    </m.div>
  );
}

function ProjectsContents() {
  return (
    <SectionContent>
      <m.div
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        className="-mt-20 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {projects.map((project) => (
          <CardProject
            title={project.title}
            caption={project.caption}
            description={project.description}
            images={project.images}
            button={project.button}
          />
        ))}
      </m.div>
    </SectionContent>
  );
}

export default ProjectsContents;
