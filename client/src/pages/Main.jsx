import { useEffect } from 'react';
import axios from 'axios';
import Navi from '../components/Nav';
import BookCard from '../components/BookCard';


export default function Main() {
	
	return (
		<>
        <Navi></Navi>
        <BookCard></BookCard>
		</>
	)
}