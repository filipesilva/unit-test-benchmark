import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3556Component } from './my-comp-3556.component';

describe('MyComp3556Component', () => {
  let component: MyComp3556Component;
  let fixture: ComponentFixture<MyComp3556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
