import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4513Component } from './my-comp-4513.component';

describe('MyComp4513Component', () => {
  let component: MyComp4513Component;
  let fixture: ComponentFixture<MyComp4513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
