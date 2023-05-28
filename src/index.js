import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Movies from "./routes/Movies";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Home />
				<Outlet />
			</>
		),
		children: [
			{
				path: "movies",
				element: (
					<>
						<Movies />
					</>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
