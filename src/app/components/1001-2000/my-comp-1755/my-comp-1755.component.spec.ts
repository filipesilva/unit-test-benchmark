import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1755Component } from './my-comp-1755.component';

describe('MyComp1755Component', () => {
  let component: MyComp1755Component;
  let fixture: ComponentFixture<MyComp1755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
