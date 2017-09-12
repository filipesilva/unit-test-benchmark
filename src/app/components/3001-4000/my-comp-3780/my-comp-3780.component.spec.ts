import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3780Component } from './my-comp-3780.component';

describe('MyComp3780Component', () => {
  let component: MyComp3780Component;
  let fixture: ComponentFixture<MyComp3780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
