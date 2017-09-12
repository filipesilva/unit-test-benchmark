import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5013Component } from './my-comp-5013.component';

describe('MyComp5013Component', () => {
  let component: MyComp5013Component;
  let fixture: ComponentFixture<MyComp5013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
