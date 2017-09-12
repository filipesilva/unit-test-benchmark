import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9474Component } from './my-comp-9474.component';

describe('MyComp9474Component', () => {
  let component: MyComp9474Component;
  let fixture: ComponentFixture<MyComp9474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
