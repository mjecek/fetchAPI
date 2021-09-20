import React from 'react';

//tailwind
import {  CursorClickIcon ,CheckIcon, ThumbUpIcon, FireIcon, StopIcon } from '@heroicons/react/solid'

const timeline = [
  {
    id: 1,
    content: 'Click Start',
    icon: CursorClickIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Wait a sec',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Check Profiles and their stats',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Stop or wait a 10 sec for new data',
    icon: StopIcon,
    iconBackground: 'bg-red-500',
  },
  {
    id: 5,
    content: 'Yeah',
    icon: FireIcon,
    iconBackground: 'bg-yellow-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Explanation() {
  return (
    <div className="flow-root ml-10 mt-5">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    {/* <time dateTime={event.datetime}>{event.date}</time> */}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}