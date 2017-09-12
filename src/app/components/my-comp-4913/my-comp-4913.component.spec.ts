import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4913Component } from './my-comp-4913.component';

describe('MyComp4913Component', () => {
  let component: MyComp4913Component;
  let fixture: ComponentFixture<MyComp4913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
