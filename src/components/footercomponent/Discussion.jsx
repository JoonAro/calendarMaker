import { useState, useEffect } from 'react';
import firestore, { addPost, getPosts, addComment } from '../../communities/firebase2'; 

const DiscussionPage = () => {
  // State for questions
  const [questions, setQuestions] = useState([]);
  // State for new question form
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    content: '',
    author: 'YourUsername', // Default username
  });
  // State to manage form visibility
  const [showNewQuestionForm, setShowNewQuestionForm] = useState(true);

  // Function to fetch questions from Firebase
  useEffect(() => {
    const fetchQuestions = async () => {
      const posts = await getPosts(); // No need to pass firestore instance here
      setQuestions(posts);
    };
    fetchQuestions();
  }, []);

  // Function to handle form submission for new question
  const handleNewQuestionSubmit = async (e) => {
    e.preventDefault();
    if (newQuestion.title && newQuestion.content) {
      const newQuestionWithId = { ...newQuestion, date: new Date().toLocaleDateString(), answers: [] };
      await addPost(newQuestionWithId); // No need to pass firestore instance here
      setNewQuestion({ title: '', content: '', author: 'YourUsername' });
      setShowNewQuestionForm(false); // Hide the form after submission
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to handle form submission for new answer
  const handleNewAnswerSubmit = async (e, questionId) => {
    e.preventDefault();
    const answerContent = e.target.answer.value;
    if (answerContent) {
      const newAnswer = {
        author: 'YourUsername', // Default username
        content: answerContent,
        date: new Date().toLocaleDateString()
      };
      const questionToUpdate = questions.find(q => q.id === questionId);
      if (questionToUpdate) {
        const updatedAnswers = [...(questionToUpdate.answers || []), newAnswer];
        await addComment(questionId, newAnswer); // No need to pass firestore instance here
        const updatedQuestions = questions.map(q =>
          q.id === questionId ? { ...q, answers: updatedAnswers } : q
        );
        setQuestions(updatedQuestions);
        e.target.reset();
      } else {
        alert('Question not found.');
      }
    } else {
      alert('Please fill in the answer field.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Discussion Page</h1>
      
      {/* New question form */}
      {showNewQuestionForm ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2">Ask a Question:</h2>
          <form onSubmit={(e) => handleNewQuestionSubmit(e)}>
            <div className="mb-4">
              <label htmlFor="questionTitle" className="block text-gray-700 font-semibold mb-1">Title:</label>
              <input
                type="text"
                id="questionTitle"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your question title"
                value={newQuestion.title}
                onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="questionContent" className="block text-gray-700 font-semibold mb-1">Content:</label>
              <textarea
                id="questionContent"
                className="w-full h-32 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your question here..."
                value={newQuestion.content}
                onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit" // Add type submit
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Post Question
            </button>
          </form>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
          onClick={() => setShowNewQuestionForm(true)}
        >
          Ask a Question
        </button>
      )}

      {/* Existing questions */}
      {questions.map(question => (
        <div key={question.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">{question.title}</h2>
          <p className="text-gray-600 mb-4">Posted by {question.author} on {question.date}</p>
          <p>{question.content}</p>
          
          {/* Answers */}
          {question.answers && question.answers.map((answer, index) => (
            <div key={index} className="bg-gray-100 rounded p-2 mb-2 ml-4">
              <p className="text-gray-700"><span className="font-semibold">{answer.author}: </span>{answer.content}</p>
              <p className="text-gray-600 text-sm">{answer.date}</p>
            </div>
          ))}

          {/* Answer form */}
          <form className="mt-4" onSubmit={(e) => handleNewAnswerSubmit(e, question.id)}>
            <h3 className="text-lg font-semibold mb-2">Your Answer:</h3>
            <textarea
              name="answer"
              className="w-full h-24 p-2 border border-gray-300 rounded-md mb-2"
              placeholder="Write your answer here..."
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Post Answer
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default DiscussionPage;
