'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string;
  text?: string;
  iconName?: string;
  size?: number;
  className?: string;
  textStyle?: React.CSSProperties;
  onClick?: () => void;
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/app_logo.png',
  text,
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  textStyle,
  onClick,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center gap-2'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {src ? (
        <AppImage
          src={src}
          alt="Logo"
          width={size}
          height={size}
          className="flex-shrink-0"
          priority={true}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}

      {text && (
        <span className="text-xl font-bold" style={textStyle}>
          {text}
        </span>
      )}
    </div>
  );
});

AppLogo.displayName = 'AppLogo';

export default AppLogo;
