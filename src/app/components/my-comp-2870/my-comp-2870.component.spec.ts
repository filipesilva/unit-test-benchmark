import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2870Component } from './my-comp-2870.component';

describe('MyComp2870Component', () => {
  let component: MyComp2870Component;
  let fixture: ComponentFixture<MyComp2870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
