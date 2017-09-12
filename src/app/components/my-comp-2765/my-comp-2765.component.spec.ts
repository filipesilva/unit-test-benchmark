import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2765Component } from './my-comp-2765.component';

describe('MyComp2765Component', () => {
  let component: MyComp2765Component;
  let fixture: ComponentFixture<MyComp2765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
