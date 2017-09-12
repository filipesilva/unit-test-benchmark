import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6697Component } from './my-comp-6697.component';

describe('MyComp6697Component', () => {
  let component: MyComp6697Component;
  let fixture: ComponentFixture<MyComp6697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
