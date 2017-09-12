import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2855Component } from './my-comp-2855.component';

describe('MyComp2855Component', () => {
  let component: MyComp2855Component;
  let fixture: ComponentFixture<MyComp2855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
