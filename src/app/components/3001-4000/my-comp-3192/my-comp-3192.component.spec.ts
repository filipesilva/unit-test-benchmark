import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3192Component } from './my-comp-3192.component';

describe('MyComp3192Component', () => {
  let component: MyComp3192Component;
  let fixture: ComponentFixture<MyComp3192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
