import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import Loading from '@/components/loading'

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="h-screen w-screen">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
