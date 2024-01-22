import { Pressable, StyleSheet, Text, View } from 'react-native';

export const CustomButton = () => {
  return (
    <View>
      <Pressable
        // onPress={handleSubmitEdit}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#7667ac' : '#6352a1',
          },
          styles.button,
        ]}
      >
        <Text style={styles.text}>Confirm</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 5,
    borderRadius: 8,
    elevation: 5,
    width: '100%',
  },
  text: {
    fontSize: 16,
    paddingVertical: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});
