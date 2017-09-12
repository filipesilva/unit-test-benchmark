import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3049Component } from './my-comp-3049.component';

describe('MyComp3049Component', () => {
  let component: MyComp3049Component;
  let fixture: ComponentFixture<MyComp3049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
