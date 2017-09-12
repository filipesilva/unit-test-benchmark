import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3310Component } from './my-comp-3310.component';

describe('MyComp3310Component', () => {
  let component: MyComp3310Component;
  let fixture: ComponentFixture<MyComp3310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
