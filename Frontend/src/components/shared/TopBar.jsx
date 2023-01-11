import { useState } from 'react'
import { AiFillNotification, AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { GrFormClose, GrNote } from 'react-icons/gr'
import { BsBell } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'
import avatar from '../../../public/assets/profile.png'
const TopBar = ({ setShow, show }) => {
    const [search, setSearch] = useState("")
    console.log(search)
    return (
        <>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className="first-header">
                    <div className="serch-bar">
                        <form action="" className='search-form'>
                            <div className='icons-input'>
                                <AiOutlineSearch />
                                <BiChevronDown />
                            </div>

                            <input type="text"
                                placeholder='First Name / Last Name'
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }} />
                            {
                                search && <GrFormClose className='icon-close' onClick={() => { setSearch("") }} />
                            }
                        </form>
                    </div>
                    <div>
                        sdfkljskl
                    </div>
                    <div>
                        dfklasjdflsk
                    </div>
                </div>
                <div className='second-header'>
                    <div>
                        <h3>logo</h3>
                    </div>
                    <div className='bell-icon'>
                        <BsBell style={{ fontSize: '13px' }} />
                    </div>
                    <div className='bell-icon'>
                        <IoSettingsSharp style={{ fontSize: '13px' }} />
                    </div>
                    <div className='bell-icon'>
                        <GrNote style={{ fontSize: '13px' }} />
                    </div>
                    <div className='alram-icon'>
                        <AiFillNotification />
                    </div>
                    <div>
                        <img src={avatar} alt="" style={{ width: '30px' }} />
                        <BiChevronDown />
                    </div>
                </div>
            </header>
        </>
    )
}
export default TopBar