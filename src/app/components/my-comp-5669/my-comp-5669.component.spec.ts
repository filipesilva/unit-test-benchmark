import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5669Component } from './my-comp-5669.component';

describe('MyComp5669Component', () => {
  let component: MyComp5669Component;
  let fixture: ComponentFixture<MyComp5669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
