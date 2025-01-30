import Image from "next/image";
import ahmed from "../Comp 30.png";

export default async function Contact() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return (
        <div className="grid grid-cols-12 grid-rows-12 font-bold gap-5">
            
            <div className="bg-ryzen-850 border-solid border-ryzen-900/40 border-2 inline-flex items-center p-5 row-start-7 col-start-10 row-end-8 col-end-12 text-white font-bold backdrop-blur-xl bg-gradient-to-r from-ryzen-900/20 to-ryzen-900/10 animate-slideleft">
                ABOUT PAGE
            </div>
            <div className="bg-ryzen-850 border-hidden border-2 inline-flex items-center p-5 row-start-1 col-start-1 row-end-2 col-end-2 text-white font-bold"></div>
            <div className="inline-flex items-center p-5 row-start-1 row-end-3 col-start-2 col-end-4 h-25 text-white/65 animate-slideright font-bold text-6xl">
                <Image src={ahmed} alt="Description of Mizu" className="object-cover rounded-3xl" />
            </div>
       
            <div className="row-start-3 row-end-7 col-start-2 col-end-8 backdrop:shadow-lg bg-black/60 p-4 rounded-xl  text-ryzen-900  font-bold">
                <h1 className="text-4xl">About Me</h1>
                <p>Welcome to my world of creativity and innovation! Im a passionate Video Editor, a skilled 3D Artist, and now venturing into the exciting realm of Full Stack Development. With a keen eye for detail and a drive to push boundaries, I strive to bring visions to life through my diverse skill set.</p>
                
                <h2 className="text-3xl">Video Editing</h2>
                <p>With years of experience in video editing, I have honed my ability to craft compelling narratives and visually stunning content. From short films to promotional videos, I bring stories to life with precision and creativity.</p>
                
                <h2 className="text-3xl">3D Artistry</h2>
                <p>As a 3D artist, I specialize in creating immersive and realistic 3D models and animations. My work spans across various industries, including gaming, film, and virtual reality, where I transform ideas into visually captivating experiences.</p>
                
                <h2 className="text-3xl">Full Stack Development</h2>
                <p>Embarking on my journey as a Full Stack Developer, I am committed to mastering the art of building seamless and responsive web applications. My goal is to integrate my creative background with technical expertise to deliver innovative and user-friendly solutions.</p>
                
                <h2 className="text-3xl">Skills</h2>
                <ul className="skills text-black">
                    <li className="bg-ryzen-900 text-ryzen-200 p-2 m-2 rounded">Video Editing</li>
                    <li className="bg-ryzen-900 text-ryzen-200 p-2 m-2 rounded">3D Modeling and Animation</li>
                    <li className="bg-ryzen-900 text-ryzen-200 p-2 m-2 rounded">HTML, CSS, JavaScript</li>
                    <li className="bg-ryzen-900 text-ryzen-200 p-2 m-2 rounded">Front-end Frameworks (React)</li>
                </ul>
                
                <h2 className="text-3xl">Contact</h2>
                <p>Lets connect and create something amazing together! Feel free to reach out to me at [mizuedit@mail.com] .</p>
            </div>
        </div>
    );
}
