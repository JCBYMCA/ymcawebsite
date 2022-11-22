import Image from "next/image";
import {DepartmentNavbarMenu} from "../../DepartmentPageComponents/DepartmentNavbar/DepartmentNavbar";

const FacultyNavbar = () => {
    return (
        <>
            <div className={`flex flex-col sticky top-0 bg-[#EBEBEB]  text-black border-1 border-neutral-200`} style={{
                zIndex:8000
            }}>
                <div className={'flex'}>
                    <Image src='/assets/images/logo.png' alt={'Logo'} width={90} height={90} />
                    <div className={'flex flex-col'}>
                        <div className={'flex flex-col font-bold -space-y-1 tracking-wider mt-5'}>
                            <h1 className={'text-xs md:text-2xl mb-1'}>Department of Computer Engineering - Faculty</h1>
                            <h1 className={'text-sm text-secondaryLight'}>J.C. Bose University of Science and Technology ,YMCA, Faridabad</h1>
                            {/*<h1 className={'text-xs md:text-xl'}>of Science & Technology</h1>*/}
                            {/*<h1 className={'text-xs md:text-xl'}>YMCA, Faridabad</h1>*/}
                        </div>
                    </div>
                </div>
                <DepartmentNavbarMenu/>
            </div>
        </>
    )
}

export default FacultyNavbar;