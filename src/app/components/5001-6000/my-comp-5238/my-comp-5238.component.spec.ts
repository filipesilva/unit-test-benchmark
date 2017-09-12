import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5238Component } from './my-comp-5238.component';

describe('MyComp5238Component', () => {
  let component: MyComp5238Component;
  let fixture: ComponentFixture<MyComp5238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
