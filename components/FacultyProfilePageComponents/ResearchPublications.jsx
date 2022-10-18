const ResearchPublications = () => {
    return (
        <div className={'mt-5 flex flex-col text-justify border-b-4 border-secondaryLight pb-6'}>
            <h1 className={'text-xl font-bold'}>Research Publications</h1>
            <ul className={'text-sm mt-3 font-thin list-disc'}>
                <li>Usha Yadav, Neelam Duhan, “MPP-MLO: Multilevel Parallel Partitioning for Efficiently Matching Large Ontologies”. Journal of Scientific & Industrial Research Vol. 80, March 2021, pp. 221-229, http://nopr.niscair.res.in/handle/123456789/56476 (SCIE)</li>
                <li>Ranjna Jain and Neelam Duhan, “OntoJob Query Processor: An Ontology Driven Query Processing Method in Jobology Information System”. Journal of Computer Science, 1552-6607, 16(5), Jan 2020 702-714. https://doi.org/10.3844/jcssp.2020.702.714</li>
                <li>Sonia Setia, Jyoti, Neelam Duhan, “HPM: A Hybrid Model for User’s Behavior Prediction Based on N-Gram Parsing and Access Logs”. Journal of Scientific Programming, Hindawi, Volume 2020, Article ID 8897244, Nov 2020, pp:1-18, DOI: https://doi.org/10.1155/2020/8897244 (SCIE)</li>
                <li>Ashima Garg, Neelam Duhan “Comparative Study of Sarcasm Detection In Sentiment Analysis”. Alochana Chakra Journal, ISSN: 2231-3990, Volume-9, Issue- 8, August 2020, pp: 1112-1121 (UGC)</li>
            </ul>
            <button className={'text-right text-secondary font-bold'}>Read more</button>
        </div>
    )
}

export default ResearchPublications;