import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5722Component } from './my-comp-5722.component';

describe('MyComp5722Component', () => {
  let component: MyComp5722Component;
  let fixture: ComponentFixture<MyComp5722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
