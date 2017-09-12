import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp772Component } from './my-comp-772.component';

describe('MyComp772Component', () => {
  let component: MyComp772Component;
  let fixture: ComponentFixture<MyComp772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
