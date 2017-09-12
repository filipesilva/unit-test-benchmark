import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp396Component } from './my-comp-396.component';

describe('MyComp396Component', () => {
  let component: MyComp396Component;
  let fixture: ComponentFixture<MyComp396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
