

const container={ display:'grid',
gridTemplateColumns: '25% 25% 25% 25%',

marginTop: '5%',
marginLeft: '5%',
marginright:'5%',

gridGap:'20px'}


const nav={width:'100%',height:'40px',border:'3px solid black',display:'flex',justifyContent: 'space-around'}




function App() {
  return (
    <div>
     <div style={nav}>
     <div>Home</div> 
     <div>about</div>
     <div>Books</div>
     </div>

<div style={container}>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDj4OgRgtZXmDJBJs-lSvQxIy_65ONomt7Q&usqp=CAU"}}/>
<p>java</p>
<p>$200</p>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SKo5wbVqNrslTSHzlkY8iaIqbGJfE2n9tQ&usqp=CAU"}}/>
<p>python</p>
<p>$ 20.00</p>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDj4OgRgtZXmDJBJs-lSvQxIy_65ONomt7Q&usqp=CAU"}}/>
<p>java</p>
<p>$200</p>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SKo5wbVqNrslTSHzlkY8iaIqbGJfE2n9tQ&usqp=CAU"}}/>
<p>python</p>
<p>$ 20.00</p>
</div>


<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDj4OgRgtZXmDJBJs-lSvQxIy_65ONomt7Q&usqp=CAU"}}/>
<p>java</p>
<p>$200</p>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SKo5wbVqNrslTSHzlkY8iaIqbGJfE2n9tQ&usqp=CAU"}}/>
<p>python</p>
<p>$ 20.00</p>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDj4OgRgtZXmDJBJs-lSvQxIy_65ONomt7Q&usqp=CAU"}}/>
<p>java</p>
<p>$200</p>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SKo5wbVqNrslTSHzlkY8iaIqbGJfE2n9tQ&usqp=CAU"}}/>
<p>python</p>
<p>$ 20.00</p>
</div>




</div>
    </div>
  );
}

export default App;
