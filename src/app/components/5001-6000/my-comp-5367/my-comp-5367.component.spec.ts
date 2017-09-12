import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5367Component } from './my-comp-5367.component';

describe('MyComp5367Component', () => {
  let component: MyComp5367Component;
  let fixture: ComponentFixture<MyComp5367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
