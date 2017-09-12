import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2440Component } from './my-comp-2440.component';

describe('MyComp2440Component', () => {
  let component: MyComp2440Component;
  let fixture: ComponentFixture<MyComp2440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
