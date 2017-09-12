import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9303Component } from './my-comp-9303.component';

describe('MyComp9303Component', () => {
  let component: MyComp9303Component;
  let fixture: ComponentFixture<MyComp9303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
