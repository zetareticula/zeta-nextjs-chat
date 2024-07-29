import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Zeta Reticula -- an EinsteinDB and MilevaDB AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
        Harnessing modern EinsteinDB for cause-effect vertex{' '}
          <ExternalLink href="https://nextjs.org">Vertex</ExternalLink> matrix{' '}
          <ExternalLink href="https://sdk.vercel.ai">
          calculations and simulated annealing.
          </ExternalLink>
          Integrating seamlessly with Command Query Responsibility Segregation (CQRS){' '}
          <ExternalLink href="https://vercel.com/storage/kv">
            using Zeta Reticula and EinsteinDB
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
        At the heart of Zetareticula.com lies a cutting-edge tech stack, seamlessly blending Vercel, Prisma, EinsteinDB, and MaterialUI. {' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            Generative UI with Vercel AI SDK
          </ExternalLink>{' '}
          An improved user experience, heightened conversion rates, and superior organic search ranking are just a few of the benefits of using Zeta Reticula.
        </p>
      </div>
    </div>
  )
}
