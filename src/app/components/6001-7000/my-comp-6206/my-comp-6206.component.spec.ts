import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6206Component } from './my-comp-6206.component';

describe('MyComp6206Component', () => {
  let component: MyComp6206Component;
  let fixture: ComponentFixture<MyComp6206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
