import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon, FireIcon, SearchIcon, FilmIcon, CollectionIcon, UserIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl mt-12">
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='HOT' Icon={FireIcon}/>
                <HeaderItem title='COLLECTION' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='NEW' Icon={FilmIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image src='https://links.papareact.com/ua6'
                className='object-contain'
                width={200}
                height={100}
            />
            
        </header>
    )
}

export default Header
