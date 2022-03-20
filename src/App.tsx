import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import { Button, Loading } from 'carbon-components-react';
import { IArticle } from './interfaces';
import TableC from './components/TableC';
import ModalC from './components/ModalC';
import { Grid, Row, Column } from 'carbon-components-react';

const URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fb9a01961a354bde95a89f74f155179a';

function App() {
	const [articles, setArticles] = useState<IArticle[]>([]);
	const [loading, setLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const openModal = (key: any) => {
		setIsModalOpen(true);
		setActiveIndex(key);
	};

	const fetchArticle = async () => {
		try {
			setLoading(true);
			const {
				data: { articles },
			} = await axios.get(URL);
			setArticles(articles);

			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchArticle();
	}, []);

	if (loading) {
		return <Loading />;
	}
	if (articles.length <= 0) {
		return <h1>No articles found</h1>;
	}

	const modalContent = articles[activeIndex];

	return (
		<div className='App'>
			<h1>hello from typscript</h1>
			<Grid fullWidth>
				<Row>
					{/* <Column  lg={2}/> */}
					<Column lg={12}>
						<TableC articles={articles} onOpenModal={openModal} />
						<ModalC
							isModalOpen={isModalOpen}
							activeIndex={activeIndex}
							content={modalContent}
							onCloseModal={closeModal}
						/>
						<Button>Click me</Button>
					</Column>
					{/* <Column  lg={2}/> */}
				</Row>
			</Grid>
		</div>
	);
}

export default App;
