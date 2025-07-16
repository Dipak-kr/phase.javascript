// Immediately Involve Funcyion Expressions (IIFE)
// Global scope lai pollution ko karan le problem hunxa kunnai kunnai bela, tai pollution lai hatauna lai iffe function lai use garinxa....

(function chai() {
    console.log('hero no 1');
    
} )();

 ( (name) => {
    console.log('I am a superMan');
    
 })();

 // iffe structure
 (() => {

 })();