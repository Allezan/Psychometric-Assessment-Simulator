'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Play, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

interface InteractiveMemoryProps {
  sectionId: string;
  questionId: string;
  onComplete: (scoreString: string) => void;
  savedAnswer?: string;
}

export const InteractiveMemory: React.FC<InteractiveMemoryProps> = ({
  sectionId,
  questionId,
  onComplete,
  savedAnswer
}) => {
  const [gameState, setGameState] = useState<'idle' | 'flashing' | 'user-turn' | 'success' | 'failure' | 'finished'>(
    savedAnswer ? 'finished' : 'idle'
  );
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(2);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userIndex, setUserIndex] = useState(0);
  const [activeCell, setActiveCell] = useState<number | null>(null);
  const [highlightedWrongCell, setHighlightedWrongCell] = useState<number | null>(null);

  const maxLevel = 5;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate sequence of length based on level (level 1 = 3 flashes, level 5 = 7 flashes)
  const generateSequence = (lvl: number) => {
    const seqLength = lvl + 2;
    const newSeq: number[] = [];
    for (let i = 0; i < seqLength; i++) {
      newSeq.push(Math.floor(Math.random() * 9));
    }
    return newSeq;
  };

  const startLevel = () => {
    const newSeq = generateSequence(level);
    setSequence(newSeq);
    setUserIndex(0);
    setGameState('flashing');
    flashSequence(newSeq);
  };

  const flashSequence = async (seq: number[]) => {
    let index = 0;
    const interval = 800; // time per block flash

    const tick = () => {
      if (index < seq.length) {
        setActiveCell(seq[index]);
        // Sound or visual feedback
        setTimeout(() => {
          setActiveCell(null);
          index++;
          timerRef.current = setTimeout(tick, 200); // gap between flashes
        }, 600);
      } else {
        setGameState('user-turn');
      }
    };

    timerRef.current = setTimeout(tick, 500);
  };

  const handleCellClick = (cellIndex: number) => {
    if (gameState !== 'user-turn') return;

    // Flash clicked cell briefly
    setActiveCell(cellIndex);
    setTimeout(() => setActiveCell(null), 200);

    const expectedCell = sequence[userIndex];

    if (cellIndex === expectedCell) {
      // Correct click
      if (userIndex === sequence.length - 1) {
        // Completed the sequence successfully!
        if (level === maxLevel) {
          // Finished the game!
          const resultStr = `Completed level ${maxLevel}/${maxLevel} successfully.`;
          setGameState('finished');
          onComplete(resultStr);
        } else {
          setGameState('success');
          setLevel(prev => prev + 1);
        }
      } else {
        setUserIndex(prev => prev + 1);
      }
    } else {
      // Wrong click
      setHighlightedWrongCell(cellIndex);
      setTimeout(() => setHighlightedWrongCell(null), 600);

      const nextLives = lives - 1;
      setLives(nextLives);

      if (nextLives <= 0) {
        // Game over
        const resultStr = `Failed at Level ${level}. Completed up to Level ${level - 1}.`;
        setGameState('finished');
        onComplete(resultStr);
      } else {
        setGameState('failure');
      }
    }
  };

  const retryLevel = () => {
    setUserIndex(0);
    setGameState('flashing');
    flashSequence(sequence);
  };

  const resetGame = () => {
    setLevel(1);
    setLives(2);
    setSequence([]);
    setGameState('idle');
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Card className="w-full max-w-xl mx-auto border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-md">
      <CardContent className="p-8 pt-8 flex flex-col items-center">
        
        {/* Header Stats */}
        <div className="w-full flex justify-between items-center mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Test Level</span>
            <span className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
              {gameState === 'finished' ? 'Completed' : `Level ${level} / ${maxLevel}`}
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-100 dark:border-zinc-800">
            <Heart className="h-4 w-4 fill-red-500 stroke-red-500" />
            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              {lives} {lives === 1 ? 'Life' : 'Lives'} Left
            </span>
          </div>
        </div>

        {/* Display Status Panel */}
        <div className="text-center h-12 mb-4 flex items-center justify-center">
          {gameState === 'idle' && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Click Start to begin Level {level}. Memorize the sequence.
            </p>
          )}
          {gameState === 'flashing' && (
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 animate-pulse">
              Memorize the sequence flashing below...
            </p>
          )}
          {gameState === 'user-turn' && (
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Your turn: Click the blocks in the correct order ({userIndex + 1}/{sequence.length})
            </p>
          )}
          {gameState === 'success' && (
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-semibold">Sequence Correct! Ready for Level {level}.</span>
            </div>
          )}
          {gameState === 'failure' && (
            <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm font-semibold">Incorrect sequence. Let's try again.</span>
            </div>
          )}
          {gameState === 'finished' && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Test completed. Response saved successfully.
            </p>
          )}
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 gap-3 w-64 h-64 mb-8">
          {Array.from({ length: 9 }).map((_, idx) => {
            const isFlashing = activeCell === idx;
            const isWrong = highlightedWrongCell === idx;

            let cellBg = 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-800';
            if (isFlashing) {
              cellBg = 'bg-zinc-900 border-zinc-950 scale-95 dark:bg-zinc-50 dark:border-zinc-100';
            } else if (isWrong) {
              cellBg = 'bg-red-500 border-red-600 dark:bg-red-700 dark:border-red-800 animate-shake';
            }

            return (
              <button
                key={idx}
                disabled={gameState !== 'user-turn'}
                onClick={() => handleCellClick(idx)}
                className={`w-full h-full border rounded-lg transition-all duration-150 focus:outline-none ${cellBg}`}
              />
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex gap-4">
          {gameState === 'idle' && (
            <Button onClick={startLevel} className="flex items-center gap-2">
              <Play className="h-4 w-4" /> Start Level {level}
            </Button>
          )}
          {gameState === 'success' && (
            <Button onClick={startLevel} className="flex items-center gap-2">
              Start Level {level}
            </Button>
          )}
          {gameState === 'failure' && (
            <Button onClick={retryLevel} variant="outline" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> Repeat Level {level}
            </Button>
          )}
          {gameState === 'finished' && (
            <div className="text-center">
              <p className="text-xs text-zinc-400 mb-2">Saved Response:</p>
              <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {savedAnswer || `Level ${level - 1} completed`}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
