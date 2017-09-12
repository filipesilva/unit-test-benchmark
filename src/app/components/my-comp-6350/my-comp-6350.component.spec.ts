import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6350Component } from './my-comp-6350.component';

describe('MyComp6350Component', () => {
  let component: MyComp6350Component;
  let fixture: ComponentFixture<MyComp6350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
