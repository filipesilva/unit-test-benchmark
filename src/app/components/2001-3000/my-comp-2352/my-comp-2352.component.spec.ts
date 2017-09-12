import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2352Component } from './my-comp-2352.component';

describe('MyComp2352Component', () => {
  let component: MyComp2352Component;
  let fixture: ComponentFixture<MyComp2352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
