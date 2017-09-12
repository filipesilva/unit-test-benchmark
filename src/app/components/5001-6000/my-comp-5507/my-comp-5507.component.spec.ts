import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5507Component } from './my-comp-5507.component';

describe('MyComp5507Component', () => {
  let component: MyComp5507Component;
  let fixture: ComponentFixture<MyComp5507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
