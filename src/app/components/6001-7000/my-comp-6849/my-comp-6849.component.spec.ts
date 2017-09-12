import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6849Component } from './my-comp-6849.component';

describe('MyComp6849Component', () => {
  let component: MyComp6849Component;
  let fixture: ComponentFixture<MyComp6849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
