import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5471Component } from './my-comp-5471.component';

describe('MyComp5471Component', () => {
  let component: MyComp5471Component;
  let fixture: ComponentFixture<MyComp5471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
