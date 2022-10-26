import { HeaderOnly } from '~/components/Layouts'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import routesConfig from '~/config/routes'

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.profile, component: Following },
  { path: routesConfig.search, component: Search },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
