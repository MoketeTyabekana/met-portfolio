import React, { useState } from "react";
import Footer from "../components/Footer";

const categories = [
	{
		name: "Web Development",
		videos: [
			{
				title: "React JS Full Course for Beginners",
				url: "https://www.youtube.com/embed/bMknfKXIFA8",
				yt: "https://www.youtube.com/watch?v=bMknfKXIFA8",
			},
			{
				title: "HTML & CSS Full Course - Beginner to Pro",
				url: "https://www.youtube.com/embed/G3e-cpL7ofc",
				yt: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
			},
			{
				title: "JavaScript Full Course (2023)",
				url: "https://www.youtube.com/embed/PkZNo7MFNFg",
				yt: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
			},
			{
				title: "Node.js and Express.js - Full Course",
				url: "https://www.youtube.com/embed/Oe421EPjeBE",
				yt: "https://www.youtube.com/watch?v=Oe421EPjeBE",
			},
			{
				title: "Responsive Web Design - HTML & CSS",
				url: "https://www.youtube.com/embed/srvUrASNj0s",
				yt: "https://www.youtube.com/watch?v=srvUrASNj0s",
			},
			{
				title: "Tailwind CSS Crash Course",
				url: "https://www.youtube.com/embed/lCxcTsOHrjo",
				yt: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
			},
			{
				title: "Bootstrap 5 Crash Course",
				url: "https://www.youtube.com/embed/4sosXZsdy-s",
				yt: "https://www.youtube.com/watch?v=4sosXZsdy-s",
			},
			{
				title: "Git & GitHub Crash Course For Beginners",
				url: "https://www.youtube.com/embed/RGOj5yH7evk",
				yt: "https://www.youtube.com/watch?v=RGOj5yH7evk",
			},
			{
				title: "React Hooks Tutorial",
				url: "https://www.youtube.com/embed/f687hBjwFcM",
				yt: "https://www.youtube.com/watch?v=f687hBjwFcM",
			},
			{
				title: "REST API Crash Course",
				url: "https://www.youtube.com/embed/Q-BpqyOT3a8",
				yt: "https://www.youtube.com/watch?v=Q-BpqyOT3a8",
			},
		],
	},
	{
		name: "UI/UX Design",
		videos: [
			{
				title: "UI/UX Design Tutorial – Wireframe, Mockup & Design in Figma",
				url: "https://www.youtube.com/embed/jwCmIBJ8Jtc",
				yt: "https://www.youtube.com/watch?v=jwCmIBJ8Jtc",
			},
			{
				title: "Figma UI/UX Design Tutorial: Complete Guide",
				url: "https://www.youtube.com/embed/FTFaQWZBqQ8",
				yt: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
			},
			{
				title: "Adobe XD UI/UX Design Tutorial",
				url: "https://www.youtube.com/embed/68w2VwalD5w",
				yt: "https://www.youtube.com/watch?v=68w2VwalD5w",
			},
			{
				title: "UX Design for Beginners",
				url: "https://www.youtube.com/embed/9B1d3Ry6krs",
				yt: "https://www.youtube.com/watch?v=9B1d3Ry6krs",
			},
			{
				title: "UI Design with Adobe Illustrator",
				url: "https://www.youtube.com/embed/2Tjafl5bLHc",
				yt: "https://www.youtube.com/watch?v=2Tjafl5bLHc",
			},
			{
				title: "UI/UX Design Process Explained",
				url: "https://www.youtube.com/embed/3Y1j1WbB9mc",
				yt: "https://www.youtube.com/watch?v=3Y1j1WbB9mc",
			},
			{
				title: "Mobile App UI Design in Figma",
				url: "https://www.youtube.com/embed/2Vt7Ik8Ublw",
				yt: "https://www.youtube.com/watch?v=2Vt7Ik8Ublw",
			},
			{
				title: "UX Research Methods",
				url: "https://www.youtube.com/embed/9XkL2h8l5uY",
				yt: "https://www.youtube.com/watch?v=9XkL2h8l5uY",
			},
			{
				title: "UI Animation in After Effects",
				url: "https://www.youtube.com/embed/3tG1jUQbuSI",
				yt: "https://www.youtube.com/watch?v=3tG1jUQbuSI",
			},
			{
				title: "Design Systems in Figma",
				url: "https://www.youtube.com/embed/4W4LvJnNegA",
				yt: "https://www.youtube.com/watch?v=4W4LvJnNegA",
			},
		],
	},
	{
		name: "Graphic Design",
		videos: [
			{
				title: "Adobe Photoshop for Beginners",
				url: "https://www.youtube.com/embed/1Qp3rQlrC6Y", 
				yt: "https://www.youtube.com/watch?v=1Qp3rQlrC6Y",
			},
			{
				title: "Adobe Illustrator Full Course",
				url: "https://www.youtube.com/embed/IyR_uYsRdPs",
				yt: "https://www.youtube.com/watch?v=IyR_uYsRdPs",
			},
			{
				title: "Canva Graphic Design Full Course",
				url: "https://www.youtube.com/embed/2pL28CcEijU",
				yt: "https://www.youtube.com/watch?v=2pL28CcEijU",
			},
			{
				title: "Graphic Design Basics",
				url: "https://www.youtube.com/embed/FTQbiNvZqaY",
				yt: "https://www.youtube.com/watch?v=FTQbiNvZqaY",
			},
			{
				title: "Logo Design in Illustrator",
				url: "https://www.youtube.com/embed/3uEtdDvK6Xo",
				yt: "https://www.youtube.com/watch?v=3uEtdDvK6Xo",
			},
			{
				title: "Photoshop Manipulation Tutorial",
				url: "https://www.youtube.com/embed/9UoJ2FqQhzg",
				yt: "https://www.youtube.com/watch?v=9UoJ2FqQhzg",
			},
			{
				title: "Poster Design in Photoshop",
				url: "https://www.youtube.com/embed/8kK-cA99SA0",
				yt: "https://www.youtube.com/watch?v=8kK-cA99SA0",
			},
			{
				title: "Typography in Graphic Design",
				url: "https://www.youtube.com/embed/3t6L-FlpQ9I",
				yt: "https://www.youtube.com/watch?v=3t6L-FlpQ9I",
			},
			{
				title: "Color Theory for Designers",
				url: "https://www.youtube.com/embed/Qj1FK8n7WgY",
				yt: "https://www.youtube.com/watch?v=Qj1FK8n7WgY",
			},
			{
				title: "Branding for Beginners",
				url: "https://www.youtube.com/embed/7Z6kz6yG4_4",
				yt: "https://www.youtube.com/watch?v=7Z6kz6yG4_4",
			},
		],
	},
];

const Learn = () => {
	const [selected, setSelected] = useState({ cat: 0, vid: 0 });

	const handleVideoSelect = (catIdx, vidIdx) => {
		setSelected({ cat: catIdx, vid: vidIdx });
	};

	const currentVideo = categories[selected.cat].videos[selected.vid];

	return (
		<>
			<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-32 px-2 lg:px-0">
				<div className="w-full max-w-7xl mb-8">
					<div className="bg-yellow-100 text-yellow-900 rounded p-4 text-center mb-6 text-sm font-semibold">
						<span>
							<strong>Note:</strong> All courses below are external YouTube
							resources and are only recommendations by the developer. The
							content belongs to their respective creators.
						</span>
					</div>
					<h1 className="text-4xl font-bold mb-4 text-center">
						Welcome to the Learn Page
					</h1>
					<p className="text-lg max-w-2xl text-center mx-auto mb-8">
						Discover carefully curated resources to support your journey in{" "}
						<strong>Web Development</strong>, <strong>UI/UX Design</strong>, and{" "}
						<strong>Graphic Design</strong>. Watch top-rated free courses right
						here or open them on YouTube.
					</p>
				</div>

				{/* Category Tabs */}
				<div className="w-full max-w-7xl flex flex-wrap justify-center gap-4 mb-8">
					{categories.map((cat, idx) => (
						<button
							key={cat.name}
							className={`px-6 py-2 rounded-full font-semibold border-2 transition ${
								selected.cat === idx
									? "bg-blue-600 border-blue-600 text-white"
									: "bg-gray-800 border-gray-700 text-gray-200 hover:bg-blue-700 hover:border-blue-700"
							}`}
							onClick={() => handleVideoSelect(idx, 0)}
						>
							{cat.name}
						</button>
					))}
				</div>

				{/* Video Player and List */}
				<div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
					{/* Video Player */}
					<div className="flex-[2] bg-black rounded-lg shadow-lg p-4 flex flex-col items-center">
						<div className="w-full aspect-video mb-4">
							<iframe
								className="w-full h-full rounded-lg"
								src={currentVideo.url}
								title={currentVideo.title}
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen
							></iframe>
						</div>
						<div className="flex flex-col items-center gap-2">
							<span className="font-semibold text-lg text-center">
								{currentVideo.title}
							</span>
							<a
								href={currentVideo.yt}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 underline text-sm hover:text-blue-200"
							>
								View on YouTube
							</a>
						</div>
					</div>
					{/* Video List */}
					<div className="flex-1">
						<h2 className="text-xl font-bold mb-4 text-center lg:text-left">
							{categories[selected.cat].name} Courses
						</h2>
						<ul className="space-y-2">
							{categories[selected.cat].videos.map((video, vidIdx) => (
								<li key={video.title}>
									<button
										className={`w-full text-left px-4 py-2 rounded transition ${
											selected.vid === vidIdx
												? "bg-blue-600 text-white font-semibold"
												: "bg-gray-800 text-gray-200 hover:bg-blue-700"
										}`}
										onClick={() => handleVideoSelect(selected.cat, vidIdx)}
									>
										{vidIdx + 1}. {video.title}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Learn;
