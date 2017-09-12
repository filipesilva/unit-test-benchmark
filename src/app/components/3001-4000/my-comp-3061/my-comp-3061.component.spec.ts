import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3061Component } from './my-comp-3061.component';

describe('MyComp3061Component', () => {
  let component: MyComp3061Component;
  let fixture: ComponentFixture<MyComp3061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
