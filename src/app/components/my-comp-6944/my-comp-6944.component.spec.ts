import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6944Component } from './my-comp-6944.component';

describe('MyComp6944Component', () => {
  let component: MyComp6944Component;
  let fixture: ComponentFixture<MyComp6944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
