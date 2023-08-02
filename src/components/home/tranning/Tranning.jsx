import React from 'react';

const Tranning = () => {
    return (
        <section className='mt-32 mb-32'>
            <div className='mb-16'>
                <h2 className='text-3xl text-cyan-400 font-extrabold text-center uppercase'>Our Educators Team!</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus non est quam sint, <br /> velit repellendus distinctio suscipit harum tempora officiis?</p>
            </div>
            <div className='grid justify-items-center gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto mb-5'>
                <div className="card card-compact w-80 bg-base-60 shadow-2xl">
                    <div className="avatar justify-center mt-4">
                        <div className="w-40 mask mask-hexagon">
                            <img src="https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg?w=996&t=st=1690877405~exp=1690878005~hmac=03f8c5c0200ae26640c782bc0b7bcc9cbfa3e082eec8350f1b76cd3fe5dc65c8" alt="" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Mr. David Jems</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-blue-700 underline">
                                Learn me more
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere accusamus, ducimus autem illo dolores.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <div className="avatar justify-center mt-4">
                        <div className="w-40 mask mask-hexagon">
                            <img src="https://thumbs.dreamstime.com/b/female-university-professor-looking-camera-holding-journal-writing-classroom-155809447.jpg" alt="" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Mrs. Shahrina Jez</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-blue-700 underline">
                                Learn me more
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere accusamus, ducimus autem illo dolores.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <div className="avatar justify-center mt-4">
                        <div className="w-40 mask mask-hexagon">
                            <img src="https://img.freepik.com/premium-photo/school-teacher-hold-apple-classroom-blackboard_474717-61238.jpg?w=1060" alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Mr. Henry Man</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-blue-700 underline">
                                Learn me more
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere accusamus, ducimus autem illo dolores.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-60 shadow-2xl">
                    <div className="avatar justify-center mt-4">
                        <div className="w-40 mask mask-hexagon">
                            <img src="https://img.freepik.com/free-photo/vertical-shot-male-wearing-suit-tie-standing-classroom_181624-14287.jpg?w=360&t=st=1690877736~exp=1690878336~hmac=4be0af2134904984b2c62336b0fa8b94536ff3d9392031263fbaa2bb185bc2af" alt="" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Mr. Xiaxong GNJ</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-blue-700 underline">
                                Learn me more
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere accusamus, ducimus autem illo dolores.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tranning;