import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5054Component } from './my-comp-5054.component';

describe('MyComp5054Component', () => {
  let component: MyComp5054Component;
  let fixture: ComponentFixture<MyComp5054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
