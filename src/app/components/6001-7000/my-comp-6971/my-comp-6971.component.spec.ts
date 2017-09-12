import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6971Component } from './my-comp-6971.component';

describe('MyComp6971Component', () => {
  let component: MyComp6971Component;
  let fixture: ComponentFixture<MyComp6971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
