import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp182Component } from './my-comp-182.component';

describe('MyComp182Component', () => {
  let component: MyComp182Component;
  let fixture: ComponentFixture<MyComp182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
