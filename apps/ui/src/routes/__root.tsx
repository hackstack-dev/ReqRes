import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import AppHeader from '../components/AppHeader.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <AppHeader />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})
