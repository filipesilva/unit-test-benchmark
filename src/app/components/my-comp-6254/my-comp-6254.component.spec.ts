import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6254Component } from './my-comp-6254.component';

describe('MyComp6254Component', () => {
  let component: MyComp6254Component;
  let fixture: ComponentFixture<MyComp6254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
