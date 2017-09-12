import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1036Component } from './my-comp-1036.component';

describe('MyComp1036Component', () => {
  let component: MyComp1036Component;
  let fixture: ComponentFixture<MyComp1036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
