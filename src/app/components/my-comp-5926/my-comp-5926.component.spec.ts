import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5926Component } from './my-comp-5926.component';

describe('MyComp5926Component', () => {
  let component: MyComp5926Component;
  let fixture: ComponentFixture<MyComp5926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
