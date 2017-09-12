import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2267Component } from './my-comp-2267.component';

describe('MyComp2267Component', () => {
  let component: MyComp2267Component;
  let fixture: ComponentFixture<MyComp2267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
