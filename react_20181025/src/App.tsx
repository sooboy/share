import * as React from "react";
import "./App.css";

import Spot from "./Spot";
// import { SpoterList } from "./helper/interface";

class App extends React.Component {
	public spot: any = [
		{
			children: [
				{
					children: [
						{
							spot: {
								name: "1#电解铜-华北",
								price: 312333.1,
							}
						},
						{
							spot: {
								name: "1#电解铜-华南",
								price: "-341234",
							}
						}
					],
					spot: {
						name: "1#电解铜",
						price: "-32",
					},
				},
			],
			spot: {
				name: "电解铜",
				price: 345313.1,
			},

		},
		{
			children: [
				{
					children: [
						{
							spot: {
								name: "1#电解铝-华北",
								price: 312333.1,
							}
						},
						{
							spot: {
								name: "1#电解铝-华南",
								price: "-341234",
							}
						}
					],
					spot: {
						name: "1#电解铝",
						price: "-32",
					},
				},
			],
			spot: {
				name: "电解铝",
				price: 345313.1,
			},

		}

	];

	public render() {
		return (
			<div className="App">
				<Spot spots={this.spot} />
			</div>
		);
	}
}

export default App;
