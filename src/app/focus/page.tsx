"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { FiTarget, FiPlay, FiPause, FiEdit3, FiClock, FiPlus } from 'react-icons/fi';

export default function Focus() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-4 pb-20 md:pb-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">专注模式</h1>
        </section>
        
        <section className="mb-8">
          <div className="card text-center py-12">
            <div className="mb-6">
              <FiTarget className="h-16 w-16 text-primary-500 mx-auto" />
            </div>
            
            <div className="relative w-64 h-64 mx-auto mb-10">
              <div className="w-full h-full rounded-full border-8 border-gray-200 dark:border-gray-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold">25:00</p>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">专注时间</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mb-8">
              <button className="btn btn-primary rounded-full p-4">
                <FiPlay className="h-8 w-8" />
              </button>
              
              <button className="btn btn-outline rounded-full p-4" disabled>
                <FiPause className="h-8 w-8" />
              </button>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400">
              当前专注任务：<span className="font-semibold text-gray-900 dark:text-white">完成项目报告</span>
            </p>
            
            <button className="btn btn-outline mt-4 inline-flex items-center">
              <FiEdit3 className="mr-2 h-4 w-4" />
              更改任务
            </button>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">专注设置</h2>
          
          <div className="card mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">专注时长</span>
              <span>25分钟</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              defaultValue="25"
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5分钟</span>
              <span>60分钟</span>
            </div>
          </div>
          
          <div className="card mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">短休息时长</span>
              <span>5分钟</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              defaultValue="5"
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1分钟</span>
              <span>15分钟</span>
            </div>
          </div>
          
          <div className="card">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">长休息时长</span>
              <span>15分钟</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              defaultValue="15"
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5分钟</span>
              <span>30分钟</span>
            </div>
          </div>
        </section>
        
        <section className="mb-20 md:mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">专注任务</h2>
            <button className="btn btn-outline inline-flex items-center text-sm">
              <FiPlus className="mr-1 h-4 w-4" />
              添加任务
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">完成项目报告</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <FiClock className="mr-1 h-3 w-3" />
                    2小时预计
                  </p>
                </div>
                <button className="btn btn-primary text-sm">开始</button>
              </div>
            </div>
            
            <div className="card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">阅读研究论文</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <FiClock className="mr-1 h-3 w-3" />
                    1小时30分钟预计
                  </p>
                </div>
                <button className="btn btn-primary text-sm">开始</button>
              </div>
            </div>
            
            <div className="card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">整理会议笔记</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <FiClock className="mr-1 h-3 w-3" />
                    45分钟预计
                  </p>
                </div>
                <button className="btn btn-primary text-sm">开始</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Navbar />
    </main>
  );
} 