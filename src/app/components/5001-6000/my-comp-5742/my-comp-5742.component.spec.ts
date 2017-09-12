import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5742Component } from './my-comp-5742.component';

describe('MyComp5742Component', () => {
  let component: MyComp5742Component;
  let fixture: ComponentFixture<MyComp5742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
