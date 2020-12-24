import ts, {CustomTransformers} from 'typescript';

function numberDoubleTransformer<T extends ts.Node>(): ts.TransformerFactory<T> {
  return context => {
    const visit: ts.Visitor = node => {
      if (ts.isNumericLiteral(node)) {
        return ts.createNumericLiteral(`${node.text} * 2`);
        ;
      }
      return ts.visitEachChild(node, child => visit(child), context);
    };
    return node => ts.visitNode(node, visit);
  };
}


export const customTransformers: CustomTransformers = {
  before: [numberDoubleTransformer()]
}
