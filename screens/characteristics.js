import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'twrnc';

const Characteristics = () => {

  const [strength, setStrength] = useState('');
  const [dexterity, setDexterity] = useState('');
  const [constitution, setConstitution] = useState('');
  const [intelligence, setIntelligence] = useState('');
  const [wisdom, setWisdom] = useState('');
  const [charisma, setCharisma] = useState('');

  return (
    <View style={tw`flex-1 p-4 bg-red`}>
      <View style={tw`mb-4`}>
        <View style={tw`flex-row mb-4`}>
          <View style={tw`flex-1 mr-2`}>
            <Text style={tw`text-lg mb-1 text-red-500`}>Fuerza</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={strength}
              onChangeText={setStrength}
              placeholder="Fuerza del personaje"
              keyboardType="numeric"
            />
          </View>
          <View style={tw`flex-1 ml-2`}>
            <Text style={tw`text-lg mb-1 text-red-500`}>Destreza</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={dexterity}
              onChangeText={setDexterity}
              placeholder="Destreza del personaje"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={tw`flex-row mb-4`}>
          <View style={tw`flex-1 mr-2`}>
            <Text style={tw`text-lg mb-1 text-red-500`}>Constitución</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={constitution}
              onChangeText={setConstitution}
              placeholder="Constitución del personaje"
              keyboardType="numeric"
            />
          </View>
          <View style={tw`flex-1 ml-2`}>
            <Text style={tw`text-lg mb-1 text-red-500`}>Inteligencia</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={intelligence}
              onChangeText={setIntelligence}
              placeholder="Inteligencia del personaje"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 mr-2`}>
            <Text style={tw`text-lg mb-1 text-red-500`}>Sabiduría</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={wisdom}
              onChangeText={setWisdom}
              placeholder="Sabiduría del personaje"
              keyboardType="numeric"
            />
          </View>
          <View style={tw`flex-1 ml-2`}>
            <Text style={tw`text-lg mb-1 text-red-500`}>Carisma</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={charisma}
              onChangeText={setCharisma}
              placeholder="Carisma del personaje"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Characteristics;