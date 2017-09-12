import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2804Component } from './my-comp-2804.component';

describe('MyComp2804Component', () => {
  let component: MyComp2804Component;
  let fixture: ComponentFixture<MyComp2804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
