import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5419Component } from './my-comp-5419.component';

describe('MyComp5419Component', () => {
  let component: MyComp5419Component;
  let fixture: ComponentFixture<MyComp5419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
