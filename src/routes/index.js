import { HeaderOnly } from '~/components/Layouts'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/@:nickname', component: Profile },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
