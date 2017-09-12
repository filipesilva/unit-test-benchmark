import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5021Component } from './my-comp-5021.component';

describe('MyComp5021Component', () => {
  let component: MyComp5021Component;
  let fixture: ComponentFixture<MyComp5021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
