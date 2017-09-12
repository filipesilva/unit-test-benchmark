import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6829Component } from './my-comp-6829.component';

describe('MyComp6829Component', () => {
  let component: MyComp6829Component;
  let fixture: ComponentFixture<MyComp6829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
