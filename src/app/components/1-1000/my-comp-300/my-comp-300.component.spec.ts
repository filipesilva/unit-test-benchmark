import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp300Component } from './my-comp-300.component';

describe('MyComp300Component', () => {
  let component: MyComp300Component;
  let fixture: ComponentFixture<MyComp300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
