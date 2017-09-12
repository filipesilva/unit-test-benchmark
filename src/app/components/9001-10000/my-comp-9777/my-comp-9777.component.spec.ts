import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9777Component } from './my-comp-9777.component';

describe('MyComp9777Component', () => {
  let component: MyComp9777Component;
  let fixture: ComponentFixture<MyComp9777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
