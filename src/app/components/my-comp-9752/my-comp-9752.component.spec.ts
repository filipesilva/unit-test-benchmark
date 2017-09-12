import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9752Component } from './my-comp-9752.component';

describe('MyComp9752Component', () => {
  let component: MyComp9752Component;
  let fixture: ComponentFixture<MyComp9752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
