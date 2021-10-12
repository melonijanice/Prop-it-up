import Person from './components/person';
const people_details = [{firstName:"Janice",lastName:"Mathias",age:"33",hairColor:"Black"},
{firstName:"Laxine",lastName:"Saldanha",age:"33",hairColor:"Black"},
{firstName:"Jaden",lastName:"Saldanha",age:"2",hairColor:"Black"},
{firstName:"Joella",lastName:"Mathias",age:"27",hairColor:"Black"}
]

function App() {
  return (
    <div>
    {people_details.map( item => (<Person firstName={item.firstName}
                                          lastName={item.lastName}
                                           age={item.age} 
                                           hairColor={item.hairColor}></Person>) )}
    </div>
  );
}

export default App;
