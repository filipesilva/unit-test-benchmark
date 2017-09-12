import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5140Component } from './my-comp-5140.component';

describe('MyComp5140Component', () => {
  let component: MyComp5140Component;
  let fixture: ComponentFixture<MyComp5140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
