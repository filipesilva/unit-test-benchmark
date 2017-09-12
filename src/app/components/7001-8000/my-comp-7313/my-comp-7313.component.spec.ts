import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7313Component } from './my-comp-7313.component';

describe('MyComp7313Component', () => {
  let component: MyComp7313Component;
  let fixture: ComponentFixture<MyComp7313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
