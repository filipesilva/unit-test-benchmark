import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2093Component } from './my-comp-2093.component';

describe('MyComp2093Component', () => {
  let component: MyComp2093Component;
  let fixture: ComponentFixture<MyComp2093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
