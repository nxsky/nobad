'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>程序员
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <div className="relative p-2">
      <span className="absolute border-l border-t border-lime-700/90 dark:border-lime-400/90 w-full h-3/4"></span>
      <span className="absolute border-b border-r border-lime-700/90 dark:border-lime-400/90 w-full h-3/4 bottom-0"></span>
      <span className="absolute border-t border-lime-700/90 dark:border-lime-400/90 w-full h-1/4 top-0 triangle"></span>
      <span className="group-hover:border-dashed opacity-70 group-hover:opacity-100">
        架构师
      </span>
    </div>
  )
}

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>自由职业者</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span>创始人</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，<Designer />，
        <br />
        <OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是原原(Kevin.Zeng)，
          <PeekabooLink href="https://nobad.work">NoBad（不错）工作室</PeekabooLink>
          创始人，目前致力于探索程序员的自由职业之路。
          我相信，程序员这个团体拥有自由职业的天赋和潜力，具备独立思考、解决问题的能力，也拥有创造力和创新精神。
          我希望与大家共同努力，将“不错”工作室发展成为一个专注于探索和发掘程序员自由职业潜力的创新平台。
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://twitter.com/nobad"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://youtube.com/nobad"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://cali.so/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://github.com/nobad"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://telegram.com/nobad"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:root@nobad.work"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
