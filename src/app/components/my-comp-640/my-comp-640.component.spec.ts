import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp640Component } from './my-comp-640.component';

describe('MyComp640Component', () => {
  let component: MyComp640Component;
  let fixture: ComponentFixture<MyComp640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
