import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5766Component } from './my-comp-5766.component';

describe('MyComp5766Component', () => {
  let component: MyComp5766Component;
  let fixture: ComponentFixture<MyComp5766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
