import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6504Component } from './my-comp-6504.component';

describe('MyComp6504Component', () => {
  let component: MyComp6504Component;
  let fixture: ComponentFixture<MyComp6504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
