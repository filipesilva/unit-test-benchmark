import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2111Component } from './my-comp-2111.component';

describe('MyComp2111Component', () => {
  let component: MyComp2111Component;
  let fixture: ComponentFixture<MyComp2111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
