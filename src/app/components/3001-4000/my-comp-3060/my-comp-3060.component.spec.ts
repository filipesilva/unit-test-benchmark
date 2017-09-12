import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3060Component } from './my-comp-3060.component';

describe('MyComp3060Component', () => {
  let component: MyComp3060Component;
  let fixture: ComponentFixture<MyComp3060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
