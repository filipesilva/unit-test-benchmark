import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3653Component } from './my-comp-3653.component';

describe('MyComp3653Component', () => {
  let component: MyComp3653Component;
  let fixture: ComponentFixture<MyComp3653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
