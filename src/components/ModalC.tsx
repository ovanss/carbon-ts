import { Modal } from 'carbon-components-react';
import React from 'react';
import { IArticle } from '../interfaces';

interface IModalProps {
	isModalOpen: boolean;
	activeIndex: any;
	content: IArticle;
	onCloseModal: () => void;
}

const ModalC: React.FC<IModalProps> = ({ isModalOpen, activeIndex, content, onCloseModal }) => {
	// const modalContent = articles.filter(article => article.)

	return (
		<Modal
			open={isModalOpen}
			modalHeading={content.title}
			secondaryButtonText='Cancel'
			primaryButtonText='Add'
			children={<p>{content.content}</p>}
			closeButtonLabel='Close'
			onRequestClose={onCloseModal}
			passiveModal
		/>
	);
};

export default ModalC;
