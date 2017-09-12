import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6676Component } from './my-comp-6676.component';

describe('MyComp6676Component', () => {
  let component: MyComp6676Component;
  let fixture: ComponentFixture<MyComp6676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
