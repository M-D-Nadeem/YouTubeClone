import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import VideoPage from './Pages/VideoPage/VideoPage'
import Library from './Pages/Library/Library'
import LikedVideo from './Pages/LikedVideo/LikedVideo'
import WatchHistory from './Pages/WatchHistory/WatchHistory'
import WatchLater from './Pages/WatchLater/WatchLater'
import YourVideo from './Pages/YourVideo/YourVideo'
import Chanel from './Pages/Chanel/Chanel'

const Allroutes = ({seteditcreatechanelbtn,setvideouploadpage}) => {
  return (
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/search/:Searchquery' element={<Search/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
        <Route path='/Library' element={<Library/>}/>
        <Route path='/Likedvideo' element={<LikedVideo/>}/>
        <Route path='/Watchhistory' element={<WatchHistory/>}/>
        <Route path='/Watchlater' element={<WatchLater/>}/>
        <Route path='/Yourvideo' element={<YourVideo/>}/>
        <Route path='/channel/:cid' element={<Chanel seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage}/>}/>
    </Routes>
  )
}

export default Allroutes