import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5470Component } from './my-comp-5470.component';

describe('MyComp5470Component', () => {
  let component: MyComp5470Component;
  let fixture: ComponentFixture<MyComp5470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
