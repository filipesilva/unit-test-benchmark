import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2950Component } from './my-comp-2950.component';

describe('MyComp2950Component', () => {
  let component: MyComp2950Component;
  let fixture: ComponentFixture<MyComp2950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
