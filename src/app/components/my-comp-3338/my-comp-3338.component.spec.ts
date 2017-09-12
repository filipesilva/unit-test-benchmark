import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3338Component } from './my-comp-3338.component';

describe('MyComp3338Component', () => {
  let component: MyComp3338Component;
  let fixture: ComponentFixture<MyComp3338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
