import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5605Component } from './my-comp-5605.component';

describe('MyComp5605Component', () => {
  let component: MyComp5605Component;
  let fixture: ComponentFixture<MyComp5605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
