import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2241Component } from './my-comp-2241.component';

describe('MyComp2241Component', () => {
  let component: MyComp2241Component;
  let fixture: ComponentFixture<MyComp2241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
