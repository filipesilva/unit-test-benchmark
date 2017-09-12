import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3599Component } from './my-comp-3599.component';

describe('MyComp3599Component', () => {
  let component: MyComp3599Component;
  let fixture: ComponentFixture<MyComp3599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
