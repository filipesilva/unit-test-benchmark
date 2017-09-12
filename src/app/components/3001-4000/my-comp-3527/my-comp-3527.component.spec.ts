import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3527Component } from './my-comp-3527.component';

describe('MyComp3527Component', () => {
  let component: MyComp3527Component;
  let fixture: ComponentFixture<MyComp3527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
