import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6513Component } from './my-comp-6513.component';

describe('MyComp6513Component', () => {
  let component: MyComp6513Component;
  let fixture: ComponentFixture<MyComp6513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
