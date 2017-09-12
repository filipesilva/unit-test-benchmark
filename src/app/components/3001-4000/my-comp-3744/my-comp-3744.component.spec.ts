import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3744Component } from './my-comp-3744.component';

describe('MyComp3744Component', () => {
  let component: MyComp3744Component;
  let fixture: ComponentFixture<MyComp3744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
