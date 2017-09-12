import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6575Component } from './my-comp-6575.component';

describe('MyComp6575Component', () => {
  let component: MyComp6575Component;
  let fixture: ComponentFixture<MyComp6575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
