import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5161Component } from './my-comp-5161.component';

describe('MyComp5161Component', () => {
  let component: MyComp5161Component;
  let fixture: ComponentFixture<MyComp5161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
