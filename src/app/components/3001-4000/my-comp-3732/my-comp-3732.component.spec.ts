import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3732Component } from './my-comp-3732.component';

describe('MyComp3732Component', () => {
  let component: MyComp3732Component;
  let fixture: ComponentFixture<MyComp3732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
