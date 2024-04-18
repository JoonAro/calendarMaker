import { Link } from "react-router-dom";

const Privacy = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-mainBackground">
            <div className="relative flex flex-col m-6 space-y-8 md:flex-row md:space-y-0 mt-10">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <h1 className="text-4xl font-bold text-left text-black">Privacy and Policy</h1>
                    <p className="mt-4">This is a calendar maker app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem necessitatibus sint explicabo eius quaerat earum, autem sit temporibus. Ratione, quasi earum quis quas minus nostrum ipsa dolorum veritatis deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus in iure qui ab laboriosam enim repellendus voluptatem iusto consectetur earum aliquid, modi distinctio ipsam recusandae ea? Voluptates sed ea neque!l Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugiat tenetur accusantium consectetur debitis quae dolores neque cum facere et, dolor non amet tempora id? Vel laboriosam ut inventore reprehenderit.</p>
                    <div className="flex items-center mt-4">
                        <input type="checkbox" id="terms1" className="mr-2" />
                        <p className="terms1">Do you accept the terms and conditions?</p>
                    </div>
                    <div className="flex items-right mt-1">
                        <input type="checkbox" id="terms2" className="mr-2" />
                        <p className="terms2">Do you accept the terms aconditio</p>
                    </div>
                    <div className="flex p-5 ">
                    <Link to="/" className="bg-blue-500 mr-4 text-white px-4 py-2 rounded-md hover:bg-blue-600">Cancel</Link>
                    <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Continue</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
