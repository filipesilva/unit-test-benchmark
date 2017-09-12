import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6037Component } from './my-comp-6037.component';

describe('MyComp6037Component', () => {
  let component: MyComp6037Component;
  let fixture: ComponentFixture<MyComp6037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
