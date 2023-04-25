import '../../assets/nav.scss';
import Color from './utils/color';
export const Nav = () => {
	return (
		<nav
			style={{
				background: Color('primary'),
			}}>
			<div id="navigation-tabs">
				<button id="tabs-messages"></button>
				<button id="tabs-friends"></button>
				<button id="tabs-servers"></button>
			</div>
			<div id="navigation-toolbar">
				<button id="activity-bar"></button>
				<button id="toolbar"></button>
			</div>
		</nav>
	);
};
