import Image from "next/image";

const PostTemplate = ({ content, title }) => {

    const appendHTML = (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
    );

    return (
        <div className={'my-5 mx-20 px-2 py-4 '}>
            <div className={' bg-logo bg-center h-fit bg-no-repeat bg-auto  rounded-md  border-1 text-justify bg-neutral-50 border-neutral-300 flex shadow-2xl'}>
                <div className={" px-6 w-full py-8 bg-white/90 "}>
                    <div className={'mr-4 w-full'}>
                        <h1 className={'font-bold text-2xl mb-4 text-center'}>{title}</h1>
                        <div id={'content-box'} className={'m-auto  h-fit p-3 rounded-sm content-center'}>
                            {appendHTML}                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostTemplate;