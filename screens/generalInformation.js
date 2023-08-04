import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import tw from 'twrnc';

const estilos = {
  text: tw`text-lg mb-1 text-red-500 break-keep`,
  singleLineText: tw`flex-wrap: nowrap whitespace-nowrap break-keep`,
};

const smallInputStyle = {
  fontSize: 16,
  borderWidth: 1,
  borderColor: 'red',
  borderRadius: 5,
  padding: 6,
  height: 40,
  width: 60,
};

const GeneralInformation = () => {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [alignment, setAlignment] = useState('');
  const [classCharacter, setClassCharacter] = useState('');
  const [subclassCharacter, setSubclassCharacter] = useState('');
  const [level, setLevel] = useState('');
  const [experiencePoints, setExperiencePoints] = useState('');
  const [hitPoints, setHitPoints] = useState('');
  const [damageReceived, setDamageReceived] = useState('');
  const [armorClass, setArmorClass] = useState('');
  const [speed, setSpeed] = useState('');

  return (
    <View style={tw`flex-1 p-4 padding bg-white`}>

      <Text style={tw`text-2xl font-bold mb-4 text-red-500`}>Hoja de Personaje</Text>
      {/* // Nombre y foto */}
      <View style={tw`flex-row mb-4`}>
        <View style={tw`flex-1 mr-4`}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={estilos.text}>Nombre</Text>
          <TextInput
            style={tw`border border-red-500 rounded px-2 text-lg h-10`}
            value={name}
            onChangeText={setName}
            placeholder="Nombre del personaje"
          />
        </View>
    {/* // Textos largos */}
        <View>
        <View style={tw`flex-1 flex-row`}>
          <View style={tw`mb-2`}>
            <Text style={estilos.text}>Alineamiento</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={alignment}
              onChangeText={setAlignment}
              placeholder="Alineamiento del personaje"
            />
          </View>
          <View style={tw`mb-2`}>
            <Text style={estilos.text}>Raza</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={race}
              onChangeText={setRace}
              placeholder="Raza del personaje"
            />
          </View>
          <View style={tw`mb-2`}>
            <Text style={estilos.text}>Clase</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={classCharacter}
              onChangeText={setClassCharacter}
              placeholder="Clase del personaje"
            />
          </View>
          <View style={tw`mb-2`}>
            <Text style={estilos.text}>Arquetipo</Text>
            <TextInput
              style={tw`border border-red-500 rounded px-2 text-lg h-10`}
              value={subclassCharacter}
              onChangeText={setSubclassCharacter}
              placeholder="Subclase del personaje"
            />
          </View>
        </View>
        {/* //Valores Numericos */}
        <View style={tw`flex-1 flex-row`}>
          <View style={tw`flex-row`}>
            <View style={tw`flex-1 items-center`}>
              <Text style={estilos.text}>Nivel</Text>
              <TextInput
                style={[tw`border border-red-500 rounded px-1 w-2.5 text-lg h-10`, smallInputStyle]}
                value={level}
                onChangeText={setLevel}
                placeholder="Nivel del personaje"
                keyboardType="numeric"
                maxLength={3} 
              />
            </View>
            <View style={tw`flex-1 items-center w-72`}>
              <Text style={[estilos.text, estilos.singleLineText]}>Puntos de Experiencia</Text>
              <TextInput
                style={[tw`border border-red-500 rounded px-2 text-lg h-10`, smallInputStyle]}
                value={experiencePoints}
                onChangeText={setExperiencePoints}
                placeholder="Puntos de experiencia"
                keyboardType="numeric"
                maxLength={3} 
              />
            </View>
          </View>
          <View style={tw`flex-row mb-2`}>
            <View style={tw`flex-1 items-center mr-2`}>
              <Text style={estilos.text}>Puntos de Golpe</Text>
              <TextInput
                style={[tw`border border-red-500 rounded px-2 text-lg h-10`, smallInputStyle]}
                value={hitPoints}
                onChangeText={setHitPoints}
                placeholder="Puntos de golpe"
                keyboardType="numeric"
                maxLength={3} 
              />
            </View>
            <View style={tw`flex-1 ml-2 items-center w-72`}>
              <Text style={[estilos.text, estilos.singleLineText]}>Clase de Armadura</Text>
              <TextInput
                style={[tw`border border-red-500 rounded px-2 text-lg h-10`, smallInputStyle]}
                value={armorClass}
                onChangeText={setArmorClass}
                placeholder="Clase de Armadura"
                keyboardType="numeric"
                maxLength={3} 
              />
            </View>
          </View>
          <View style={tw`flex-row mb-2`}>
            <View style={tw`flex-1 items-center mr-2`}>
              <Text style={estilos.text}>Velocidad</Text>
              <TextInput
                style={[tw`border border-red-500 rounded px-2 text-lg h-10`, smallInputStyle]}
                value={speed}
                onChangeText={setSpeed}
                placeholder="Velocidad del personaje"
                keyboardType="numeric"
                maxLength={3} 
              />
            </View>
            <View style={tw`flex-1 items-center ml-2 w-72`}>
              <Text style={[estilos.text, estilos.singleLineText]}>Daño Recibido</Text>
              <TextInput
                style={[tw`border border-red-500 rounded px-2 text-lg h-10`, smallInputStyle]}
                value={damageReceived}
                onChangeText={setDamageReceived}
                placeholder="Daño recibido"
                keyboardType="numeric"
                maxLength={3} 
              />
            </View>
          </View>
        </View>

        </View>
      </View>
    </View>
  );
};

export default GeneralInformation;
