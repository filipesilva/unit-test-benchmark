import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3378Component } from './my-comp-3378.component';

describe('MyComp3378Component', () => {
  let component: MyComp3378Component;
  let fixture: ComponentFixture<MyComp3378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
