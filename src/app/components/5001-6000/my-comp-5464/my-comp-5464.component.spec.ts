import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5464Component } from './my-comp-5464.component';

describe('MyComp5464Component', () => {
  let component: MyComp5464Component;
  let fixture: ComponentFixture<MyComp5464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
