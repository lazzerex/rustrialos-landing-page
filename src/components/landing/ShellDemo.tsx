import { useState, useRef, useEffect } from 'react';

interface CommandResult {
  command: string;
  output: string;
}

export function ShellDemo() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandResult[]>([
    { 
      command: '', 
      output: 'Rustrial OS Shell v0.1.0\nType "help" for available commands. Try: ls, cat, ping, ifconfig, run, clear\n' 
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const fileSystem = {
    '/': ['scripts', 'kernel'],
    '/scripts': ['fibonacci.rscript', 'factorial.rscript', 'collatz.rscript', 'prime_checker.rscript'],
    '/kernel': ['main.rs', 'lib.rs', 'memory.rs', 'network.rs']
  };

  const executeCommand = (cmd: string) => {
    const parts = cmd.trim().split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    let output = '';

    switch (command) {
      case 'help':
        output = `Available commands:
  ls [path]       - List directory contents
  cat <file>      - Display file contents
  ping <host>     - Ping a host
  ifconfig        - Show network configuration
  run <script>    - Execute a RustrialScript
  clear           - Clear the terminal
  help            - Show this help message`;
        break;

      case 'ls':
        const path = args[0] || '/';
        if (fileSystem[path as keyof typeof fileSystem]) {
          output = fileSystem[path as keyof typeof fileSystem].join('\n');
        } else {
          output = `ls: cannot access '${path}': No such file or directory`;
        }
        break;

      case 'cat':
        if (!args[0]) {
          output = 'cat: missing file operand';
        } else if (args[0] === 'fibonacci.rscript') {
          output = `// Fibonacci sequence
fn fibonacci(n) {
    if n <= 1 { return n; }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

print(fibonacci(10));`;
        } else if (args[0] === 'main.rs') {
          output = `#![no_std]
#![no_main]

use rustrial_os::println;

#[no_mangle]
pub extern "C" fn _start() -> ! {
    println!("Rustrial OS booting...");
    rustrial_os::init();
    // ... kernel initialization
}`;
        } else {
          output = `cat: ${args[0]}: No such file or directory`;
        }
        break;

      case 'ping':
        if (!args[0]) {
          output = 'ping: missing host operand';
        } else {
          output = `PING ${args[0]} (93.184.216.34) 56(84) bytes of data.
64 bytes from ${args[0]}: icmp_seq=1 ttl=64 time=12.3 ms
64 bytes from ${args[0]}: icmp_seq=2 ttl=64 time=11.8 ms
64 bytes from ${args[0]}: icmp_seq=3 ttl=64 time=12.1 ms
--- ${args[0]} ping statistics ---
3 packets transmitted, 3 received, 0% packet loss`;
        }
        break;

      case 'ifconfig':
        output = `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>
        inet 10.0.2.15  netmask 255.255.255.0  broadcast 10.0.2.255
        ether 52:54:00:12:34:56  txqueuelen 1000  (Ethernet)
        RX packets 1247  bytes 149382 (145.8 KiB)
        TX packets 892  bytes 67234 (65.6 KiB)
        Driver: RTL8139`;
        break;

      case 'run':
        if (!args[0]) {
          output = 'run: missing script operand';
        } else if (args[0] === 'fibonacci.rscript') {
          output = `Loading fibonacci.rscript...
Compiling to bytecode...
Executing on RustrialScript VM...

Result: 55
Execution time: 2.3ms`;
        } else if (args[0].endsWith('.rscript')) {
          output = `Loading ${args[0]}...
Executing on RustrialScript VM...
Done.`;
        } else {
          output = `run: ${args[0]}: Not a valid RustrialScript file`;
        }
        break;

      case 'clear':
        setHistory([{ command: '', output: 'Rustrial OS Shell v0.1.0\nType "help" for available commands.\n' }]);
        setInput('');
        return;

      case '':
        break;

      default:
        output = `${command}: command not found. Type "help" for available commands.`;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="w-full py-[var(--space-section-md)] overflow-hidden relative bg-gradient-to-b from-background via-background-secondary to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try the <span className="text-brand-500">Interactive Shell</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Experience the Rustrial OS shell right in your browser. Type commands and see real-time responses.
          </p>
        </div>

        <div className="relative rounded-xl border border-brand-500/30 bg-gray-950 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400 font-mono">
              rustrial-shell
            </div>
          </div>

          {/* Terminal Output */}
          <div 
            ref={outputRef}
            className="h-[400px] overflow-y-auto p-4 font-mono text-sm bg-black/40 backdrop-blur-sm scrollbar-thin scrollbar-thumb-brand-500/50 scrollbar-track-gray-900"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="mb-2">
                {item.command && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-500">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-gray-300">{item.command}</span>
                  </div>
                )}
                {item.output && (
                  <pre className="text-gray-400 whitespace-pre-wrap mb-2 ml-6">
                    {item.output}
                  </pre>
                )}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-brand-500">➜</span>
              <span className="text-cyan-400">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-gray-300 font-mono"
                placeholder="Type a command..."
                autoFocus
                spellCheck={false}
              />
            </form>
          </div>

          {/* Helper Text */}
          <div className="px-4 py-2 bg-gray-900/50 border-t border-gray-800 text-xs text-gray-500 font-mono">
            <span className="text-brand-400">Tip:</span> Try commands like{' '}
            <code className="text-cyan-400">ls /scripts</code>,{' '}
            <code className="text-cyan-400">cat fibonacci.rscript</code>, or{' '}
            <code className="text-cyan-400">run fibonacci.rscript</code>
          </div>
        </div>
      </div>
    </section>
  );
}
