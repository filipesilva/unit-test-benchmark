import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4986Component } from './my-comp-4986.component';

describe('MyComp4986Component', () => {
  let component: MyComp4986Component;
  let fixture: ComponentFixture<MyComp4986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
