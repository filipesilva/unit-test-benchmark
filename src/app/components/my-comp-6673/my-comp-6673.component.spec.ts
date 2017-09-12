import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6673Component } from './my-comp-6673.component';

describe('MyComp6673Component', () => {
  let component: MyComp6673Component;
  let fixture: ComponentFixture<MyComp6673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
