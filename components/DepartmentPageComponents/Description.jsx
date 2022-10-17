import Image from "next/image";

const Description = () => {
    return (
        <div className={'flex flex-col w-[60rem] mb-4'}>
            {/*<Image src={'/assets/images/1.png'} alt={'Department'} width={800} height={500} />*/}
            {/*generate description text with a heading, subheading and about paragraph along with some bullet points*/}
            <div className={'flex flex-col'}>
                <h1 className={'text-2xl font-bold'}>About Department</h1>
                <h1 className={'text-xl font-semibold mt-2'}>Department of Computer Engineering</h1>
                <h1 className={'text-lg font-semibold mt-2'}>Bachelor of Technology</h1>
                <p className={'text-justify'}>
                    Quis duo sadipscing interdum eruditi. Montes debet reque suavitate populo ultrices possim erroribus commodo. Mediocrem tation postea laoreet facilis populo hendrerit. Mucius salutatus vix mollis iusto arcu utamur. Bibendum amet nisl tortor class habemus a vidisse. Convallis ludus definitiones eleifend suspendisse sumo blandit. Honestatis natoque possim legere recteque. Integer populo malesuada lacinia mazim equidem putent. Neque vivendo convenire graeci cetero platea. Pulvinar erat noster posse dapibus orci sed verterem. Intellegebat maecenas ornare quis mutat tation ac. Elitr purus mollis honestatis maecenas. Contentiones varius persius eruditi comprehensam aeque aliquip. Magna pulvinar quaeque evertitur referrentur interdum velit mediocrem. Sit maecenas sapien pulvinar qualisque luptatum. Eripuit vero ludus nisl assueverit.
                </p>
                <ul>
                    <li>Quis duo sadipscing interdum eruditi.</li>
                    <li>Quis duo sadipscing interdum eruditi.</li>
                    <li>Quis duo sadipscing interdum eruditi.</li>
                    <li>Quis duo sadipscing interdum eruditi.</li>
                    <li>Quis duo sadipscing interdum eruditi.</li>
                    <li>Quis duo sadipscing interdum eruditi.</li>

                </ul>
            </div>

        </div>
    )
}

export default Description;