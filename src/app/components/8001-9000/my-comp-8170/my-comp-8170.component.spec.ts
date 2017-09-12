import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8170Component } from './my-comp-8170.component';

describe('MyComp8170Component', () => {
  let component: MyComp8170Component;
  let fixture: ComponentFixture<MyComp8170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
