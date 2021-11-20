import image from "../galaxy.jpg";

export default function Home() {
	return (
		<main className="z-10">
			<img
				src={image}
				alt="Galaxy"
				className="absolute object-cover w-full h-full"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
					Greetings. I'm Russell.
				</h1>
			</section>
		</main>
	);
}
