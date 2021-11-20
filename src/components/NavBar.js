import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header className="bg-red-600 z-20">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						className={({ isActive }) =>
							"inline-flex items-center py-6 px-3 mr-4 hover:text-green-800 text-4xl font-bold cursive tracking-widest" +
							(isActive ? " text-white" : " text-red-100")
						}
					>
						Russell
					</NavLink>
					<NavLink
						to="/post"
						className={({ isActive }) =>
							"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" +
							(isActive ? " text-red-100 bg-red-700" : "")
						}
					>
						Blog Posts
					</NavLink>
					<NavLink
						to="/project"
						className={({ isActive }) =>
							"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" +
							(isActive ? " text-red-100 bg-red-700" : "")
						}
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" +
							(isActive ? " text-red-100 bg-red-700" : "")
						}
					>
						About Me!
					</NavLink>
				</nav>
				<div className="inline-flex py-3 px-3 my-6">
					<SocialIcon
						url="https://twitter.com/rPalmPinoy"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.youtube.com/channel/UCG7bMps5nPDkUixUODe0big"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.linkedin.com/in/russell-palma-6b9700b9/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
}
