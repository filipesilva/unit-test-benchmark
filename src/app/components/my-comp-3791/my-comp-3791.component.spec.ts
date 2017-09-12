import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3791Component } from './my-comp-3791.component';

describe('MyComp3791Component', () => {
  let component: MyComp3791Component;
  let fixture: ComponentFixture<MyComp3791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
