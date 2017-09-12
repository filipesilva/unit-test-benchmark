import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3232Component } from './my-comp-3232.component';

describe('MyComp3232Component', () => {
  let component: MyComp3232Component;
  let fixture: ComponentFixture<MyComp3232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
