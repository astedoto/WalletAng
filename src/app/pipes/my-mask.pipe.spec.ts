import { MyMaskPipe } from './my-mask.pipe';

describe('MyMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
