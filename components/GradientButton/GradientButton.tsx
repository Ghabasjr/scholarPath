// import React from 'react';
// import { TouchableOpacity, Text, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// interface GradientButtonProps {
//   text: string;
//   onPress: () => void;
//   disabled?: boolean;
//   className?: string;
//   textClassName?: string;
// }

// const GradientButton: React.FC<GradientButtonProps> = ({
//   text,
//   onPress,
//   disabled = false,
//   className = '',
//   textClassName = '',
// }) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       disabled={disabled}
//       activeOpacity={0.8}
//       className={`${className} ${disabled ? 'opacity-50' : ''}`}
//     >
//       <LinearGradient
//         colors={['#5E46F4', '#7B68EE']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={{
//           borderRadius: 8,
//           paddingVertical: 16,
//           paddingHorizontal: 24,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Text className={`text-white text-base font-bold ${textClassName}`}>
//           {text}
//         </Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };

// export default GradientButton;

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface GradientButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;       // custom container style
  textStyle?: TextStyle;   // custom text style
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onPress,
  disabled = false,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.buttonContainer, disabled && styles.disabled, style]}
    >
      <LinearGradient
        colors={['#5E46F4', '#7B68EE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={[styles.buttonText, textStyle, { color: '#fff' }]}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',           // full width by default
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // default white text
  },
  disabled: {
    opacity: 0.5,
  },
});

export default GradientButton;

