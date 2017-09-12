import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4893Component } from './my-comp-4893.component';

describe('MyComp4893Component', () => {
  let component: MyComp4893Component;
  let fixture: ComponentFixture<MyComp4893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
