/*
* create a UI (input, addbutton, place to store all TODOs)
* functions, like edit, delete, create, checkMark
* navigations, [allTODOs, activeTODOs]

*/

function App() {
  const getFullTime = new Date().toDateString();
  const [value, setValue] = React.useState("");
  const [card, setCard] = React.useState(
    JSON.parse(localStorage.getItem("Card")) || []
  );


  React.useEffect(() => {
    localStorage.setItem("Card", JSON.stringify(card));
  }, [card]);

  function randomId() {
    const string = "1234567890abfcdef";
    let key = "";

    for (let i = 0; i < 5; i++) {
      let indexOfKey = Math.floor(Math.random() * string.length);
      key += string[indexOfKey];
    }
    return key;
  }

  function createCard() {
    const cardObj = {
      cardId: randomId(),
      text: value,
      state: false,
      date: getFullTime,
    };

    setCard((item) => {
      return [...item, cardObj];
    });

    setValue("");
  }

  function deleteCard(id) {
    const cards = JSON.parse(localStorage.getItem("Card"));
    setCard(cards.filter((item) => item.cardId !== id));
  }

 function selectCard(event, id){
    event.stopPropagation(); 
    const cards = JSON.parse(localStorage.getItem("Card"));
    const item = cards.find((itm) => itm.cardId === id);
    item.state === false ? item.state = true : item.state = false;
    setCard(cards);
 }

//  not Working .... 

  return (
    <div class="taskBox">
      <h2 class="head-text">TODOs</h2>
      <div class="input-area">
        <input
          type="text"
          placeholder="Type Your Tasks...."
          class="input-field"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button class="add-task" onClick={createCard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 plus-btn"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <div class="task-area">
        {card.length > 0 &&
          card.map((task) => (
            <div class="task--card">
            <div className="flex navigators">
            <button class="close" onClick={() => deleteCard(task.cardId)}>
                <i class="fa fa-times"></i>
              </button>
            {
              task.state &&(
              <input type="checkbox" className="mark--task" title="Mark It, when your task is done"
              checked='checked'
              onChange={(e)=> selectCard(e, task.cardId)}
            />
              )}
           {
            !task.state &&(
              <input type="checkbox" className="mark--task" title="Mark It, when your task is done"
                onChange={(e)=> selectCard(e, task.cardId)}
              />
            )}
          
            </div>
              <p>{task.text}</p>
              <span className="date-created">{task.date}</span>
            </div>
          ))}

        {card.length <= 0 && (
          <div className="empty--text">No TODOs created </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
