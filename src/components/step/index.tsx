import { Text, View } from "react-native";
//importando uma biblioteca flexivel de icones atraves do props
import { IconProps } from "@tabler/icons-react-native";

import {colors} from "@/styles/theme"
import {s} from "./styles"

//definicao com typeScript os objetos que pertence ao props
type Props = {
  title: string
  description: string
  //como o icone e um componente, deve ser passado como componente <Generic> TypeScript
  icon: React.ComponentType<IconProps>
}

//props é utilizado para fazer com que tenhamos a flexibiliade do componente
//ou seja, poderemos aproveitar o componente com titulos/subtitulos/imagens diferentes

export function Step({ title, description, icon: Icon }: Props){
  return(
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base}/>}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}