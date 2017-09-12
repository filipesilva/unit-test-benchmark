import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6701Component } from './my-comp-6701.component';

describe('MyComp6701Component', () => {
  let component: MyComp6701Component;
  let fixture: ComponentFixture<MyComp6701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
