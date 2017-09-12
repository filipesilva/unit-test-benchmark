import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3676Component } from './my-comp-3676.component';

describe('MyComp3676Component', () => {
  let component: MyComp3676Component;
  let fixture: ComponentFixture<MyComp3676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
