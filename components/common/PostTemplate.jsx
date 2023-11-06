import Image from "next/image";

const PostTemplate = ({ content, title }) => {

    const appendHTML = (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
    );

    return (
        <div className={'my-5 mx-20 px-2 py-4'}>

            <div className={' bg-logo bg-center h-fit bg-no-repeat bg-auto  rounded-md  border-1 text-justify bg-neutral-50 border-neutral-300 flex shadow-2xl'}>
                <div className={" px-6 w-full py-8 bg-white/90 "}>
                    <div className={'mr-4 w-full'}>
                        <h1 className={'font-bold text-2xl mb-4 text-center'}>{title}</h1>
                        <div id={'content-box'} className={' h-fit p-3 rounded-sm '}>
                            {appendHTML}
                            {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostTemplate;