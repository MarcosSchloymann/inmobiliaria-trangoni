import  properties  from '../data/properties'

const getPropertiesByTipo = (tipo) => {

  const validTipo = ['alquiler', 'venta'];

    if (!validTipo.includes(tipo)) {
        throw new Error(`Tipo "${tipo}" no es correcto`)
    }


    return properties.filter(property => property.tipo === tipo);
}

export default getPropertiesByTipo