import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6021Component } from './my-comp-6021.component';

describe('MyComp6021Component', () => {
  let component: MyComp6021Component;
  let fixture: ComponentFixture<MyComp6021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
