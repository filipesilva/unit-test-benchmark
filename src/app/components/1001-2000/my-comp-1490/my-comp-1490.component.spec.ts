import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1490Component } from './my-comp-1490.component';

describe('MyComp1490Component', () => {
  let component: MyComp1490Component;
  let fixture: ComponentFixture<MyComp1490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
