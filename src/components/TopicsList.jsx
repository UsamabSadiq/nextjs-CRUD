import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { FcEditImage } from "react-icons/fc";


const TopicsList = () => {
    return (
        <>
            <div className="main">
                <div className="card-main mb-3 mx-2 border-2 border-slate-300 rounded-lg flex px-3 py-2 relative">
                    <div className="text-content">
                        <h2 className='text-lg font-semibold'>Topic Title</h2>
                        <p className='text-md font-medium text-gray-400'>Topic Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam natus beatae nesciunt a ullam nulla corrupti laborum qui incidunt delectus praesentium deleniti quia maxime ducimus alias molestias aperiam molestiae, labore atque veniam dolorem vel amet. Accusamus beatae expedita dolor eaque ut, fugit repellendus vel veritatis aliquam perferendis ex facere architecto.</p>
                    </div>

                    <div className="icons flex justify-end items-center gap-3 absolute top-2 right-3">
                        <RemoveBtn />
                        <Link href={'/edittopic/123'}>
                            <FcEditImage size={25} />
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default TopicsList
