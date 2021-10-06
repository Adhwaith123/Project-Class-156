AFRAME.registerComponent("log",{
   schema:{
       message:{type:"string",default:"Car"}
   },
   init:function(){
       console.log(this.data.message)
   }
})
