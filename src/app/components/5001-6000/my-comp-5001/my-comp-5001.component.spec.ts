import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5001Component } from './my-comp-5001.component';

describe('MyComp5001Component', () => {
  let component: MyComp5001Component;
  let fixture: ComponentFixture<MyComp5001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
