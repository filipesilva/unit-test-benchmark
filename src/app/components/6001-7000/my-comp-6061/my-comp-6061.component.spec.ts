import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6061Component } from './my-comp-6061.component';

describe('MyComp6061Component', () => {
  let component: MyComp6061Component;
  let fixture: ComponentFixture<MyComp6061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
