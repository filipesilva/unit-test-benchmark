import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2305Component } from './my-comp-2305.component';

describe('MyComp2305Component', () => {
  let component: MyComp2305Component;
  let fixture: ComponentFixture<MyComp2305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
