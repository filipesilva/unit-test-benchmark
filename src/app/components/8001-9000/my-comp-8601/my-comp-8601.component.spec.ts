import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8601Component } from './my-comp-8601.component';

describe('MyComp8601Component', () => {
  let component: MyComp8601Component;
  let fixture: ComponentFixture<MyComp8601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
