import Image from "next/image"
const AboutClub = ({data}) => {
  return (
    <div className="bg-[#161b25] text-white p-10 px-10 sm:px-20">
      <div>
        <h1 className="text-5xl" >About Us</h1>
      </div>
      <div className="sm:flex sm:space-x-4 mt-6 flex flex-col-reverse sm:flex-row">
        <div className="sm:mr-4 text-justify">
          { data?.about_departement ||
           <>
              {"The University Computer Center and Digital Affairs Cell (UCC8DA) is the official club of the Computer Department at our college, dedicated to the digitization of our university. With a vision to embrace technology and streamline administrative processes, UCC8DA plays a crucial role in transforming our university into a modern, technologically advanced institution."}
              <br />    
              {"One of the primary objectives of UCC8DA is to build and maintain the college's Enterprise Resource Planning (ERP) portal. This platform serves as a centralized system for managing various academic and administrative activities, including student records, course registration, faculty management, and financial transactions. By implementing and enhancing this portal, UCC8DA ensures efficient and seamless operations within the university."}
              <br />
              {"Furthermore, UCC8DA actively engages in facilitating Massive Open Online Course (MOOC) enrollments. By collaborating with renowned educational platforms, UCC&DA enables students and faculty members to access a diverse range of online courses, enriching their learning experiences and expanding their knowledge beyond the traditional classroom setting."}
              <br />
              {"Currently, UCC8DA is undertaking the ambitious project of developing a new website for the university. This endeavor aims to create a user-friendly and visually appealing online platform that showcases the university's offerings, faculty profiles, research initiatives, and other relevant information. The new website will serve as a digital gateway, providing easy access to resources and promoting effective communication between the university and its stakeholders."}
            </>
          }
          </div>
      </div>
    </div>
  )
}

export default AboutClub
