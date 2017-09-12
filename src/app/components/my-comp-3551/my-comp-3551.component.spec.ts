import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3551Component } from './my-comp-3551.component';

describe('MyComp3551Component', () => {
  let component: MyComp3551Component;
  let fixture: ComponentFixture<MyComp3551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
