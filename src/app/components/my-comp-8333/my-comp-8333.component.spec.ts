import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8333Component } from './my-comp-8333.component';

describe('MyComp8333Component', () => {
  let component: MyComp8333Component;
  let fixture: ComponentFixture<MyComp8333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
