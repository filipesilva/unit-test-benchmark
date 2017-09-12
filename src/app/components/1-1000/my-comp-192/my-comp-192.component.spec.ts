import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp192Component } from './my-comp-192.component';

describe('MyComp192Component', () => {
  let component: MyComp192Component;
  let fixture: ComponentFixture<MyComp192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
