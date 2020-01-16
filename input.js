let connection;

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    
    stdin.on('data', (handleUserInput) => {
        if (handleUserInput === 'w' ) conn.write('Move: up'); 
        if (handleUserInput === 'a' ) conn.write('Move: left'); 
        if (handleUserInput === 'd' ) conn.write('Move: right'); 
        if (handleUserInput === 's' ) conn.write('Move: down');
        if (handleUserInput === 'p' ) conn.write('Say: Hello');      
        if (handleUserInput === '\u0003') {
        process.exit();
      }
    });
    return stdin;
  }


 module.exports = { setupInput };