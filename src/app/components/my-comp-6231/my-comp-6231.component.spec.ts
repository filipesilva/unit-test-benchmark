import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6231Component } from './my-comp-6231.component';

describe('MyComp6231Component', () => {
  let component: MyComp6231Component;
  let fixture: ComponentFixture<MyComp6231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
