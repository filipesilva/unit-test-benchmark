import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1009Component } from './my-comp-1009.component';

describe('MyComp1009Component', () => {
  let component: MyComp1009Component;
  let fixture: ComponentFixture<MyComp1009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
