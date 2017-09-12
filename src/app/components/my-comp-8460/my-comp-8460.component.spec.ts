import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8460Component } from './my-comp-8460.component';

describe('MyComp8460Component', () => {
  let component: MyComp8460Component;
  let fixture: ComponentFixture<MyComp8460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
