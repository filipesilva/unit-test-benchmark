import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5087Component } from './my-comp-5087.component';

describe('MyComp5087Component', () => {
  let component: MyComp5087Component;
  let fixture: ComponentFixture<MyComp5087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
