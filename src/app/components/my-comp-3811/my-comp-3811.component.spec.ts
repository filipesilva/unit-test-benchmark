import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3811Component } from './my-comp-3811.component';

describe('MyComp3811Component', () => {
  let component: MyComp3811Component;
  let fixture: ComponentFixture<MyComp3811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
