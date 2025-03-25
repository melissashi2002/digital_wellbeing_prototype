"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 定义数据类型
interface ScreenTimeData {
  totalTime: string;
  unlockCount: number;
  firstUseTime: string;
  lastUseTime: string;
  longestSession: string;
  compareYesterday: { minutes: number; percentage: number };
}

interface AppUsage {
  id: number;
  name: string;
  time: string;
  percentage: number;
  category: string;
}

interface FocusTask {
  id: number;
  name: string;
  estimatedTime: string;
  completed: boolean;
}

interface FocusSettings {
  focusDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
}

interface AppDataContextType {
  screenTimeData: ScreenTimeData;
  appUsage: AppUsage[];
  focusTasks: FocusTask[];
  focusSettings: FocusSettings;
  currentFocusTask: FocusTask | null;
  updateFocusSettings: (settings: Partial<FocusSettings>) => void;
  addFocusTask: (task: Omit<FocusTask, 'id'>) => void;
  setCurrentFocusTask: (taskId: number | null) => void;
  completeFocusTask: (taskId: number) => void;
}

// 创建上下文
const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

// 提供默认数据
const defaultScreenTimeData: ScreenTimeData = {
  totalTime: '4h 32m',
  unlockCount: 47,
  firstUseTime: '07:32',
  lastUseTime: '22:15',
  longestSession: '42m',
  compareYesterday: { minutes: -15, percentage: 5.2 },
};

const defaultAppUsage: AppUsage[] = [
  { id: 1, name: '微信', time: '1h 25m', percentage: 32, category: '社交' },
  { id: 2, name: '浏览器', time: '52m', percentage: 19, category: '工具' },
  { id: 3, name: '抖音', time: '43m', percentage: 16, category: '娱乐' },
  { id: 4, name: '微博', time: '26m', percentage: 10, category: '社交' },
  { id: 5, name: '电话', time: '18m', percentage: 7, category: '通讯' },
];

const defaultFocusTasks: FocusTask[] = [
  { id: 1, name: '完成项目报告', estimatedTime: '2h', completed: false },
  { id: 2, name: '阅读研究论文', estimatedTime: '1h 30m', completed: false },
  { id: 3, name: '整理会议笔记', estimatedTime: '45m', completed: false },
];

const defaultFocusSettings: FocusSettings = {
  focusDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
};

// 提供者组件
export const AppDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [screenTimeData, setScreenTimeData] = useState<ScreenTimeData>(defaultScreenTimeData);
  const [appUsage, setAppUsage] = useState<AppUsage[]>(defaultAppUsage);
  const [focusTasks, setFocusTasks] = useState<FocusTask[]>(defaultFocusTasks);
  const [focusSettings, setFocusSettings] = useState<FocusSettings>(defaultFocusSettings);
  const [currentFocusTask, setCurrentFocusTask] = useState<FocusTask | null>(null);

  // 更新专注设置
  const updateFocusSettings = (settings: Partial<FocusSettings>) => {
    setFocusSettings(prev => ({ ...prev, ...settings }));
  };

  // 添加专注任务
  const addFocusTask = (task: Omit<FocusTask, 'id'>) => {
    const newTask = {
      ...task,
      id: Math.max(0, ...focusTasks.map(t => t.id)) + 1,
    };
    setFocusTasks(prev => [...prev, newTask]);
  };

  // 设置当前专注任务
  const handleSetCurrentFocusTask = (taskId: number | null) => {
    if (taskId === null) {
      setCurrentFocusTask(null);
      return;
    }
    
    const task = focusTasks.find(t => t.id === taskId);
    if (task) {
      setCurrentFocusTask(task);
    }
  };

  // 完成专注任务
  const completeFocusTask = (taskId: number) => {
    setFocusTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
    
    if (currentFocusTask?.id === taskId) {
      setCurrentFocusTask(null);
    }
  };

  const value = {
    screenTimeData,
    appUsage,
    focusTasks,
    focusSettings,
    currentFocusTask,
    updateFocusSettings,
    addFocusTask,
    setCurrentFocusTask: handleSetCurrentFocusTask,
    completeFocusTask,
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

// 自定义钩子，用于访问上下文
export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (context === undefined) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
}; 