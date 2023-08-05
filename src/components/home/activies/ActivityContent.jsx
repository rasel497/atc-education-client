import React from 'react';
import Activies from './Activies';

const ActivityContent = () => {
    const contents = [
        {
            contentImage: 'https://demo.themexpert.com/wordpress/edumodo-update/learnpress-v2/wp-content/uploads/sites/6/2022/07/img-7.jpg',
            contentTitle: 'ACT EDUCATION ONLINE TRAINING',
            contentDescription: 'Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus doloribus tempore minima id aperiam esse voluptate delectus harum culpa.'
        },
        {
            contentImage: 'https://media.istockphoto.com/id/862229772/photo/doctors-meeting.jpg?s=612x612&w=0&k=20&c=AJZGw45BZq5kIdU4OgdHJhUo1gvjKMXdJl_RO8BKL1o=',
            contentTitle: 'Medical Education Training Stock Photos',
            contentDescription: 'Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus doloribus tempore minima id aperiam esse voluptate delectus harum culpa.'
        },
        {
            contentImage: 'https://img.favpng.com/7/5/0/medicine-student-medical-school-study-skills-medical-education-png-favpng-g7TeuSmHCMC9Q2mnnWp1QWPqm.jpg',
            contentTitle: 'Education training professional',
            contentDescription: 'Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus doloribus tempore minima id aperiam esse voluptate delectus harum culpa.'
        }
    ]
    return (
        <div>
            <Activies contents={contents} />
        </div>
    );
};

export default ActivityContent;