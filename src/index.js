import { Map } from 'immutable';

let book = Map({ title: 'Harry Potter' });

function publish(upp){
    return upp.set('isPublished',true);
}

let ttt = publish(book);

console.log(ttt.toJS());