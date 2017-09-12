import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9404Component } from './my-comp-9404.component';

describe('MyComp9404Component', () => {
  let component: MyComp9404Component;
  let fixture: ComponentFixture<MyComp9404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
