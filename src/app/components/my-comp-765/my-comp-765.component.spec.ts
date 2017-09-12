import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp765Component } from './my-comp-765.component';

describe('MyComp765Component', () => {
  let component: MyComp765Component;
  let fixture: ComponentFixture<MyComp765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
