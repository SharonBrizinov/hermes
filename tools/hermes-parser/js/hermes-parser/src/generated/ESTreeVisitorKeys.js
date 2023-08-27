/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @format
 * @generated
 */

/*
 * !!! GENERATED FILE !!!
 *
 * Any manual changes to this file will be overwritten. To regenerate run `yarn build`.
 */

// lint directives to let us do some basic validation of generated files
/* eslint no-undef: 'error', no-unused-vars: ['error', {vars: "local"}], no-redeclare: 'error' */
/* global $NonMaybeType, Partial, $ReadOnly, $ReadOnlyArray */

'use strict';

module.exports = {
  AnyTypeAnnotation: [],
  ArrayExpression: ['elements'],
  ArrayPattern: ['elements', 'typeAnnotation'],
  ArrayTypeAnnotation: ['elementType'],
  ArrowFunctionExpression: [
    'id',
    'params',
    'body',
    'typeParameters',
    'returnType',
    'predicate',
  ],
  AssignmentExpression: ['left', 'right'],
  AssignmentPattern: ['left', 'right'],
  AwaitExpression: ['argument'],
  BigIntLiteralTypeAnnotation: [],
  BigIntTypeAnnotation: [],
  BinaryExpression: ['left', 'right'],
  BlockStatement: ['body'],
  BooleanLiteralTypeAnnotation: [],
  BooleanTypeAnnotation: [],
  BreakStatement: ['label'],
  CallExpression: ['callee', 'typeArguments', 'arguments'],
  CatchClause: ['param', 'body'],
  ChainExpression: ['expression'],
  ClassBody: ['body'],
  ClassDeclaration: [
    'id',
    'typeParameters',
    'superClass',
    'superTypeParameters',
    'implements',
    'decorators',
    'body',
  ],
  ClassExpression: [
    'id',
    'typeParameters',
    'superClass',
    'superTypeParameters',
    'implements',
    'decorators',
    'body',
  ],
  ClassImplements: ['id', 'typeParameters'],
  ComponentDeclaration: [
    'id',
    'params',
    'body',
    'typeParameters',
    'rendersType',
  ],
  ComponentParameter: ['name', 'local'],
  ComponentTypeAnnotation: ['params', 'rest', 'typeParameters', 'rendersType'],
  ComponentTypeParameter: ['name', 'typeAnnotation'],
  ConditionalExpression: ['test', 'consequent', 'alternate'],
  ConditionalTypeAnnotation: [
    'checkType',
    'extendsType',
    'trueType',
    'falseType',
  ],
  ContinueStatement: ['label'],
  DebuggerStatement: [],
  DeclareClass: [
    'id',
    'typeParameters',
    'extends',
    'implements',
    'mixins',
    'body',
  ],
  DeclareComponent: ['id', 'params', 'rest', 'typeParameters', 'rendersType'],
  DeclaredPredicate: ['value'],
  DeclareEnum: ['id', 'body'],
  DeclareExportAllDeclaration: ['source'],
  DeclareExportDeclaration: ['declaration', 'specifiers', 'source'],
  DeclareFunction: ['id', 'predicate'],
  DeclareInterface: ['id', 'typeParameters', 'extends', 'body'],
  DeclareModule: ['id', 'body'],
  DeclareModuleExports: ['typeAnnotation'],
  DeclareOpaqueType: ['id', 'typeParameters', 'impltype', 'supertype'],
  DeclareTypeAlias: ['id', 'typeParameters', 'right'],
  DeclareVariable: ['id'],
  DoWhileStatement: ['body', 'test'],
  EmptyStatement: [],
  EmptyTypeAnnotation: [],
  EnumBooleanBody: ['members'],
  EnumBooleanMember: ['id', 'init'],
  EnumDeclaration: ['id', 'body'],
  EnumDefaultedMember: ['id'],
  EnumNumberBody: ['members'],
  EnumNumberMember: ['id', 'init'],
  EnumStringBody: ['members'],
  EnumStringMember: ['id', 'init'],
  EnumSymbolBody: ['members'],
  ExistsTypeAnnotation: [],
  ExportAllDeclaration: ['exported', 'source'],
  ExportDefaultDeclaration: ['declaration'],
  ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
  ExportSpecifier: ['exported', 'local'],
  ExpressionStatement: ['expression'],
  ForInStatement: ['left', 'right', 'body'],
  ForOfStatement: ['left', 'right', 'body'],
  ForStatement: ['init', 'test', 'update', 'body'],
  FunctionDeclaration: [
    'id',
    'params',
    'body',
    'typeParameters',
    'returnType',
    'predicate',
  ],
  FunctionExpression: [
    'id',
    'params',
    'body',
    'typeParameters',
    'returnType',
    'predicate',
  ],
  FunctionTypeAnnotation: [
    'params',
    'this',
    'returnType',
    'rest',
    'typeParameters',
  ],
  FunctionTypeParam: ['name', 'typeAnnotation'],
  GenericTypeAnnotation: ['id', 'typeParameters'],
  Identifier: ['typeAnnotation'],
  IfStatement: ['test', 'consequent', 'alternate'],
  ImportAttribute: ['key', 'value'],
  ImportDeclaration: ['specifiers', 'source', 'assertions'],
  ImportDefaultSpecifier: ['local'],
  ImportExpression: ['source', 'attributes'],
  ImportNamespaceSpecifier: ['local'],
  ImportSpecifier: ['imported', 'local'],
  IndexedAccessType: ['objectType', 'indexType'],
  InferredPredicate: [],
  InferTypeAnnotation: ['typeParameter'],
  InterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
  InterfaceExtends: ['id', 'typeParameters'],
  InterfaceTypeAnnotation: ['extends', 'body'],
  IntersectionTypeAnnotation: ['types'],
  JSXAttribute: ['name', 'value'],
  JSXClosingElement: ['name'],
  JSXClosingFragment: [],
  JSXElement: ['openingElement', 'children', 'closingElement'],
  JSXEmptyExpression: [],
  JSXExpressionContainer: ['expression'],
  JSXFragment: ['openingFragment', 'children', 'closingFragment'],
  JSXIdentifier: [],
  JSXMemberExpression: ['object', 'property'],
  JSXNamespacedName: ['namespace', 'name'],
  JSXOpeningElement: ['name', 'attributes', 'typeArguments'],
  JSXOpeningFragment: [],
  JSXSpreadAttribute: ['argument'],
  JSXSpreadChild: ['expression'],
  JSXText: [],
  KeyofTypeAnnotation: ['argument'],
  LabeledStatement: ['label', 'body'],
  LogicalExpression: ['left', 'right'],
  MemberExpression: ['object', 'property'],
  MetaProperty: ['meta', 'property'],
  MethodDefinition: ['key', 'value'],
  MixedTypeAnnotation: [],
  NewExpression: ['callee', 'typeArguments', 'arguments'],
  NullableTypeAnnotation: ['typeAnnotation'],
  NullLiteralTypeAnnotation: [],
  NumberLiteralTypeAnnotation: [],
  NumberTypeAnnotation: [],
  ObjectExpression: ['properties'],
  ObjectPattern: ['properties', 'typeAnnotation'],
  ObjectTypeAnnotation: [
    'properties',
    'indexers',
    'callProperties',
    'internalSlots',
  ],
  ObjectTypeCallProperty: ['value'],
  ObjectTypeIndexer: ['id', 'key', 'value', 'variance'],
  ObjectTypeInternalSlot: ['id', 'value'],
  ObjectTypeMappedTypeProperty: [
    'keyTparam',
    'propType',
    'sourceType',
    'variance',
  ],
  ObjectTypeProperty: ['key', 'value', 'variance'],
  ObjectTypeSpreadProperty: ['argument'],
  OpaqueType: ['id', 'typeParameters', 'impltype', 'supertype'],
  OptionalIndexedAccessType: ['objectType', 'indexType'],
  PrivateIdentifier: [],
  Program: ['body'],
  Property: ['key', 'value'],
  PropertyDefinition: ['key', 'value', 'variance', 'typeAnnotation'],
  QualifiedTypeIdentifier: ['qualification', 'id'],
  QualifiedTypeofIdentifier: ['qualification', 'id'],
  RestElement: ['argument'],
  ReturnStatement: ['argument'],
  SequenceExpression: ['expressions'],
  SpreadElement: ['argument'],
  StringLiteralTypeAnnotation: [],
  StringTypeAnnotation: [],
  Super: [],
  SwitchCase: ['test', 'consequent'],
  SwitchStatement: ['discriminant', 'cases'],
  SymbolTypeAnnotation: [],
  TaggedTemplateExpression: ['tag', 'quasi'],
  TemplateElement: [],
  TemplateLiteral: ['quasis', 'expressions'],
  ThisExpression: [],
  ThisTypeAnnotation: [],
  ThrowStatement: ['argument'],
  TryStatement: ['block', 'handler', 'finalizer'],
  TupleTypeAnnotation: ['types'],
  TupleTypeLabeledElement: ['label', 'elementType', 'variance'],
  TupleTypeSpreadElement: ['label', 'typeAnnotation'],
  TypeAlias: ['id', 'typeParameters', 'right'],
  TypeAnnotation: ['typeAnnotation'],
  TypeCastExpression: ['expression', 'typeAnnotation'],
  TypeofTypeAnnotation: ['argument'],
  TypeOperator: ['typeAnnotation'],
  TypeParameter: ['bound', 'variance', 'default'],
  TypeParameterDeclaration: ['params'],
  TypeParameterInstantiation: ['params'],
  TypePredicate: ['parameterName', 'typeAnnotation'],
  UnaryExpression: ['argument'],
  UnionTypeAnnotation: ['types'],
  UpdateExpression: ['argument'],
  VariableDeclaration: ['declarations'],
  VariableDeclarator: ['id', 'init'],
  Variance: [],
  VoidTypeAnnotation: [],
  WhileStatement: ['test', 'body'],
  WithStatement: ['object', 'body'],
  YieldExpression: ['argument'],
  OptionalMemberExpression: ['object', 'property'],
  OptionalCallExpression: ['callee', 'typeArguments', 'arguments'],
  Literal: [],
};
