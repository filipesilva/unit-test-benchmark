import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9012Component } from './my-comp-9012.component';

describe('MyComp9012Component', () => {
  let component: MyComp9012Component;
  let fixture: ComponentFixture<MyComp9012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
