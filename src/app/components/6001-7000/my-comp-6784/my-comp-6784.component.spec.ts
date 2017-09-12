import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6784Component } from './my-comp-6784.component';

describe('MyComp6784Component', () => {
  let component: MyComp6784Component;
  let fixture: ComponentFixture<MyComp6784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
