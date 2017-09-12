import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp327Component } from './my-comp-327.component';

describe('MyComp327Component', () => {
  let component: MyComp327Component;
  let fixture: ComponentFixture<MyComp327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
