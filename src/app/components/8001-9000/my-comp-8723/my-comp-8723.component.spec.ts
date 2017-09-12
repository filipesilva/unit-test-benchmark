import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8723Component } from './my-comp-8723.component';

describe('MyComp8723Component', () => {
  let component: MyComp8723Component;
  let fixture: ComponentFixture<MyComp8723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
