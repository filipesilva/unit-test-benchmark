import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8349Component } from './my-comp-8349.component';

describe('MyComp8349Component', () => {
  let component: MyComp8349Component;
  let fixture: ComponentFixture<MyComp8349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
