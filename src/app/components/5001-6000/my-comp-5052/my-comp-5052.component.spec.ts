import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5052Component } from './my-comp-5052.component';

describe('MyComp5052Component', () => {
  let component: MyComp5052Component;
  let fixture: ComponentFixture<MyComp5052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
