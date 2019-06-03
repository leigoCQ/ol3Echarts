import EChartsLayer from 'ol-echarts';
import {
  describe, beforeEach,
  afterEach, it,
  expect,
} from 'jasmine';

describe('indexSpec', () => {
  beforeEach(() => {
  });

  afterEach(() => {
  });

  describe('create layer', () => {
    it('creat dom content', () => {
      const layer = new EChartsLayer({
        stopEvent: false,
        hideOnMoving: false,
        hideOnZooming: false,
        forcedPrecomposeRerender: false,
      }, {});

      expect(layer).toBeDefined();

      expect(layer instanceof EChartsLayer).toBe(true);
    });
  });
});
