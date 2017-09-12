import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2580Component } from './my-comp-2580.component';

describe('MyComp2580Component', () => {
  let component: MyComp2580Component;
  let fixture: ComponentFixture<MyComp2580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
