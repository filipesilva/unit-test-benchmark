import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5064Component } from './my-comp-5064.component';

describe('MyComp5064Component', () => {
  let component: MyComp5064Component;
  let fixture: ComponentFixture<MyComp5064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
