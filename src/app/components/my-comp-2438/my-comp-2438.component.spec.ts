import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2438Component } from './my-comp-2438.component';

describe('MyComp2438Component', () => {
  let component: MyComp2438Component;
  let fixture: ComponentFixture<MyComp2438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
