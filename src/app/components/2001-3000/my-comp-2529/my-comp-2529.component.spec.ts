import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2529Component } from './my-comp-2529.component';

describe('MyComp2529Component', () => {
  let component: MyComp2529Component;
  let fixture: ComponentFixture<MyComp2529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
