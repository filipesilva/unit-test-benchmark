import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3964Component } from './my-comp-3964.component';

describe('MyComp3964Component', () => {
  let component: MyComp3964Component;
  let fixture: ComponentFixture<MyComp3964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
