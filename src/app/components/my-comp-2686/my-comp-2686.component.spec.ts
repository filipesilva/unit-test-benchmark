import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2686Component } from './my-comp-2686.component';

describe('MyComp2686Component', () => {
  let component: MyComp2686Component;
  let fixture: ComponentFixture<MyComp2686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
