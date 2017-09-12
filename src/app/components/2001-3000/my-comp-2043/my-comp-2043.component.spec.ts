import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2043Component } from './my-comp-2043.component';

describe('MyComp2043Component', () => {
  let component: MyComp2043Component;
  let fixture: ComponentFixture<MyComp2043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
