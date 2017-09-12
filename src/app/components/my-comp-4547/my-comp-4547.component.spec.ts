import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4547Component } from './my-comp-4547.component';

describe('MyComp4547Component', () => {
  let component: MyComp4547Component;
  let fixture: ComponentFixture<MyComp4547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
