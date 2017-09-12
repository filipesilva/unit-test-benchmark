import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8431Component } from './my-comp-8431.component';

describe('MyComp8431Component', () => {
  let component: MyComp8431Component;
  let fixture: ComponentFixture<MyComp8431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
