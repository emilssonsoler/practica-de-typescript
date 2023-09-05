interface Passanger{
    name: string,
    children?: string[]
}

const passanger1: Passanger = {
    name: 'Emilsson'
}

const passanger2: Passanger = {
    name: 'Pedro',
    children: ['juan','Paco']
}

const printChildren = (passanger: Passanger)=>{
    const {children} = passanger;
    console.log(children?.length || 0);
     
}

printChildren(passanger1);
printChildren(passanger2);