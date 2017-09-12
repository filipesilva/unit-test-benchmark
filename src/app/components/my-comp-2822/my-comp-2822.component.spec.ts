import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2822Component } from './my-comp-2822.component';

describe('MyComp2822Component', () => {
  let component: MyComp2822Component;
  let fixture: ComponentFixture<MyComp2822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
