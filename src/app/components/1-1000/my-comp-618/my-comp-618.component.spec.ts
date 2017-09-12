import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp618Component } from './my-comp-618.component';

describe('MyComp618Component', () => {
  let component: MyComp618Component;
  let fixture: ComponentFixture<MyComp618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
