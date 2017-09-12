import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6188Component } from './my-comp-6188.component';

describe('MyComp6188Component', () => {
  let component: MyComp6188Component;
  let fixture: ComponentFixture<MyComp6188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
