import React from 'react';
import {
	Link,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from 'carbon-components-react';
import { IArticle } from '../interfaces';

interface TableProps {
	articles: IArticle[]; // or Array<IArticle>
	onOpenModal: (key: string) => void;
}

const TableC: React.FC<TableProps> = ({ articles, onOpenModal }) => {
	if (articles.length === 0) return null;
	const headers = Object.keys(articles[0]).filter(header => header !== 'surce');

	return (
		<Table>
			<TableHead>
				<TableRow>
					{headers.map(header => {
						// console.log(header)
						return (
							<TableHeader id={header} key={header}>
								{header}
							</TableHeader>
						);
					})}
				</TableRow>
			</TableHead>
			<TableBody>
				{articles.map((row: { [key: string]: any }, index: any) => {
					// or use any
					console.log('row:', row);

					return (
						<TableRow key={row.title} onClick={() => onOpenModal(index)}>
							{Object.keys(row)
								.filter(key => key !== 'soure')
								.map(key => {
									console.log('key:', key);
									if (key === 'source') return <TableCell key={key}>{row[key]!['name']}</TableCell>;
									if (key === 'url')
										return (
											<TableCell key={key}>
												<Link href={row[key]}>Read More &gt;&gt;</Link>
											</TableCell>
										);
									if (key === 'urlToImage')
										return (
											<TableCell key={key}>
												<img src={row[key]} alt='' style={{ width: '100%', height: '100%' }} />
											</TableCell>
										);
									if (key === 'description' || key === 'content')
										return <TableCell key={key}>{row[key].substring(0, 20)}....</TableCell>;
									else return <TableCell key={key}>{row[key]}</TableCell>;
								})}
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default TableC;
