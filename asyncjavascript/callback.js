// console.log("görev1")
// console.log("görev2")
// console.log("görev3")

const func1 = ()=>{
    console.log("func 1 tamamlandı")
    func3()
}
const func2 = ()=>{
    console.log("func 2 tamamlandı")
    
}
const func3 = ()=>{
    console.log("func 3 tamamlandı")
    func2()
}

func1()


