import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6880Component } from './my-comp-6880.component';

describe('MyComp6880Component', () => {
  let component: MyComp6880Component;
  let fixture: ComponentFixture<MyComp6880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
