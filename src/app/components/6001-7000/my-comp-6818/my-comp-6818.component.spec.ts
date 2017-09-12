import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6818Component } from './my-comp-6818.component';

describe('MyComp6818Component', () => {
  let component: MyComp6818Component;
  let fixture: ComponentFixture<MyComp6818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
