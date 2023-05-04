// function htmlTree(node) {
//    let htmlString = `<${node.tagName}`; //Код <${node.tagName} створює відкриваючий HTML-тег з назвою тегу, яку ми отримали в якості параметру node.
//    const attrs = node.attrs || {};
//    for (let attr in attrs) {
//       htmlString += ` ${attr}='${attrs[attr]}'`; //Тоді код ${attr}='${attrs[attr]} створить атрибути HTML-тегу зі значеннями, що містяться в об'єкті attrs.
//    }
//    htmlString += ">";
//    if (node.children) {
//       for (let i = 0; i < node.children.length; i++) {
//          htmlString += htmlTree(node.children[i]);
//       }
//    } else if (node.children === "") {
//       htmlString += "";
//    } else {
//       htmlString += `${node.children}`;
//    }
//    htmlString += `</${node.tagName}>`;
//    return htmlString;
// }


// function domTree(parent, node) {
//    // Створюємо елемент з назвою, заданою в tagName
//    const element = document.createElement(node.tagName);
//    // Проходимося по всіх властивостях attrs і додаємо їх як атрибути до створеного елемента
//    for (let attr in node.attrs) {
//       element.setAttribute(attr, node.attrs[attr]);
//    }
//    // Проходимося по всіх дітях поточного вузла і рекурсивно викликаємо domTree для кожного з них
//    node.children.forEach(function (childNode) {
//       domTree(element, childNode);
//    });
//    // Додаємо створений елемент як дочірній до переданого в функцію parent
//    parent.appendChild(element);
// }


// function deepCopy(obj) {
//    // перевіряємо тип даних переданого елементу
//    if (typeof obj !== 'object' || obj === null) {
//       return obj; // повертаємо примітивний тип даних або null
//    }
//    // створюємо новий об'єкт або масив в залежності від типу переданого елементу
//    const copy = Array.isArray(obj) ? [] : {};
//    // рекурсивно копіюємо вкладені елементи
//    for (const key in obj) {
//       copy[key] = deepCopy(obj[key]);
//    }
//    return copy;
// }


// function stringify(obj) {
//    // перевірка на примітиви
//    if (typeof obj === "string") {
//       return `"${obj}"`;
//    }
//    if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
//       return String(obj);
//    }
//    // перевірка на масив
//    if (Array.isArray(obj)) {
//       const arrString = obj.map((el) => stringify(el));
//       return `[${arrString.join(",")}]`;
//    }
//    // перевірка на об'єкт
//    if (typeof obj === "object") {
//       const objKeys = Object.keys(obj);
//       const objString = objKeys.reduce((acc, key) => {
//          if (typeof obj[key] !== "undefined") {
//             const val = stringify(obj[key]);
//             if (val) {
//                return acc.concat(`"${key}":${val}`);
//             }
//          }
//          return acc;
//       }, []);
//       return `{${objString.join(",")}}`;
//    }
//    return undefined;
// }


function getElementById(idToFind) {
   function walker(node) {
      if (node.id === idToFind) {
         throw node;
      }
      if (node.children) {
         for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const result = walker(child);
            if (result) {
               return result;
            }
         }
      }
      return null;
   }

   try {
      walker(document.body);
   } catch (e) {
      return e;
   }
   return null;
}
