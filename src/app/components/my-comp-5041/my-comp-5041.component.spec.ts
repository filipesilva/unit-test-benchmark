import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5041Component } from './my-comp-5041.component';

describe('MyComp5041Component', () => {
  let component: MyComp5041Component;
  let fixture: ComponentFixture<MyComp5041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
