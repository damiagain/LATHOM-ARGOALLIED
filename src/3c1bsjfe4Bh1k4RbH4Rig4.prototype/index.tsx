import React, { useState } from 'react'

import Landing from '../f2K7drB3ZJzQSGAwR1ctog.frame'
import Home from '../v5csf484CbUXduHuGCeP2z.frame'
import About from '../knbEJE8xyN2uyS1BaLYfuo.frame'
import SubPage from '../4X63pXED6PhSDQUDypWVZa.frame'

import type { Route } from '../shared/content'

const LANDING = 'f2K7drB3ZJzQSGAwR1ctog'
const HOME = 'v5csf484CbUXduHuGCeP2z'
const ABOUT = 'knbEJE8xyN2uyS1BaLYfuo'

/** The size every frame draws at, unless one exports its own. */
export const viewport = 'web'

function routeFor(start?: string): Route {
  if (!start || start === LANDING) return '/'
  if (start === HOME) return '/home'
  if (start === ABOUT) return '/about'
  return '/services'
}

export default function Prototype({ start }: { start?: string }) {
  const [route, setRoute] = useState<Route>(() => routeFor(start))

  const navigate = (next: Route) => {
    setRoute(next)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }

  if (route === '/') return <Landing onNavigate={navigate} />
  if (route === '/home') return <Home onNavigate={navigate} />
  if (route === '/about') return <About onNavigate={navigate} />
  return <SubPage key={route} route={route} onNavigate={navigate} />
}
