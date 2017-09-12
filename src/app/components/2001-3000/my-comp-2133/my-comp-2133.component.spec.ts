import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2133Component } from './my-comp-2133.component';

describe('MyComp2133Component', () => {
  let component: MyComp2133Component;
  let fixture: ComponentFixture<MyComp2133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
