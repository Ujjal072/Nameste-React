/*
*
*
<div id = 'parent'>
  <div id = 'child'>
   <h1>I am H1 tag</h1>
   <h2>I am H2 tag</h2>
  </div>
<div id = 'child2'>
   <h1>I am H1 tag</h1>
   <h2>I am H2 tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/

// const parent  = React.createElement('div',{id:'parent'},React.createElement('div',{
//     id:'child'
// },React.createElement('h1',{},'I am a H1 tag')));

// const parent  = React.createElement('div',{id:'parent'},React.createElement('div',{
//     id:'child'
// },[React.createElement('h1',{},'I am a H1 tag'),React.createElement('h2',{},'I am a H2 tag')]));

const parent = React.createElement('div',{
    id:"parent"
},
[React.createElement('div',{id:'child'},[React.createElement('h1',{},'I am H1 tag'),React.createElement('h2',{},'I am H2 tag')]),React.createElement('div',{id:'child2'},[React.createElement('h1',{},'I am H1 tag'),React.createElement('h2',{},'I am H2 tag')])])

//JSX







console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

  


// const heading = React.createElement('h1',{
//     id:'heading',
//     xyz : 'abcd'
// },'Hello World from React!');

// console.log(heading); // return an object

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);