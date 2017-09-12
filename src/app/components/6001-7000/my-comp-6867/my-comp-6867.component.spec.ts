import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6867Component } from './my-comp-6867.component';

describe('MyComp6867Component', () => {
  let component: MyComp6867Component;
  let fixture: ComponentFixture<MyComp6867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
