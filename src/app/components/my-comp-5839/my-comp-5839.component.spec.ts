import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5839Component } from './my-comp-5839.component';

describe('MyComp5839Component', () => {
  let component: MyComp5839Component;
  let fixture: ComponentFixture<MyComp5839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
