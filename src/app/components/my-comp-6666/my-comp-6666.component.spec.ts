import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6666Component } from './my-comp-6666.component';

describe('MyComp6666Component', () => {
  let component: MyComp6666Component;
  let fixture: ComponentFixture<MyComp6666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
