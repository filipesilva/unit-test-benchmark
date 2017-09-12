import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3346Component } from './my-comp-3346.component';

describe('MyComp3346Component', () => {
  let component: MyComp3346Component;
  let fixture: ComponentFixture<MyComp3346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
