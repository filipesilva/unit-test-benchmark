import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9469Component } from './my-comp-9469.component';

describe('MyComp9469Component', () => {
  let component: MyComp9469Component;
  let fixture: ComponentFixture<MyComp9469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
