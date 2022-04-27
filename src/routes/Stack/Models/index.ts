import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {

    Home: undefined,
    PresetForm: undefined,
    Form1: {
        unidade: string,
        grau: string,
        serie: string
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>