import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8720Component } from './my-comp-8720.component';

describe('MyComp8720Component', () => {
  let component: MyComp8720Component;
  let fixture: ComponentFixture<MyComp8720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
