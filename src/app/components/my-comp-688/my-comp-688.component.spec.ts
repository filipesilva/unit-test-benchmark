import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp688Component } from './my-comp-688.component';

describe('MyComp688Component', () => {
  let component: MyComp688Component;
  let fixture: ComponentFixture<MyComp688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
