import { Loader as LoaderIcon } from 'lucide-react';

import styles from './styles.module.scss';

interface ILoaderProps {
	size?: number;
}

function Loader(props: ILoaderProps) {
	const { size } = props;
	return (
		<div className={styles.loader}>
			<LoaderIcon
				size={size}
				className={styles.icon}
			/>
		</div>
	);
}

export default Loader;
