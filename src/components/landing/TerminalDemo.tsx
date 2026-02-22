import { useEffect, useState, useRef } from 'react';

type LineType =
  | 'command'
  | 'output'
  | 'success'
  | 'info'
  | 'prompt'
  | 'spinner'
  | 'error';

interface ScriptLine {
  text: string;
  delay: number;
  type: LineType;
}

// Rustrial OS terminal demo script
const script: ScriptLine[] = [
  // Boot sequence
  { text: 'RUSTRIAL OS v0.1.0-alpha', delay: 800, type: 'info' },
  { text: 'Booting from /dev/sda1...', delay: 400, type: 'output' },
  { text: '✓ Memory initialized: 4096 MB', delay: 300, type: 'success' },
  { text: '✓ CPU detected: x86_64', delay: 250, type: 'success' },
  { text: '✓ Network drivers loaded', delay: 250, type: 'success' },
  { text: '✓ Async runtime started', delay: 300, type: 'success' },
  { text: '', delay: 400, type: 'output' },
  
  // System prompt
  { text: 'rustrial:~$ ls /kernel/modules', delay: 1000, type: 'command' },
  { text: 'memory.rs  network.rs  graphics.rs  scheduler.rs', delay: 600, type: 'output' },
  { text: '', delay: 300, type: 'output' },
  
  // Network command
  { text: 'rustrial:~$ netstat -i', delay: 1200, type: 'command' },
  { text: '◐ Querying network interfaces...', delay: 500, type: 'spinner' },
  { text: 'Interface  Status    IP Address      ', delay: 300, type: 'output' },
  { text: 'eth0       UP        192.168.1.100   ', delay: 200, type: 'output' },
  { text: 'lo         UP        127.0.0.1       ', delay: 200, type: 'output' },
  { text: '', delay: 400, type: 'output' },
  
  // Process command
  { text: 'rustrial:~$ ps aux', delay: 1000, type: 'command' },
  { text: 'PID    NAME             MEMORY    STATUS', delay: 300, type: 'output' },
  { text: '1      kernel           2048 KB   running', delay: 150, type: 'output' },
  { text: '2      async_runtime    512 KB    running', delay: 150, type: 'output' },
  { text: '3      network_stack    1024 KB   running', delay: 150, type: 'output' },
  { text: '', delay: 400, type: 'output' },
  
  // Memory stats
  { text: 'rustrial:~$ free -h', delay: 1000, type: 'command' },
  { text: '              Total    Used    Free', delay: 300, type: 'output' },
  { text: 'Memory:       4096 MB  1536 MB 2560 MB', delay: 200, type: 'output' },
  { text: 'Heap:         Safe     0 leaks ✓', delay: 400, type: 'success' },
  { text: '', delay: 600, type: 'output' },
  
  // Final message
  { text: 'rustrial:~$ echo "Welcome to Rustrial OS!"', delay: 1000, type: 'command' },
  { text: 'Welcome to Rustrial OS! 🚀', delay: 0, type: 'info' },
];

export function TerminalDemo() {
  const [lines, setLines] = useState<{ text: string; type: LineType }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const processLine = (index: number) => {
      if (index >= script.length) {
        // Restart after delay
        timeoutIds.push(
          setTimeout(() => {
            setLines([]);
            setCurrentIndex(0);
            setTypingText('');
            processLine(0);
          }, 8000)
        );
        return;
      }

      const line = script[index];

      // Type command lines character by character
      if (line.type === 'command') {
        setIsTyping(true);
        let charIdx = 0;

        const typeChar = () => {
          if (charIdx <= line.text.length) {
            setTypingText(line.text.slice(0, charIdx));
            charIdx++;
            timeoutIds.push(setTimeout(typeChar, 40));
          } else {
            setIsTyping(false);
            setLines(prev => [...prev, { text: line.text, type: line.type }]);
            setTypingText('');
            setCurrentIndex(index + 1);
            timeoutIds.push(setTimeout(() => processLine(index + 1), line.delay));
          }
        };
        typeChar();
      } else if (line.type === 'spinner') {
        // Show spinner briefly then replace with next line
        setLines(prev => [...prev, { text: line.text, type: line.type }]);
        setCurrentIndex(index + 1);
        timeoutIds.push(setTimeout(() => {
          setLines(prev => prev.slice(0, -1));
          processLine(index + 1);
        }, line.delay));
      } else {
        // Instant display for other lines
        setLines(prev => [...prev, { text: line.text, type: line.type }]);
        setCurrentIndex(index + 1);
        timeoutIds.push(setTimeout(() => processLine(index + 1), line.delay));
      }
    };

    processLine(0);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, typingText]);

  const getLineClass = (type: LineType) => {
    switch (type) {
      case 'command':
        return 'text-brand-400 font-semibold';
      case 'success':
        return 'text-green-400';
      case 'info':
        return 'text-cyan-400 font-bold';
      case 'error':
        return 'text-red-400';
      case 'spinner':
        return 'text-yellow-400 animate-pulse';
      case 'output':
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-950 rounded-lg border border-brand-500/20 shadow-2xl shadow-brand-500/10 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/80 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-gray-400 font-mono">rustrial-terminal</span>
        </div>
      </div>

      {/* Terminal content */}
      <div
        ref={scrollRef}
        className="p-3 sm:p-4 h-80 sm:h-96 overflow-y-auto font-mono text-xs sm:text-sm scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
      >
        {lines.map((line, i) => (
          <div key={i} className={`${getLineClass(line.type)} leading-relaxed`}>
            {line.text || '\u00A0'}
          </div>
        ))}
        {isTyping && (
          <div className="text-brand-400 font-semibold">
            {typingText}
            <span className="animate-pulse">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}
