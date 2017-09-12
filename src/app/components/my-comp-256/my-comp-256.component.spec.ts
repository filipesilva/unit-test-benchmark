import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp256Component } from './my-comp-256.component';

describe('MyComp256Component', () => {
  let component: MyComp256Component;
  let fixture: ComponentFixture<MyComp256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
