import { useEffect, useState } from 'react';
import TableView from '~/components/table-view';
import { QUESTION_TABLE_HEADERS } from '~/constants/TABLE_HEADERS';

const Dashboard = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const getQuestions = async () => {
            const response = await fetch('/api/questions');
            // get the json object that contains the property with model name questions
            const jsonValue = await response.json();
            const { questions } = jsonValue;
            setQuestions(questions);
        };
        getQuestions().catch((error) => console.log(error));
    }, []);
    return (
        <div style={{display:"flex" , justifyContent:"center","alignItems":"center"}}>
            <TableView data={questions} headers={QUESTION_TABLE_HEADERS} />;
        </div>
    );
};

export default Dashboard;
