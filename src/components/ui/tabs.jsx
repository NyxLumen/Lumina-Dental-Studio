import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../utils/cn';

const TabsContext = createContext(null);

export const Tabs = ({ defaultValue, value, onValueChange, className, children }) => {
  const [selected, setSelected] = useState(defaultValue);
  const activeTab = value !== undefined ? value : selected;

  const handleSelect = (val) => {
    if (onValueChange) onValueChange(val);
    setSelected(val);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleSelect }}>
      <div className={cn('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ className, children }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 bg-[#f6f5f4] p-1.5 rounded-full border border-[#d6d6d6]/60',
        className
      )}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, className, children }) => {
  const { activeTab, handleSelect } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => handleSelect(value)}
      className={cn(
        'px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200 select-none',
        isActive
          ? 'bg-[#151581] text-white shadow-2xs'
          : 'text-[#151581] hover:bg-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, className, children }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;

  return <div className={cn('pt-4', className)}>{children}</div>;
};
