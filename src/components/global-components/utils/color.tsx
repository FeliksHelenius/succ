import Theme from './theme';
export default function Color(color: string) {
	return Theme().get(color);
}
