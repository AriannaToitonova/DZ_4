
const AboutUsText = ( {pClass} ) =>{

    return(
        <>
            <p className= {pClass ? "active" : "inActive"}>A frontend developer is a specialist who develops the user interface, that is, the part of the site or application that page visitors see. The main task of a front-end developer is to translate the finished design layout into code so that everything works correctly.</p>
        </>
    )
}

export default AboutUsText;
