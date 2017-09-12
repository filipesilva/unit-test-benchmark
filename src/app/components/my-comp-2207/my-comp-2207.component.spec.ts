import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2207Component } from './my-comp-2207.component';

describe('MyComp2207Component', () => {
  let component: MyComp2207Component;
  let fixture: ComponentFixture<MyComp2207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
