import { z } from "zod"
import { objectListSchema } from "./schema-definitions"

type DataObjects = z.infer<typeof objectListSchema>

export const getDataObjects = (async () => {  
  const res = await fetch('https://api.restful-api.dev/objects')
  const dataObjects: DataObjects = await res.json()
  var temp: {}[] = []
  dataObjects.forEach(dataObject =>{
    temp.push(flattenObject(dataObject))
  })
  var fields: { field: string }[] = []
  Object.keys(temp[0]).map(key => fields.push({ field: key }))
  console.log(fields);
  return { data: temp,fields: fields } 
})

export const flattenObject = (obj:any, parentKey?:string) => {
  let result:any = {};

  Object.keys(obj).forEach((key:string) => {
    const value = obj[key];
    const _key:string = parentKey ? key : key;
    if (typeof value === 'object') {
      result = { ...result, ...flattenObject(value, _key) };
    } else {
      result[_key] = value;
    }
    console.log(`parentKey: "${parentKey}", _key: "${_key}"`);
  });

  return result;
};