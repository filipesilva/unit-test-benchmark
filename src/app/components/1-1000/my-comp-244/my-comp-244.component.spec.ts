import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp244Component } from './my-comp-244.component';

describe('MyComp244Component', () => {
  let component: MyComp244Component;
  let fixture: ComponentFixture<MyComp244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
