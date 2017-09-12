import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5437Component } from './my-comp-5437.component';

describe('MyComp5437Component', () => {
  let component: MyComp5437Component;
  let fixture: ComponentFixture<MyComp5437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
