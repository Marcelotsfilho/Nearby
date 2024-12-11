import { TouchableOpacity, TouchableOpacityProps, Text,TextProps, ActivityIndicator } from "react-native"
//IconProps as TableIconProps => renomeando para 
import { IconProps as TableIconProps} from "@tabler/icons-react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"
import { isLoading } from "expo-font"

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}


function Button({children, style, isLoading = false, ...rest}: ButtonProps){
  return (
  //activeOpacity regula o nivel de opacidade do botao
  <TouchableOpacity 
    style={[s.container, style]} 
    activeOpacity={0.5} 
    disabled={isLoading}
    {...rest} //todas as propriedades de Toucheble que nao foram usadas sao extraidas no rest
    >
    {isLoading ? (
      <ActivityIndicator size="small" color={colors.gray[100]} />
    ) : (
      children
    )}
  </TouchableOpacity>
  )
}
function Title({children}: TextProps){
  return(
    <Text style={s.title} >{children}</Text>
  )
}
type IconProps = {
  icon: React.ComponentType<TableIconProps>
}

function Icon({icon: Icon}: IconProps){
  return <Icon 
    size={24} color={colors.gray[100]}
  />
}
Button.Title = Title
Button.Icon = Icon
export {Button}