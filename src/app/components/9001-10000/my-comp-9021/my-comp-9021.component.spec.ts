import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9021Component } from './my-comp-9021.component';

describe('MyComp9021Component', () => {
  let component: MyComp9021Component;
  let fixture: ComponentFixture<MyComp9021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
