import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9995Component } from './my-comp-9995.component';

describe('MyComp9995Component', () => {
  let component: MyComp9995Component;
  let fixture: ComponentFixture<MyComp9995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
