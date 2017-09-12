import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7614Component } from './my-comp-7614.component';

describe('MyComp7614Component', () => {
  let component: MyComp7614Component;
  let fixture: ComponentFixture<MyComp7614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
