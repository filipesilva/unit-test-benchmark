import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3477Component } from './my-comp-3477.component';

describe('MyComp3477Component', () => {
  let component: MyComp3477Component;
  let fixture: ComponentFixture<MyComp3477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
