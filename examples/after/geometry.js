// Generated by NeptuneCoffee 0.2.0
define([
  './geometry/namespace',
  './geometry/box',
  './geometry/circle',
  './geometry/solids'
], function(Geometry, Box, Circle) {
  if (typeof Box == 'function') {Geometry.Box = Box; Box.namespace = Geometry;}
  if (typeof Circle == 'function') {Geometry.Circle = Circle; Circle.namespace = Geometry;}
  return Geometry;
});
