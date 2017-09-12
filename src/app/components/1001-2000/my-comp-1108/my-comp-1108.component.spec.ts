import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1108Component } from './my-comp-1108.component';

describe('MyComp1108Component', () => {
  let component: MyComp1108Component;
  let fixture: ComponentFixture<MyComp1108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
