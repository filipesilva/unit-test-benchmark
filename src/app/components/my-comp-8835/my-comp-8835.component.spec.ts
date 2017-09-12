import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8835Component } from './my-comp-8835.component';

describe('MyComp8835Component', () => {
  let component: MyComp8835Component;
  let fixture: ComponentFixture<MyComp8835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
