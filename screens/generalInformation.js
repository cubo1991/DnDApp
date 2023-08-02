import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'twrnc';

const GeneralInformation = () => {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [classCharacter, setClassCharacter] = useState('');
  const [level, setLevel] = useState('');
  const [experiencePoints, setExperiencePoints] = useState('');
  const [hitPoints, setHitPoints] = useState('');
  const [armorClass, setArmorClass] = useState('');
  const [speed, setSpeed] = useState('');

  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4 text-red-500`}>Hoja de Personaje</Text>
      <View style={tw`flex-row mb-4`}>
        <View style={tw`flex-1 mr-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Nombre</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={name}
            onChangeText={setName}
            placeholder="Nombre del personaje"
          />
        </View>
        <View style={tw`flex-1 ml-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Raza</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={race}
            onChangeText={setRace}
            placeholder="Raza del personaje"
          />
        </View>
      </View>
      <View style={tw`flex-row mb-4`}>
        <View style={tw`flex-1 mr-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Clase</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={classCharacter}
            onChangeText={setClassCharacter}
            placeholder="Clase del personaje"
          />
        </View>
        <View style={tw`flex-1 ml-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Nivel</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={level}
            onChangeText={setLevel}
            placeholder="Nivel del personaje"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={tw`flex-row mb-4`}>
        <View style={tw`flex-1 mr-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Puntos de Experiencia</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={experiencePoints}
            onChangeText={setExperiencePoints}
            placeholder="Puntos de experiencia"
            keyboardType="numeric"
          />
        </View>
        <View style={tw`flex-1 ml-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Puntos de Golpe</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={hitPoints}
            onChangeText={setHitPoints}
            placeholder="Puntos de golpe"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={tw`flex-row`}>
        <View style={tw`flex-1 mr-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Clase de Armadura</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={armorClass}
            onChangeText={setArmorClass}
            placeholder="Clase de Armadura"
            keyboardType="numeric"
          />
        </View>
        <View style={tw`flex-1 ml-2`}>
          <Text style={tw`text-lg mb-1 text-red-500`}>Velocidad</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={speed}
            onChangeText={setSpeed}
            placeholder="Velocidad del personaje"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

export default GeneralInformation;
