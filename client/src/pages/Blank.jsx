import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImSpinner } from 'react-icons/im';
import styled from 'styled-components';

export default function Blank() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/main');
		},500);
	},[])

	return (
		<Container>
			<Spinner>
				<ImSpinner></ImSpinner>
			</Spinner>
		</Container>
	)
}
const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 260px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    margin-top: 0;
    height: 100vh;
  }
`;
const Spinner = styled.div `
	animation: spin 2s linear infinite;
	svg {
    width: 50px;
    height: 50px;
  }
	@keyframes spin {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }
`