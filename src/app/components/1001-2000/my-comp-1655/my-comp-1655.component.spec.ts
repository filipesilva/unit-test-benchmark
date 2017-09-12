import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1655Component } from './my-comp-1655.component';

describe('MyComp1655Component', () => {
  let component: MyComp1655Component;
  let fixture: ComponentFixture<MyComp1655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
