import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2321Component } from './my-comp-2321.component';

describe('MyComp2321Component', () => {
  let component: MyComp2321Component;
  let fixture: ComponentFixture<MyComp2321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
