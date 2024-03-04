import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CourseCard from './homecards/CourseCard';
import InterviewCard from './homecards/InterviewCard';

export default function Carousel({ height, section }) {
    const courses = [
        [{
            "courseName": "Web Development Bootcamp",
            "courseType": "Full Stack",
            "price": 895.50
        },
        {
            "courseName": "Python Programming Basics",
            "courseType": "Programming",
            "price": 1150.75
        }],
        [{
            "courseName": "Data Science Fundamentals",
            "courseType": "Data Science",
            "price": 980.25
        },
        {
            "courseName": "Graphic Design Masterclass",
            "courseType": "Design",
            "price": 1205.30
        }],
        [{
            "courseName": "Mobile App Development with React Native",
            "courseType": "Mobile Development",
            "price": 870.80
        },
        {
            "courseName": "Machine Learning Essentials",
            "courseType": "Machine Learning",
            "price": 1025.90
        }],
        [{
            "courseName": "Business Finance for Beginners",
            "courseType": "Finance",
            "price": 935.20
        },
        {
            "courseName": "Photography Basics",
            "courseType": "Photography",
            "price": 1140.10
        }],
        [{
            "courseName": "Cybersecurity Fundamentals",
            "courseType": "Cybersecurity",
            "price": 910.60
        },
        {
            "courseName": "Project Management Mastery",
            "courseType": "Project Management",
            "price": 995.75
        }]
    ]
    const courseList = courses.map((course, key) => {
        return (
            <SwiperSlide key={key}><CourseCard data={course[0]} width={"w-[45vw]"} /><CourseCard data={course[1]} width={"w-[45vw]"} /></SwiperSlide>
        )
    });
    const interview = [
        [{
            "courseName": "Technical Interview Mastery",
            "courseType": "Programming",
            "price": 850.40
        },
        {
            "courseName": "Data Structures and Algorithms Deep Dive",
            "courseType": "Programming",
            "price": 1125.65
        }],
        [{
            "courseName": "Behavioral Interview Strategies",
            "courseType": "Soft Skills",
            "price": 975.15
        },
        {
            "courseName": "Mock Interviews with Feedback",
            "courseType": "Practice",
            "price": 1200.20
        }],
        [{
            "courseName": "System Design Interview Prep",
            "courseType": "Software Engineering",
            "price": 825.70
        },
        {
            "courseName": "Case Study Interview Techniques",
            "courseType": "Consulting",
            "price": 980.80
        }],
        [{
            "courseName": "Whiteboard Coding Challenges",
            "courseType": "Programming",
            "price": 910.30
        },
        {
            "courseName": "Resume and LinkedIn Optimization",
            "courseType": "Career Development",
            "price": 1135.40
        }],
        [{
            "courseName": "Common Interview Questions Explained",
            "courseType": "Career Preparation",
            "price": 895.90
        },
        {
            "courseName": "Job Search Strategies for Tech Professionals",
            "courseType": "Career Development",
            "price": 990.75
        }]
    ]
    const interviewList = interview.map((course, key) => {
        return (
            <SwiperSlide key={key}><InterviewCard data={course[0]} /><InterviewCard data={course[1]} /></SwiperSlide>
        )
    });
    return (
        <div className='carousel' style={{ height: `${height}` }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {(section === "course") ?
                    <>
                        {courseList}
                    </>
                    :
                    <>
                        {interviewList}
                    </>}
            </Swiper>
        </div>
    );
}
