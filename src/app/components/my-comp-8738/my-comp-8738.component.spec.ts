import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8738Component } from './my-comp-8738.component';

describe('MyComp8738Component', () => {
  let component: MyComp8738Component;
  let fixture: ComponentFixture<MyComp8738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
