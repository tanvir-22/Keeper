import  { Suspense } from 'react'
import Banner from '../components/Banner'

import HomeSection from '../components/HomeSection'
const HomePage = () => {
  const friendsPromise = fetch(`/friends.json`).then(res=>res.json())
  return (
    <div>
      <Banner/>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <HomeSection friendsPromise={friendsPromise} />
      </Suspense>
    </div>
  )
}

export default HomePage