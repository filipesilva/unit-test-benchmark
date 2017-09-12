import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2109Component } from './my-comp-2109.component';

describe('MyComp2109Component', () => {
  let component: MyComp2109Component;
  let fixture: ComponentFixture<MyComp2109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
