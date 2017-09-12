import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5597Component } from './my-comp-5597.component';

describe('MyComp5597Component', () => {
  let component: MyComp5597Component;
  let fixture: ComponentFixture<MyComp5597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
