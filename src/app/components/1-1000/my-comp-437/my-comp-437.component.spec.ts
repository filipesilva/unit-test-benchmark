import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp437Component } from './my-comp-437.component';

describe('MyComp437Component', () => {
  let component: MyComp437Component;
  let fixture: ComponentFixture<MyComp437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
