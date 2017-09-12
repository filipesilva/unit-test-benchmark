import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3704Component } from './my-comp-3704.component';

describe('MyComp3704Component', () => {
  let component: MyComp3704Component;
  let fixture: ComponentFixture<MyComp3704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
