import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5910Component } from './my-comp-5910.component';

describe('MyComp5910Component', () => {
  let component: MyComp5910Component;
  let fixture: ComponentFixture<MyComp5910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
