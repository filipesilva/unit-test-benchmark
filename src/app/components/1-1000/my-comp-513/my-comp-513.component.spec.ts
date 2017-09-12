import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp513Component } from './my-comp-513.component';

describe('MyComp513Component', () => {
  let component: MyComp513Component;
  let fixture: ComponentFixture<MyComp513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
