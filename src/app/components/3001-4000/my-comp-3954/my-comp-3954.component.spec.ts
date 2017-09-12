import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3954Component } from './my-comp-3954.component';

describe('MyComp3954Component', () => {
  let component: MyComp3954Component;
  let fixture: ComponentFixture<MyComp3954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
