import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9162Component } from './my-comp-9162.component';

describe('MyComp9162Component', () => {
  let component: MyComp9162Component;
  let fixture: ComponentFixture<MyComp9162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
