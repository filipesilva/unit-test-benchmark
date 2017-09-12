import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3640Component } from './my-comp-3640.component';

describe('MyComp3640Component', () => {
  let component: MyComp3640Component;
  let fixture: ComponentFixture<MyComp3640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
